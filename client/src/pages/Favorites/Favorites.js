import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import "./Favorites.css"



class Favorites extends Component {
  state = {
    stories: []
  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {

    API.getFaves()
      .then(res => this.setState({ stories: res.data }))
      .catch(err => console.log(err));
  };

  delFavorite = (id) => {
    API.delFav(id)
      .then(res => this.loadStories())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <div className="storyDiv">
          {this.state.stories.length ? (
            <List>
              {this.state.stories.map(story => (
                <ListItem key={story._id}>
                  <a target="_blank" href={story.link}>
                    <strong>
                      {story.title}
                    </strong>
                  </a>
                  <p>{story.Preview}
                    <button style={{ float: "right" }} className="btn btn-outline-secondary my-2 my-sm-0" onClick={() => this.delFavorite(story._id)}>Unfavorite</button>
                  </p>
                </ListItem>
              ))}
            </List>
          ) : (
              <List>
                <h3>No favorites to display</h3>
              </List>
            )}
        </div>
      </Container>
    );
  }
}

export default Favorites;
