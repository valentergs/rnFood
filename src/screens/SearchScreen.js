import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBiz from "../hooks/useBiz";
import BizList from "../components/BizList.js";

const SearchScreen = () => {
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
        <BizList results={filtrarBizPorPreco("$")} title="Barato" />
        <BizList results={filtrarBizPorPreco("$$")} title="Meio caro" />
        <BizList results={filtrarBizPorPreco("$$$")} title="Gastador" />
        <BizList results={filtrarBizPorPreco("$$$$")} title="Só milionário" />
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
