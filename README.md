## Request Routes
![alt](https://ibb.co/6XDcVwz)

### 1. api/user
#### a. api/user/signup
POST {"username":"valid_emailId", password:"some_password"} to /user/signup to register to the service
![alt](https://i.ibb.co/RNT6r1y/signup.png)

#### b. api/user/login
POST registered username and password to /user/login get a JSON web token. The web token has an expiry time of 1 hour after which the user will be prompted to login again
![alt](https://i.ibb.co/JFv95hk/login.png)

### 2. api/
#### a. api/url/shorten

##### Request Header:
Use the JSON web token in request 'Authorization' header for making post requests to url/shorten a long URL otherwise the path returns authentication error
![alt](https://i.ibb.co/sRnJd95/shorten-Header.png)

##### Request Body:
POST longUrl to the url/shorten route and get the shortUrl as response
![alt](https://i.ibb.co/Z6B0TB3/shorten-Body.png)


##### b. api/{shortUrlCode}
Make GET request to url/{shortUrlCode} to get the response webpage
![alt](https://i.ibb.co/8XWQ10W/geturl.png)

#### Dependencies
![alt](https://i.ibb.co/0nVZXJg/Capture7.png)

#### Database Snapshot:
![alt](https://i.ibb.co/kJkk2tM/Capture8.png)

* User Collection
![alt](https://i.ibb.co/Y3Hf2hh/Capture9.png)

* URL collection 
![alt](https://i.ibb.co/h9DPdkF/Capture10.png)

* Counter collection
![alt](https://i.ibb.co/vPFgFwY/Capture11.png)

