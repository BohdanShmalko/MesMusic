const Client = require('./client')
      redis = require('redis')

const TOKEN_LENGTH = 100,
      ALPHA_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      ALPHA_LOWER = 'abcdefghijklmnopqrstuvwxyz',
      ALPHA = ALPHA_UPPER + ALPHA_LOWER,
      DIGIT = '0123456789',
      ALPHA_DIGIT = ALPHA + DIGIT,
      TWENTY_HOUR = 60 * 60 * 20

const generateToken = () => {
  const base = ALPHA_DIGIT.length;
  let key = '';
  for (let i = 0; i < TOKEN_LENGTH; i++) {
    const index = Math.floor(Math.random() * base);
    key += ALPHA_DIGIT[index];
  }
  return key;
}

class Sesion {
    constructor(req, res){
        this.client = new Client(req, res)
        this.redisClient = redis.createClient()
        this.token = null
        this.initial()
    }

    async initial() {
        this.client.parseCookie()
        //console.log(this.client.cookie)
        if(!this.client.cookie.token) {
            this.token = generateToken()
            await this.redisClient.set(this.token, JSON.stringify({}), err => {
                if(err) throw err 
            })
            this.client.setCookie('token', this.token)
            await this.redisClient.expire(this.token, TWENTY_HOUR)
        }else this.token = this.client.cookie.token     
    }

    async get(callback) {
        let {token} = this
        await this.redisClient.get(token, (err, data) => {
            if(err) throw err 
            callback(data)
        })
    }

    async set(object){
        await this.redisClient.set(this.token, JSON.stringify(object), err => {
            if(err) throw err 
        })
    }
    end(){
        this.client.sendCookie()
    }
}

module.exports = Sesion;