learnterminal ~~(better name pending)~~ is a tool for learning basic terminal commands through 
similar UI and in a completely safe space.

### Running app
To run this application you have to make sure you have Node installed. It's in development in Node v12, so anything under that might make some issues happen, although it's likely not going to.

Given that you have Node installed, it's recommended to use Yarn v1.x (you can `yarn -v` to check that as well) if you intend on contributing to it, as the package lock files may get mixed up if you run on NPM. You can hit a `node -v` into a terminal to test if Node is installed and, if so, which version it is; same for Yarn (`yarn -v`).

With those things set up, you can install all packages needed to get the application running through either a `yarn` or a `npm i` inside the project folder. After the packages are installed, you can run `yarn serve` or `npm run serve` to serve the app and that's it. The app should be running on your machine, probably on port 8080.