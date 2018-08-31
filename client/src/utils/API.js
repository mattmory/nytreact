import axios from "axios";
require("dotenv").config();

let apiKey = process.env.REACT_APP_NY_TIMES_KEY;


export default {
  // Gets all books
  getFaves: function() {
    return axios.get("/api/story");
  },
  addFav: function(favData) {
    //buildJSON
    let favJSON = 
    {
      id: favData._id,
      title: favData.headline.main,
      link: favData.web_url,
      publishedDate: favData.pub_date,
      Preview: favData.snippet
    }
    return axios.post("/api/story",favJSON);
  },
  // Gets the book with the given id
  delFav: function(id) {
    return axios.delete("/api/story/" + id);
  },
  getStories: function(topics,sYear,eYear) {
    if(topics === null)
    {
      return [];
    }
    else {
      //build Date Queries
      let dQuery = "";
      if (sYear !== "")
      {
        dQuery+="&begin_date=" + sYear + "0101";
      }
      if (eYear !== "")
      {
        dQuery+="&end_date=" + eYear + "1231";
      }
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+ apiKey + "&q=" + topics + dQuery + "&fq=document_type:(\"article\")");
    }    
  }
};