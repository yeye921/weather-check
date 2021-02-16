import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const Button = ({ submitKeyword }) => (
  <View style={styles.touch_container}>
    <TouchableHighlight
      underlayColor={"transparent"}
      style={styles.button}
      onPress={(() => Alert.alert("키워드 추가 완료"), submitKeyword)}
      //onPress={submitKeyword}
    >
      <View style={styles.button}>
        <Text style={styles.button_title}>완료</Text>
      </View>
    </TouchableHighlight>
  </View>
);
const styles = StyleSheet.create({
  touch_container: {
    marginTop: 20,
    marginLeft: 19,
    backgroundColor: "dodgerblue",
    height: 50,
    width: 330,
    borderRadius: 6,
  },
  button: {
    backgroundColor: "dodgerblue",
    height: 50,
    width: 330,
    borderRadius: 6,
    justifyContent: "center",
  },
  button_title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
export default Button;
