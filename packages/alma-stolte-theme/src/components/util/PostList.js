import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "../list/list-item";
import Project from '../ProjectPreview'

const PostList = ({ state }) => {
  const collectionMain = state.source["post"]
  let projectsCollection = [];
  let vitaCollection = [];

  const sortPostCategories = (c, a1, a2) => {
    let sorted = []
    for(let i in c) {
      i.categories[0] == 15915 ? a1.push(i) : a2.push(i)
    }
    return sorted; 
  }

  return (
    <div>
      {console.log(state.source["post"][145].categories)}
      
    </div>
  ); 
};

export default connect(PostList);  