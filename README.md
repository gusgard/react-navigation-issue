# NF
Events app


## Setup

Please read and follow [React-Native's instructions](https://facebook.github.io/react-native/docs/getting-started.html) to configure the platform(s) you'd like to use. Once you have either Android Studio or XCode up and running, follow this setup.

**Advice:** You should have done this already, but in Android Studio you must create a device and set it up in order to mount the application.

### OS Versions

* Android Marshmallow or better.
* iOS 8 or better.


### Final Setup
`yarn install`

`yarn start`

## ios
`yarn ios`

## android
`yarn android`

The last two commands (`yarn android` and `yarn ios`) should be run only once (they install the app on the emulator) for each device. Any updates done to the code will be reflected instantly without needing to re-run.

Create a file `src/config/ip-config.js` with your IP. Check `ip-config.example` in the same directory. If you are developing on Android, you **must** set your local IP, on iOS you can use `localhost` alias.


# Debugging

Debugging in React Native can be quite hard without proper tools. For instance, debugging with Google Chrome is an option (comes natively installed). Another great tool is [React Native Debugger](https://github.com/jhen0409/react-native-debugger), which can be set as the default debugger in MacOS (in Linux you'll have to open it manually).

# App Icons

Automatic icon resizing for React Native. [**react-native-icon**](https://www.npmjs.com/package/react-native-icon)

To edit the icon, change the image named `icon.png` on the project root. Then run:

```./node_modules/.bin/react-native-icon
```

# Release

## Android

### ADB

Install adb: `brew cask install android-platform-tools`

### Install certificate - signed APK

`~/.gradle/gradle.properties`
```
SKEDLER_RELEASE_STORE_FILE=...
SKEDLER_RELEASE_KEY_ALIAS=...
SKEDLER_RELEASE_STORE_PASSWORD=...
SKEDLER_RELEASE_KEY_PASSWORD=...
```
Source: https://facebook.github.io/react-native/docs/signed-apk-android.html


## APPLE STORE

### 1 - REMOVE localhost NSExceptionDomains
### 2 `yarn ios-beta`
