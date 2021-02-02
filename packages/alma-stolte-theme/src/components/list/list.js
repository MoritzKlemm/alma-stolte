import {useState} from 'react';
import { connect, styled, decode } from "frontity";
import Project from '../ProjectPreview'
import Row from 'react-bootstrap/Row'

const List = ({ state }) => {

  const [initialList] = useState(state.source.get(state.router.link).items);
  const [listLength] = useState(initialList.length);
  const [firstHalf] = useState(initialList.slice(0,listLength/2));
  const [secondHalf] = useState(initialList.slice(((listLength/2)),listLength));


  // filtering posts returning only category "projekte" aka 4771.
  const filterProjects = (il) => {
    return (il.filter(({ id, categories }) => {
      // creating new variable to actually "regrab" items with coresponding id
      const item = state.source["post"][id];
      return item.categories != 4771;
    }))
  }

  return (
    <Row>
      
      {/* mapping first half of list projects to sustain grid behavior */} 
      {filterProjects(firstHalf).map(({ id }) => {
        const item = state.source["post"][id];
        return <Project key={item.id} item={item} />;
      })}

      {/* mapping second half of list projects */} 
      {filterProjects(secondHalf).map(({ id }) => {
        const item = state.source["post"][id];
        return <Project key={item.id} item={item} />;
      })}
    </Row>
  );
};

export default connect(List);
