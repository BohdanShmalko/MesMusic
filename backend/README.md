# API

## Login

### POST

 * /login - login to the account, check the login and password

Input body = {login, password}
 
Output data = {message}

 * /logout - log out of the account, delete all data from sessions and cookies

Output data = {message}

---------------------

## Registration

### POST

 * /createuser - create a new user

Input body = {name, lastName, (email OR phoneNumber), password}
 
Output data = {message}

---------------------

## Profile

### GET

 * /getprofile/:userId - take all the basic information about the user

Input body (in parameter) = userId

Output data = {...in process}

### POST

 * /photo - add a new photo to your profile

Input body (file) = photo

Output data = {message}

 * /newpost - add a new post to the profile

Input body = {...in process}

Output data = {message}

### PUT

 * /mainphoto - update main photo in your profile

Input body (file) = photo

Output data = {message}

 * /name - update name in your profile

Input body = {name}

Output data = {status}

 * /aboutme - update about me in your profile

Input body = {aboutMe}

Output data = {message}

 * /status - update status in your profile

Input body = {status}

Output data = {message}

### DELETE

 * /mainphoto - delete main photo from your profile

Input body = nothing

Output data = {message}

 * /photo/:photoId - delete photo from your profile

Input body (in parameter) = photoId

Output data = {message}

 * /post/:postId - delete post from your profile

Input body (in parameter) = postId

Output data = {message}

---------------------

## Music

### GET

 * /music/:userId - take user music

Input body (in parameter) = userId

Output data = {...in process}

 * /searchmusic/:musicName - find music

Input body (in parameter) = musicName

Output data = {...in process}

### POST

 * /loadmusic - add new (non-existent) music to your profile

Input body (file) = music

Output data = {...in process}

 * /addmusic - add new (existing) music to your profile

Input body = {musicId}

Output data = {message}

### DELETE

 * /music:/musicId - delete music from your profile

Input body (in parameter) = musicId

Output data = {message}

---------------------

## Friends

---------------------

## Chat

---------------------

## Groups

---------------------

## News

---------------------

## Training
