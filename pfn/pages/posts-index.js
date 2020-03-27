import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch'

export default class PostIndex extends Component {
  static async getInitialProps() {
    const postRes = await fetch(`https://pacefootballnews.com/wp-json/wp/v2/posts`)
    // https://pacefootballnews.com/wp-admin/post-new.php

    const newdata = await postRes.json();

    return {
      newdata
    }
  }

  render() {
    const { newdata } = this.props
    return (
      <>
        <h2>Hello Posts</h2>
        {newdata.map((post) => (
          <li>
            <a 
              target="_blank"
              rel="noopener noreferrer" 
              alt="news artile link" 
              href={post.link} >
            {post.title.rendered}
            </a>
          </li>
        ))}
      </>
    )
  }
}