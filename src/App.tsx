import React from 'react';
import './App.module.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import RestaurantPage from "./pages/restaurant/RestaurantPage";
import SearchPage from "./pages/search/SearchPage";
import Header from "./components/header/Header";
import styles from './App.module.scss'


function App() {
  return (
      <div className={styles.app}>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="search" element={<SearchPage/>}/>
                  <Route path="search/:id" element={<RestaurantPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
