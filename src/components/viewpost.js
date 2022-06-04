import React, { Component,  useEffect, useState } from 'react';
class ViewPost extends Component {
   
    constructor(props)
    {
        super(props)
        console.log(this.props.viewPerPosts )
      
        console.log(this.props);
 }


 render() { 
    return (
      <>
      <h1 className='headingTitle'>SPECIFIC POST</h1>
       Title: <h5>{this.props.viewPerPosts.title}</h5>
       Content:<h6>{this.props.viewPerPosts.body}</h6>
      </>
     );
  }
}

export default ViewPost;