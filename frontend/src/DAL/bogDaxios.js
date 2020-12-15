class bogDaxios {
    constructor(baseURL) {
        this.baseURL = baseURL
    }
    get(url) {
        return fetch(this.baseURL+url, {method: 'GET', credentials : "include"});
        
    }
    post(url,json) {
        return fetch(this.baseURL+url, {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(json),
                //mode: 'no-cors',
                credentials : "include"
            })
    }
}

export default bogDaxios