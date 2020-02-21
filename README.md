# urlShortener
url shortener service api


Request Routes

1. /user

a. /user/signup

POST {"username":"valid_emailId", password:"some_password"} to /user/signup to register to the service

b. /user/login

POST registered username and password to /user/login get a JSON web token. The web token has an expiry time of 1 hour after which the user will be prompted to login again



2. /url

a. /url/shorten

Request Header:

Use the JSON web token in request 'Authorization' header for making post requests to url/shorten a long URL otherwise the path returns authentication error

image.png

Request Body:

POST longUrl to the url/shorten route and get the shortUrl as response



b. /url/{shortUrlCode}
Make GET request to url/{shortUrlCode} to get the response webpage
