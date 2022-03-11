# Read Me:

-- March 11 Update -- 
* Centralized all the /src folder that contains: 
- ./core: Contains the app theme for colors and text
	* theme.js: which contains app theme colors
		* text: contains color for app
		* primary: contains color for primary
		* secondary: contains color for secondary
		* error: contains error color
- ./assets: moved from ./ to ./src which contains images
- ./screens: contains all the screens which were created
	* index.js: Contains link navigaton
	* LoginScreen.js: Contains the login screen for registration
	* RegisterScreen.js: Contains the registration screen for registraton
	* ResetPasswordScreen.js: Contains the reset password screen for registration
	* StartScreen.js: Contains the start screen for the app
	* moved most screens to ./screens
- ./helpers: contains email and passwords validator for when database is set up.
	* emailValidator.js: Checks if email is correct
	* nameValidator.js: Checks if valid name is entered
	* passwordValidator.js: Checks if password is correct
- ./comp: contains components for the app
	* BackButton.js: contains the component for the back button
	* Background.js: contains the component for the background
	* Button.js: Contains the button component
	* Header.js: Padding component
	* Logo.js: Contains the components for the logo
	* Paragraph: Contains the text component for the entire app
	* TextInput: Contains the TextInput for the entire app
* Dashboard now contains the app dashboard instead of App.js.
* App.js contains the start of the navigation page.
* Added the navigation for the mobile app. Allowing users to move from the LoginScreen to the Dashboard.
* Inside the Dashboard I quickly implemented a Logout button -- Will remove later to profile page.
	- Logout button isn't working properly as it should, so I'll keep it for now. Will update later. 
* Changed the tabBar in node_modules/react-native-tab-view/src/TabBarItem.tsx -- node_modules/react-native-tab-view/src/TabBarIndicator.tsx and node_modules/react-native-tab-view/src/TabBar.tsx
	- However, I can't find the text color, so I made the tab bar black for now.


New installation: 
npm install @react-navigation/stack
npm install react-native-gesture-handler



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
