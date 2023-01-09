import React from 'react';
import './App.module.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/SearchPage";
import Header from "./components/header/Header";
import styles from './App.module.scss'

function App() {
  return (
      <div className={styles.app}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="search" element={<Search/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
