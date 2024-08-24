// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TurkishRecipes from './components/TurkishRecipes';
import AmericanRecipes from './components/AmericanRecipes';
import IndianRecipes from './components/IndianRecipes';
import NigerianRecipes from './components/NigerianRecipes';
import ThaiRecipes from './components/ThaiRecipes';
import SearchResults from './components/SearchResults';
import RecipeDetail from './components/RecipeDetail';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/American" element={<AmericanRecipes />} />
        <Route path="/category/Indian" element={<IndianRecipes />} />
        <Route path="/category/Nigerian" element={<NigerianRecipes />} />
        <Route path="/category/Thai" element={<ThaiRecipes />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
