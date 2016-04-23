# Print Hand Plugin With Cordova/PhoneGap For Android.

Print Hand Integration

This document described integration with PrintHand, a mobile printing application for Android devices. The purpose of integrating with PrintHand is to provide printing capabilities to applications. There are different ways to integrate with PrintHand depending on the application, its content and other requirements. You can check our [sample application on GitHub](https://github.com/DynamixSoftware/PrintingSample) that shows possible integration options. This project requires Android Studio.

More details [Printhand Doc](http://www.printhand.com/integration.php)


Try to implement Cordova plugin with PrintHand for Android app.

Plugin used .jar files for integration printhand plugin.  
     
     intentAPI-7.4.5-sources.jar,
     
     printingSDK-7.4.5-sources.jar

## Master branch:
 
 ```
cordova plugin add https://github.com/LokeshPatel/Cordova-Plugin-PrintHandPlugin.git
 ```
## Local folder:

 ``` 
    cordova plugin add Cordova-Plugin-PrintHandPlugin --searchpath path

```

## Android Studio tools require build.gradle file add bellow lib file reference 
 ```  
      dependencies {
      compile 'com.android.support:support-v4:23.1.1'
      compile 'com.android.support:appcompat-v7:23.1.1'
      compile files('libs/intentAPI-7.4.5-sources.jar')
      compile files('libs/printingSDK-7.4.5-sources.jar')
    }     
 ``` 

## 1) Print Web Page With Contain 

 ```  
    String printString = "Abcd";
    navigator.printhandplugin.printWebPageWithContain(function(a){
    console.log(a)
    },function(a){
    console.log(a)
    }, printString); 
     
 ``` 
  
## 2) Print Http URL Page
  ```
     fileURL ="http://www.printhand.com/;
    navigator.printhandplugin.printWithHttpURL(function(a){
    console.log(a)
     },
    function(a){console.log(a)}, 
    result); 
```

## 3) Print Files 
  ```
    String fileLocalPath ="file://....";
    navigator.printhandplugin.printFile(function(a){
     console.log(a)},function(a){console.log(a)
    }, fileLocalPath,false,
    "application/text");
```

## 4) Print Image
  ```
    String imageLocalPath = "file://...."
    navigator.printhandplugin.printImage(function(a){
    console.log(a)},function(a){console.log(a)}, 
    imageLocalPath,false); 
```

Reference: [Printhand Doc](http://www.printhand.com/integration.php)

If You Like Plugin ,[Please Buy a Cup of Coffee!] (https://www.paypal.com/in/cgi-bin/webscr?cmd=_flow&SESSION=tm8rOQltlq6UktOywExjLUHW-iHHQGB6FINQMxaU4DVdWQY6vt1cIJh87Tu&dispatch=5885d80a13c0db1f8e263663d3faee8d6625bf1e8bd269586d425cc639e26c6a)
