import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
const URLInput = ({ urlValue, urlChange }) => (
  <View style={styles.uriIn}>
    <TextInput
      multiline={true}
      placeholder={
        "알림을 받아보고 키워드 알림을 \n등록할 웹사이트의 URI을 입력하세요."
      }
      placeholderTextColor="dimgray"
      fontSize="16"
      textAlign="center"
      value={urlValue}
      onChangeText={urlChange}
    ></TextInput>
  </View>
);
const styles = StyleSheet.create({
  uriIn: {
    height: 80,
    width: 330,
    backgroundColor: "gainsboro",
    marginTop: 15,
    marginLeft: 19,
    paddingTop: 13,
    borderRadius: 6,
  },
});
export default URLInput;
