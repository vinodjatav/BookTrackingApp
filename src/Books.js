import React, { Component } from "react";
import BookList from "./BookList";
import SearchBox from "./SearchBox";
import request from "superagent";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }
  componentDidMount() {
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredBooks = this.state.books.sort((a, b) => {
      
      var elements = document.getElementsByClassName("list");

      // Declare a loop variable
      var i;
      
      // List View
      function listView() {
        for (i = 0; i < elements.length; i++) {
          elements[i].style.width = "100%";
        }
      }
      
      // Grid View
      function gridView() {
        for (i = 0; i < elements.length; i++) {
          elements[i].style.width = "50%";
        }
      }
      
      /* Optional: Add active class to the current button (highlight it) */
      var container = document.getElementById("btnContainer");
      var btns = container.getElementsByClassName("btn");
      for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }


      return;
    });

    return (
      <div className="wrapper">
        <SearchBox
          data={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <BookList books={filteredBooks} />
      </div>
    );
  }
}

export default Books;
