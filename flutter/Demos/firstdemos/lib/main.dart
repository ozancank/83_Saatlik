import 'package:flutter/material.dart';

void main() {
  runApp(HelloWorldApp());
}

class HelloWorldApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My first app",
      home: Scaffold(
        appBar: AppBar(
          title: Text("App bar title"),
        ),
        body: MainPage(),
      ),
    );
  }
}

class MainPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.red,
      child: Center(
        child: Text(
          "Merhaba Dünya, " + selamVer(),
          textDirection: TextDirection.ltr,
          style: TextStyle(color: Colors.black, fontSize: 30.0),
        ),
      ),
    );
  }
}

String selamVer() {
  DateTime now = new DateTime.now();
  int hour = now.hour;
  if (hour < 12) {
    return "Günaydın";
  } else {
    return "İyi Akşamlar";
  }
}
