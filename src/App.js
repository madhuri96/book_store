import './App.css';
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from './context/Context';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Books from './components/Books';
import BookCart from './components/BookCart';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route
              exact
              path='/'
              render={() => (
                <Fragment>
                  <Header />
                  <Books />
                </Fragment>
              )}
            />
            <Route path='/book-cart' element={<BookCart />} />
            <Route path='/book/details/:id' element={<BookDetails />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
