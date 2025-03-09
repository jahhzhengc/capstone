// import * as React from 'react';
import { View, Text, Image, TextInput, StyleSheet, Alert , Pressable} from "react-native";
import { validateEmail } from '../utils';
import { useState } from 'react';

const SubscribeScreen = () => {
  const [email, setEmail] = useState('')
  const buttonPressed = () => {
    if (validateEmail(email)) {
      console.log(email + " is valid")
      Alert.alert('', 'Thank you for subscribing\nStay tuned!', [{ text: 'Ok', onPress: ()=> setEmail('') }])
    }
  }
  // Add subscribe screen code here
  return <View style={styles.container}>

    <View style={ {width:100, height:100}}>
      <Image
        source={require("../assets/little-lemon-logo-grey.png")}
        accesible={true}
        accessibilityLabel="Little Lemon Logo"
        style={styles.image}
      />
    </View>
    <Text style={styles.text} numberOfLines={2}>
      Subscribe to our newsletter for our latest delicious recipes!
    </Text> 
    <TextInput
      style={styles.textInput}
      onChangeText={setEmail}
      value={email}
      placeholder="Type your email"
      keyboardType="email-address"
    />
    <Pressable onPress={buttonPressed} 
    
    style={[styles.buttonStyle, validateEmail(email) ? styles.enabledButton : styles.disabledButton]}

    disabled={!validateEmail(email)} >
      <Text style={styles.buttonText}>Subscribe</Text>
    </Pressable>
  </View>;
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 32,
    gap: 24
  }, 

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    paddingVertical : 10
  },

  text: {
    fontSize: 19,
    textAlign: "center",
    paddingVertical: 20
  },

  textInput: {
    fontSize: 18,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%', 
  },
  
  buttonStyle:{
    padding: 10,
    width : "100%",
    borderRadius : 15, 
    gap: 18,
    alignItems: "center",
  },
 
  enabledButton: {
    backgroundColor: "#40534D",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", 
  },

  buttonText: {
    fontSize: 28,
    textAlign: "center",
    color: "#fff"
  }
});