## Request Routes
![alt](https://imgur.com/eMDXgqk)

### 1. api/user
#### a. api/user/signup
POST {"username":"valid_emailId", password:"some_password"} to /user/signup to register to the service
![alt](https://imgur.com/a2Qkk5R)

#### b. api/user/login
POST registered username and password to /user/login get a JSON web token. The web token has an expiry time of 1 hour after which the user will be prompted to login again
![alt](https://imgur.com/Jv3M9Ci)

### 2. api/
#### a. api/url/shorten

##### Request Header:
Use the JSON web token in request 'Authorization' header for making post requests to url/shorten a long URL otherwise the path returns authentication error
![alt](https://imgur.com/thVSbMP)

##### Request Body:
POST longUrl to the url/shorten route and get the shortUrl as response
![alt](https://imgur.com/Olhnx68)


##### b. api/{shortUrlCode}
Make GET request to url/{shortUrlCode} to get the response webpage
![alt](https://imgur.com/qMqYUC4)

#### Dependencies
![alt](https://imgur.com/QfIs6Tb)

#### Database Snapshot:
![alt](https://imgur.com/3uC0oqM)

* User Collection
![alt](https://imgur.com/3uC0oqM)

* URL collection 
![alt](https://imgur.com/bcHT52X)

* Counter collection
![alt](https://imgur.com/pxzbLbd)