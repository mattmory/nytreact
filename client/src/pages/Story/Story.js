import React, { Component } from "react";
import Modal from 'react-modal';


//import FavBtn from "../../components/FavBtn";
//import UnFavBtn from "../../components/UnFavBtn";
//import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
//import { Link } from "react-router-dom";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Story.css"


const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%'
    // transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement("body");

class Story extends Component {
  state = {
    stories: [],
    errorMessage: "",
    modalIsOpen: false,
    startYear: "",
    endYear: "",
    topic: ""
  };

  componentDidMount() {
    // this.loadStories();
  }

  // loadStories = () => {
  //   console.log(this.state.topic)
  //   API.getStories(this.state.topic, "2018", "2019")
  //     .then(res => this.setState({ stories: res.data.response.docs }))
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic === "" || this.state.topic === null) {
      this.setState({ errorMessage: "Topic cannot be blank", modalIsOpen: true })
    }
    else if (this.state.startYear != null && parseInt(this.state.startYear,10) < 1900) {
      this.setState({ errorMessage: "The start year must be after 1900", modalIsOpen: true })
    }
    else if (this.state.endYear != null && parseInt(this.state.endYear,10) < 1900) {
      this.setState({ errorMessage: "The end year must be after 1900", modalIsOpen: true })
    }
    else if (this.state.startYear != null && this.state.endYear != null && parseInt(this.state.endYear,10) < parseInt(this.state.startYear,10)) {
      this.setState({ errorMessage: "The start year must be before the end year.", modalIsOpen: true })
    }
    else {
      API.getStories(this.state.topic, this.state.startYear, this.state.endYear)
        .then(res => this.setState({ stories: res.data.response.docs }))
        .catch(err => console.log(err));
    }
  };

  closeModal = () => {
    this.setState({ errorMessage: "", modalIsOpen: false });
  }

  addFavorite = (story) => {
    API.addFav(story);
  }




  render() {
    return (
      <Container fluid>
        <div className="searchForm">
          <form>
            <h5>Topic</h5>
            <Input
              onChange={this.handleInputChange}
              name="topic"
              placeholder="Topic (required)"
            />
            <h5>Start Year</h5>
            <Input
              onChange={this.handleInputChange}
              name="startYear"
              placeholder="Start Year"
            />
            <h5>End Year</h5>
            <Input
              onChange={this.handleInputChange}
              name="endYear"
              placeholder="End Year"
            />
            <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
          </form>
        </div>
        <div className="storyDiv">
          {this.state.stories.length ? (
            <List>
              {this.state.stories.map(story => (
                <ListItem key={story._id}>
                  <a target="_blank" href={story.web_url}>
                    <strong>
                      {story.headline.main}
                    </strong>
                  </a>
                  <p>{story.snippet}
                    <button style={{ float: "right" }} className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => this.addFavorite(story)}>Favorite</button>
                  </p>
                </ListItem>
              ))}
            </List>
          ) : (
              <List>
                <h3>No Results to Display</h3>
              </List>
            )}
        </div>
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Search Error"
            style={modalStyles}>
            <h5>Search Error</h5>
            <div>{this.state.errorMessage}</div>
            <button onClick={this.closeModal}>close</button>
          </Modal>
        </div>
      </Container>
    );
  }
}

export default Story;
