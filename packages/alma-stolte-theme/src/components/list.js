import {useState} from 'react';
import { connect, styled, decode, css } from "frontity";
import ProjectPreview from './ProjectPreview'
import Row from 'react-bootstrap/Row'

const List = ({ state }) => {

  // saving all posts 
  const [initialList] = useState(state.source.get(state.router.link).items);

  // filtering posts returning only category "projekte" aka 4771.
  const filterProjects = (il) => {
    return (il.filter(({ id, categories }) => {

      // creating new variable to actually "regrab" items with coresponding id
      const item = state.source["post"][id];
      return item.categories == 15915;
    }))
  }

  return ( 
    <Row>
      {/* mapping filtered list to project preview components */} 
      {filterProjects(initialList).map(({ id }) => {
        const item = state.source["post"][id];
        return <ProjectPreview key={item.id} item={item} />;
      })}
    </Row>
  );
};

export default connect(List);
