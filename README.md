# Read Me:

# MOVE

MOVE is a free event management and content marketing platform that lets Patriots find events and school-based organizations at George Mason University. 

# Building Dependencies

  1.	```nodejs and expo```: MOVE is written in JavaScript and uses the React Native framework in order to build for both iOS and Android devices. 
  2.	```yarn```: We use yarn for package management.


# Environment Files:

1.	MOVE loads configuration variables through JS/JSON files included in the build process. All following paths are relative to the repository root. 
2.	Since all config values are loaded through nodejs and expo, build the project will notify you if something is missing. 
3.	```App.js``` contains the main/opening code for the app.
4.	```User-reg``` contains the user registration code for both user sign-in and sign-up.
5.	```Index/Components``` this contains the applications navigation and ease-of-access for the app. 
6.	```Index/Mocks``` this is a mock folder account which contain mock information a users contact. 
7.	```Index/Screens``` contains JavaScript folders that are connected to user profiles, emails, tabs, etc. 
8.	```Assets/``` contains the apps assets. 


# Installing NodeJS and NPM

In order for us to be able to install React-Native and Expo-Cli, we need to install NodeJS and NPM. The documentation link is: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm which provides the resource to properly install NodeJS and NPM.

# Installing Xcode or Android Studio:

In order to run the code, we need to install an app development environment. For Mac OS X users it is best to install Xcode. For Windows users only Android Studio can be installed. Mac OS X users are the only ones able to install both Xcode and Android Studio.

# Setting Up The Development Environment: 

We now need to set up the environment for React Native. The Documentation for setting up the environment can be found here: 

https://reactnative.dev/docs/environment-setup

First:

  1. ``` npm install -g expo-cli ``` 

Second:

  1. ``` expo init MoveApp ```
  2. ``` cd move-app ``` 
  3. ``` npm start ```

# Building & Serving:
The package.json contains all necessary commands for building MOVE. In order to run the app, those dependencies must be installed. Some examples (but not limited to):

  1. ``` npm install react-native-gesture-handler ```
  2. ``` npm install react-navigation  ```
  3. ``` npm install react-native-elements ```
  4. ``` npm install @react-navigation/native   ```

Run Expo: 
``` npm run ios ```
Or
``` npm run android ```
