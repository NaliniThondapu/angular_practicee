## NPM
- NPM command line interface is a software that we used to install a third party packages.
- This stands for NODE PACKAGE MANAGER
- This will automatically installed along with NODEJS software.
- This is a commandline interface and is used to install open source packages and also a package repository from where the pacakages got installed.
- For nodejs project "package.json" is the mandatory one, because it has all the project dependencies ,required packages and all.
- to create that json we need to execute the below commands

```
npm init
```

```
S C:\Nalini\angular_practice\angular_practicee\NodeJs\src\app\NodeJsBasics> npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejsbasics) node-js-basic
version: (1.0.0) 1.0.0
description: learn basics of NODEJS
entry point: (app.js)                                                                                                                
test command:                                                                                                                        
git repository:                                                                                                                      
keywords:                                                                                                                            
author:                                                                                                                              
license: (ISC)                                                                                                                       
About to write to C:\Nalini\angular_practice\angular_practicee\NodeJs\src\app\NodeJsBasics\package.json:

{
  "name": "node-js-basic",
  "version": "1.0.0",
  "description": "learn basics of NODEJS",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes) yes
```

## Types of Packages and Installations
- A Package can be classified as a regular and development dependencies.
- A package is called a regular dependency , if the working of our code or application which we are writing , depends on that package.
- A package is called a development dependency , if the package is only required for the development purpose and on which , the working of our application does not depend like code formatter etc.These are used to improve the fastness of development process.
- To install a package in NODE we need to use the below command. If the version is not mentioned the latest version of that package will be installed.

```
npm install (packagename)
```

- To install dev dependency need to use like below command
  ```
  npm install nodemon --save-dev
  ```

  - Dependencies will add like below in package.json after these commands executed
    
 ```
    {
  "name": "node-js-basic",
  "version": "1.0.0",
  "description": "learn basics of NODEJS",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

- to install pacjage globally use the below command
```
npm install -g nodemon
```

## How can we use nodemon
- To use the nodemon we need to execute the below command
- This nodmon is useful, when we made any changes in the js file no need to start manually it will automatically reflect the changes.
  ```
  nodemon (jsfilename)
  ```




