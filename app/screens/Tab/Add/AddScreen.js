import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import KeywordInput from "./Components/KeywordInput";
import Button from "./Components/Button";
import KeywordList from "./Components/KeywordList";
import Keyword from "./Components/Keyword";
import KeywordButton from "./Components/KeywordButton";

let keywordIndex = 0;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class AddScreen extends Component {
  constructor() {
    super();
    this.state = {
      keywordValue: "",
      keywords: [],
      urlValue: "",
      urls: [],
      type: "All",
    };
    this.submitKeyword = this.submitKeyword.bind(this);
    this.deleteKeyword = this.deleteKeyword.bind(this);
  }
  keywordChange(keywordValue) {
    this.setState({ keywordValue });
  }
  urlChange(urlValue) {
    this.setState({ urlValue });
  }
  submitKeyword() {
    if (
      this.state.keywordValue.match(/^\s*$/)
      //||this.state.urlValue.match(/^\s*$/)
    ) {
      return;
    }
    //나중에 필요하면 url도 여기서 등록해서 urls배열에 넣어주기 or submit따로만들기
    const keyword = {
      title: this.state.keywordValue,
      keywordIndex,
      complete: false,
    };
    keywordIndex++;
    const keywords = [...this.state.keywords, keyword];
    this.setState({ keywords, keywordValue: "" });
  }
  deleteKeyword(keywordIndex) {
    let { keywords } = this.state;
    keywords = keywords.filter(
      (keyword) => keyword.keywordIndex !== keywordIndex
    );
    this.setState({ keywords });
  }
  render() {
    const { keywordValue,keywords } = this.state;
    return (
      <DismissKeyboard>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.header_title}>키워드 추가 </Text>
          </View>

          <View style={styles.bottom_container}>
            <KeywordInput
              keywordValue={keywordValue}
              keywordChange={(text) => this.keywordChange(text)}
            />

            {/* <URLInput
              urlValue={urlValue}
              urlChange={(text) => this.urlChange(text)}
            /> */}
            <KeywordList
              deleteKeyword={this.deleteKeyword}
              keywords={keywords}
            />
            <Button submitKeyword={this.submitKeyword} />
            <ScrollView keyboardShouldPersistTaps="always"></ScrollView>
          </View>
        </View>
      </DismissKeyboard>
    );
  }
}
export default AddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    borderBottomColor: "gainsboro", // 회색
    borderBottomWidth: 1.5,
  },
  header_title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 8,
    color: "dodgerblue",
  },
  bottom_container: {
    flex: 15, //이거 더 증가시키면 헤더 부분 작아짐
  },
});
