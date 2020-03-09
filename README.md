## Request Routes
![alt](https://ibb.co/6XDcVwz)

### 1. api/user
#### a. api/user/signup
POST {"username":"valid_emailId", password:"some_password"} to /user/signup to register to the service
![alt](https://ibb.co/8bgxvJc)

#### b. api/user/login
POST registered username and password to /user/login get a JSON web token. The web token has an expiry time of 1 hour after which the user will be prompted to login again
![alt](https://ibb.co/rfxV4Wy)

### 2. api/
#### a. api/url/shorten

##### Request Header:
Use the JSON web token in request 'Authorization' header for making post requests to url/shorten a long URL otherwise the path returns authentication error
![alt](https://ibb.co/dMFJw4b)

##### Request Body:
POST longUrl to the url/shorten route and get the shortUrl as response
![alt](https://ibb.co/VWgsBgd)


##### b. api/{shortUrlCode}
Make GET request to url/{shortUrlCode} to get the response webpage
![alt](https://ibb.co/vD7M0H7)

#### Dependencies
![alt](https://ibb.co/yNB5Rsw)

#### Database Snapshot:
![alt](https://ibb.co/KDRRxJm)

* User Collection
![alt](https://ibb.co/mGfhJ44)

* URL collection 
![alt](https://ibb.co/c3DG8Ph)

* Counter collection
![alt](https://ibb.co/cFBMBgL)

