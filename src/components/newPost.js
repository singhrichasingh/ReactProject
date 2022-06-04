import React, { Component } from 'react';
import axios from 'axios';
class Newpost extends Component{
  constructor(props){
    super()
    this.state={
      title:"",
      body:''
    }
  }

  
getTitle(ev){
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
submit(title,content){
  console.log(title, content)
 let reqVal={
    title: title,
    body: content,
    userId: 1,
  }
  axios.post(`https://jsonplaceholder.typicode.com/posts`, { reqVal })
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert("New post added successfully with id "+res.data.id)
      })
 }
    render() {
        return (
            <div>
              <h1 className='headingTitle'>ADD NEW POST</h1>
                <label>Title:</label>
                <input type="text"  onChange={(e)=>this.getTitle(e)} />
                <br/>
                <label>Content:</label>
                <input type="text"  onChange={(e)=>this.getBody(e)} />
                <br/>
                <button onClick={()=>this.submit(this.state.title,this.state.body)}>Submit</button>
            </div>
    
          );
    }
}

export default Newpost;