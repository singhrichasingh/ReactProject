import React, { Component } from 'react';
import axios from 'axios';

class Editpost extends Component{
 constructor(props){
     super(props)
     this.state={
       title:"",
       body:''
     }
   
       } 
 
 cancel(){

 }
 getTitle(ev){
    console.log(this.props.viewPostId)
    let value=ev.target.value;
    this.setState({
      title:value
    })
    console.log(this.state.title)
    }
 getBody(ev){
    let value=ev.target.value;
     this.setState({
       body:value
     })
     console.log(this.state.body)
   }
   editPost(title,content){
     console.log(title, content)
    let reqVal={
        id: this.props.viewPostId,
       title: title,
       body: content,
       userId: 1,
     }
     axios.put(`https://jsonplaceholder.typicode.com/posts/`+this.props.viewPostId, { reqVal })
         .then(res => {
           console.log(res);
           console.log(res.data);
           alert("Edited post  successfully with id "+this.props.viewPostId)
         })
    }
 render() { 
    return (
      <>
      <h1 className='headingTitle'>Edit POST</h1>
      <div>
                <label>Title:</label>
                <input type="text"  onChange={(e)=>this.getTitle(e)} />
                <br/>
                <label>Content:</label>
                <input type="text" onChange={(e)=>this.getBody(e)} />
                <br/>

                <button onClick={this.cancel}>Cancel</button>
                <button onClick={()=>this.editPost(this.state.title,this.state.body)}>Submit</button>
            </div>
      </>
     );
  }
}

export default Editpost;