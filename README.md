This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Development
### `docker-compose up -d`
Starts mongo for development


### `bash ./populateDB.bash`

Populates the DB with MLB Team Statistics

### `./mvnw spring-boot:run`

Starts up the back end and serves the file in the public folder.


### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Production

### `bash ./populateDB.bash`

Populates the DB with MLB Team Statistics

### `npm run build`

Builds the app for production to the `public` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `./mvnw spring-boot:run`

Starts up the back end and serves the file in the public folder.
