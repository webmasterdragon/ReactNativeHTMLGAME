import React, { Component } from "react";
import { Platform, StyleSheet, SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";
import Orientation from "react-native-orientation";
import StaticServer from "react-native-static-server";

let server = new StaticServer(8080);

// Start the server
server.start().then(url => {
  console.log("Serving at URL", url);
});

// Stop the server
server.stop();

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    Orientation.lockToLandscapeRight();
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <View style={{ flex: 1 }}>
            <WebView
              source={{ uri: "https://reactnativegametest.000webhostapp.com/" }}
              style={styles.webviewContainer}
            />
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webviewContainer: {
    width: "100%",
    height: "100%"
  }
});
