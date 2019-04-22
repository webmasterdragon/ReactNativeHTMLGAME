/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, SafeAreaView, View } from "react-native";
import { WebView } from "react-native-webview";

type Props = {};
export default class App extends Component<Props> {
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
