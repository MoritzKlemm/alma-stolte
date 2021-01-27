import React from 'react'
import { connect } from 'frontity';
import Link from './LinkFrontity'

const List = ({ state }) => {
    const data = state.source.get(state.router.link);
    console.log("BELOW ----- state.source.get(state.router.link) below")
    console.log(data)
  
    return (
      <div>
        {data.items.map(({ id }) => {
          const post = state.source.post[id];
          return (
            <Link key={id} href={post.link}>
              {post.title.rendered}
            </Link>
          );
        })}
      </div>
    );
  };

export default connect(List);