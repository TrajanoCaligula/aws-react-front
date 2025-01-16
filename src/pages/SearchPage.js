import React from "react";
import './SearchPage.css';
import logo from '../logo.svg';

const SearchPage = () => {
    return (
        <header className="SearchPage-header">
        <img src={logo} className="SearchPage-logo" alt="logo" />
        <p>
          Edit<code>src/SearchPage.js</code> and save to reload.
        </p>
        <a
          className="SearchPage-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
};

export default SearchPage;
