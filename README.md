# CustomMarkerIssueDemo

This is a demo React Native project to show a performance issue in custom marker in google maps on iOS using [react-native-maps](https://github.com/airbnb/react-native-maps). I have reported this [issue](https://github.com/airbnb/react-native-maps/issues/1031).

Screenshot:

![Screenshot](https://github.com/vinceyuan/CustomMarkerIssueDemo/raw/master/CustomMarkerIssueDemo.gif)

Performance profile of using custom marker:

![Screenshot](https://github.com/vinceyuan/CustomMarkerIssueDemo/raw/master/Profile.png)

### Run

1. Use your google maps API key for iOS in `ios/CustomMarkerIssueDemo/AppDelegate.m`.
1. Run `npm install && cd ios && pod install && cd ..`
1. If you want to run the app on Android, use your google maps API key for Android in `android/app/src/main/AndroidManifest.xml`.
1. Run `react-native run-ios` or `react-native run-android`.

Author: Vince Yuan

License: MIT
