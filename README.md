# NodeJS API with React FrontEnd Job Interview

## Setting up the project

```bash
# https://github.com/nodesource/distributions/blob/master/README.md

curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh
sudo -E bash nodesource_setup.sh
sudo apt-get install nodejs
node -v
sudo npm install -g npm@11.1.0
npm -v

npm init #execute inside the project's directory
```

### Production dependencies

```bash
npm install express dotenv mongoose colors
```

### Development dependencies

```bash
npm install --save-dev nodemon
```

## Development

If you cloned the project and want to use it:

```bash
npm install
```

> Note: If you are on WLS2 you need the `-L` option for `nodemon` to run it in legacy mode, otherwise it is not going to work. More info [here](https://github.com/microsoft/WSL/issues/4739) and [here](https://github.com/remy/nodemon/issues/1913)

### Environment Variables

> You need to request any omitted entries from the `.env` file in order for the project to work, or replace wit with your own.

You need to add the `.env` file to the root directory of the project. The `.env` file looks like this:

```env
NODE_ENV = development
PORT = 5000
MONGO_URI = XXXX
```
