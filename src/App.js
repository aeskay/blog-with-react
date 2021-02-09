import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Categories from './components/Pages/Categories';
import Post from './components/Pages/Post';
import Footer from './components/layout/Footer';
import './loader.js'
import SearchResults from './components/Pages/SearchResults';
import ErrorPage from './components/Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Switch className="switch-tag">
          <Route exact path='/' component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/categories/:cat_name" component={Categories}/>
          <Route path="/posts/:post_id" component={Post}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route component={ErrorPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
