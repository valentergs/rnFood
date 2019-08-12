import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBiz from "../hooks/useBiz";
import BizList from "../components/BizList.js";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, biz, errorMessage] = useBiz();

  const filtrarBizPorPreco = price => {
    // price === '$' || '$$' || '$$$'
    return biz.filter(x => {
      return x.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={{ marginLeft: 15 }}>{errorMessage}</Text>
      ) : // <Text style={{ margin: 15 }}>Encontramos {biz.length} resultados</Text>
      null}
      <ScrollView>
        <BizList
          results={filtrarBizPorPreco("$")}
          title="Barato"
          navigation={navigation}
        />
        <BizList
          results={filtrarBizPorPreco("$$")}
          title="Meio caro"
          navigation={navigation}
        />
        <BizList
          results={filtrarBizPorPreco("$$$")}
          title="Gastador"
          navigation={navigation}
        />
        <BizList
          results={filtrarBizPorPreco("$$$$")}
          title="Só milionário"
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

// const styles = StyleSheet.create({
//   background: {
//     margin: 15
//   }
// });

export default SearchScreen;
