import React from 'react';
import './App.css';
import Body from './components/body';
import Header from './components/header';
import Table from './components/table';
import SearchBar from "./components/searchbar";

function App() {
  return (
    <Body>
      <Header></Header>
      <SearchBar></SearchBar>
      <Table></Table>
    </Body>
  );
}

export default App;
