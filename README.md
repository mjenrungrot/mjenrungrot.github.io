# Personal Webpage [![Build Status](https://travis-ci.org/mjenrungrot/mjenrungrot.github.io.svg?branch=source)](https://travis-ci.org/mjenrungrot/mjenrungrot.github.io) [![Dependencies Status](https://david-dm.org/mjenrungrot/mjenrungrot.github.io/status.svg?path=mjenrungrot.github.io)](https://david-dm.org/mjenrungrot/mjenrungrot.github.io?path=mjenrungrot.github.io) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/e6fb36a3d6b64e71b7ac2ea70319e267)](https://app.codacy.com/app/mjenrungrot/mjenrungrot.github.io?utm_source=github.com&utm_medium=referral&utm_content=mjenrungrot/mjenrungrot.github.io&utm_campaign=Badge_Grade_Settings)
 
Here's the repository for my personal webpage. To view my personal webpage, please visit 
[https://mjenrungrot.github.io](https://mjenrungrot.github.io).

The code in this repository is checked by ESLint. The type-checking is executed by Flow.

## Installation
```
git clone https://github.com/mjenrungrot/mjenrungrot.github.io
cd mjenrungrot.github.io/mjenrungrot.github.io
npm install
```
This requires you to have NodeJS installed. Node `>=8.2.0` should suffice.

## Building the site
```
npm test
npm run build
```
This will create a folder `mjenrungrot.github.io/build`. The contents in this folder can be uploaded to any hosting services
like Github Pages, Heroku, Surge.sh, etc. 

Note that you can run `npm run deploy` to deploy the site on Github Pages at `master` branch. To deploy on Github Pages at an 
arbitrary branch, you need to run `./node_modules/.bin/gh-pages -b <branch_name> -d build`.

## Developing
```
npm start
```
This will deploy the website on `localhost:8081`. The server automatically re-renders if any dependent files are modified.

## License

This repository is under MIT License.
