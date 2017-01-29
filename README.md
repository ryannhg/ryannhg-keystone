# Personal Site
> KeystoneJS


### Local Development
__Requirements__

1. To run local website: [NodeJS](https://nodejs.org/en/)

1. To run local database [Docker](https://www.docker.com/products/docker) (or [MongoDB](https://www.mongodb.com/download-center?filter=enterprise&gclid=CjwKEAiAwfzDBRCRmJe7z_7h8yQSJAC4corOTUS8Ht27ee-IR0ESBtEmysgzX5qmAduxVoP39gvgVRoCKUTw_wcB#enterprise) if docker is too hipster)


__Local Setup__

1. Clone this repository and enter the directory containing `package.json`

2. Run __`npm install`__ to install all dependencies

3. Run __`npm run mongodb`__ to start the database with [Docker Compose](https://docs.docker.com/compose/install/) at `http://localhost:27017`

    - If you don't have Docker installed, __ignore this command, and set `MONGO_URI` in your `.env` file (see below)

4. Run __`npm run dev`__ to start the website at [http://localhost:1234](http://localhost:1234)

    - Change the code, and the website should immediately reflect changes ("look ma, no gulpfile!")

__Optional Configuration__

1. Copy `example.env` into a new file called `.env` for any environment variables you'll need.
    - `NODE_ENV` - Used to set production mode (defaults to `development`)
    - `PORT` - Specifies the port to run the site on (defaults to `1234`)
    - `MONGO_URI` - Connection string to database (defaults to `mongodb://localhost/ryannhg`, which is Docker's IP )
    - `CLOUDINARY_URL` - Access to Cloudinary Image Service (defaults to `cloudinary://api_key:api_secret@cloud_name`)
    - `COOKIE_SECRET` - Secret used for encryption (defaults to `cookie-secret`)

