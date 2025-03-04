# NodeJS API with React FrontEnd Job Interview

## Setting up the project

This section is how the project environment was setup

> The environment is Ubuntu 20.04 on WSL2

```bash
# https://github.com/nodesource/distributions/blob/master/README.md

curl -fsSL https://deb.nodesource.com/setup_23.x -o nodesource_setup.sh # retrieve the apt-get source for NodeJS and store it in a file
sudo -E bash nodesource_setup.sh # adds the sources to apt-get which includes the lates version of NodeJS
sudo apt-get install nodejs # installs the latest version of nodeJS from the sources added above
node -v # check the version of NodeJS
npm -v # check the version of npm (if it is outdated, it shows a command that updates it to the latest version)
sudo npm install -g npm@11.1.0 # update npm to the latest version
npm -v # check the version again to make sure it is up to date

npm init #execute inside the project's directory
```

### Production dependencies

```bash
npm install express # our nodeJS API request server
npm install dotenv # allows using a .env file and reading/parsing it
npm install mongoose # allows working with mongoDB and modeling the data/schema
npm install colors # allows coloring the console log outputs
```

### Development dependencies

```bash
npm install --save-dev nodemon # allows the auto-restart of the server on file modification
npm install --save-dev @types/express # removes the warning from the express import
```

### Frontend

```bash
sudo npm install -g yarn
yarn create vite frontend --template react
cd frontend
yarn install
```

Fix a bug with Vite on WSL2, modify `vite.config.js`:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
})
```

now start the frontend server

```bash
yarn run dev
```

## Development

If you cloned the project and want to use it:

```bash
npm install # this should automatically install the dependencies from `package.json`
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
