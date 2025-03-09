import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert, Pressable } from "react-native";
const WelcomeScreen = ({ navigation, title }) => {
  // Add welcome screen code here.

  const buttonPressed = () => {
    navigation.navigate('Subscribe')
  }
  return <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={require("../assets/little-lemon-logo.png")}
        accessible={true}
        accessibilityLabel="Little Lemon Logo"
        style={styles.imageStyle}
      />
    </View>

    <Text style={styles.text} numberOfLines={2}>
      Little Lemon, your local {"\n"} Mediterranean Bistro
    </Text>

    <Pressable onPress={buttonPressed} style={styles.buttonStyle}>
      <Text style={styles.buttonText}>
        NewsLetter
      </Text>
    </Pressable>
  </View>;
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    width: 220,
    height: 220,
    marginBottom: 48
  },
  imageStyle: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 220
  },
  input: {
    fontSize: 18,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%'
  },

  buttonStyle: {
    width: "100%",
    borderRadius: 15,
    backgroundColor : "#3e524b",
    padding: 12
  },
  buttonText: {
    fontSize: 22,
    textAlign: "center",
    color: "#fff"
  }
});