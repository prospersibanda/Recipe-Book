import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RecipeDetail from './components/RecipeDetail'; // Import the RecipeDetail component
import Navbar from './components/Navbar'; // Import the Navbar component
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<RecipeDetail />} /> {/* Route for RecipeDetail */}
      </Routes>
    </Router>
  );
};

export default App;