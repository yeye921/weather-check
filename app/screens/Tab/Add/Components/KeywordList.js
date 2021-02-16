import React from "react";
import { View } from "react-native";
import Keyword from "./Keyword";

const KeywordList = ({ keywords, deleteKeyword }) => {
  keywords = keywords.map((keyword, i) => {
    return (
      <Keyword
        deleteKeyword={deleteKeyword}
        key={keyword.keywordIndex}
        keyword={keyword}
      />
    );
  });
  return <View>{keywords}</View>;
};
export default KeywordList;
