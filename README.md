# The Skeldjs site

A site hosting content for
* How to get started with SkeldJS
    * Guide to writing your own plugins
    * Full API documentation for plugins
* An online packet debugger and tools for Among Us.

Available for preview at https://skeldjs.vercel.app.

## Installation
### Prerequisites
* [Node.js](https://nodejs.org)
* [NPM](https://npmjs.org) (Comes with node)
* [Yarn](https://yarnpkg.com)
* [Git](https://git-scm.org)


### Install repository and packages
Open a command prompt in a folder of your choosing.

1. Install the repository with `git clone https://github.com/SkeldJS/skeldjs.vercel.app`

2. Enter the server install directory with `cd skeldjs.vercel.app`

3. Install packages for the repository with `yarn install`

### Starting
Enter `npm run dev` in the command prompt to run a local development version of the site.

This will be available for preview at `http://localhost:3000`

### Building for a server
Build the server for server-side with `npm run build`

Serve the build files at `__sapper__/build` with `npm run start`

This will be available for preview at `http://localhost:5000`

### Exporting for server-less
Export the server into separate html files for hosting on serverless services with `npm run export`

Exported files will be available at `__sapper__/export`

# Notes
> The most comprehensive set of SkeldJS plugin documentation and JavaScript protocol utilities for Among Us.