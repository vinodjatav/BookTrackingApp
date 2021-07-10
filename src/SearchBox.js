import React, { Component } from "react";

const SearchBox = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleChange}
          placeholder="Search books"
          type="text"
        />
        <button type="submit">Search</button>
      </form>

      <p align="right">
        <div id="btnContainer">
          <button className="btn" onclick="listView()">
            <i className="fa fa-bars"></i> List
          </button>
          <button className="btn active" onclick="gridView()">
            <i className="fa fa-th-large"></i> Grid
          </button>
        </div>
      </p>

    </div>
  );
};

export default SearchBox;
