#!/bin/bash

# Set variables
APK_PATH="./*.apk"  # Adjust if your APK ends up in another directory
PACKAGE_NAME="com.yourcompany.yourapp"  # Replace with your actual package name

echo "🔧 Building APK locally..."
rm *.apk  # Clean up any existing APK files
eas build --platform android --profile preview --local

echo "📱 Connecting to device via ADB..."
adb start-server
adb devices

echo "📦 Installing APK on device..."
adb install -r $APK_PATH

echo "🚀 Launching app..."
adb shell monkey -p $PACKAGE_NAME -c android.intent.category.LAUNCHER 1