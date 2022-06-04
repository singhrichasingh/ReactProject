import React, { Component } from 'react';
import axios from 'axios';
import Pagination from './pagination';
import Newpost from './newPost';
import ViewPost from './viewpost';
import plus from './../plus.png';
import Editpost from './editpost';
class Post extends Component {
   
    constructor(props)
    {
        super(props)
       this.state = { 
            setPosts:[],
            currentPage:1,
            postPerPage:10,
             currentPost:[],
             newPage:0,
             viewPostId:0,
             viewPerPosts:{}
           } 
        console.log(this.props);
      
       

    }
    async componentDidMount(){
        {
   
         const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
         console.log(res.data,"data");
         this.setState({setPosts:res.data})
     }
    const lastPage = this.state.currentPage * this.state.postPerPage
   const  firstPage = lastPage - this.state.postPerPage
   setTimeout(()=>{
    this.state.currentPost = this.state.setPosts.slice(firstPage,lastPage)
    console.log(lastPage,firstPage,this.state.currentPost,this.state.setPosts,"post")
   },1000)
    
 this.state.newPage = (number) => {
    console.log(number,"mo")
    this.setState({currentPage:number})
}
     }
  async   viewPost(viewPostId){
         await axios.get("https://jsonplaceholder.typicode.com/posts/"+viewPostId).then(res=>{
            console.log(res.data,"data");
            this.setState({viewPerPosts:res.data})
        })
        
      //this.state.viewPostId=viewPostId;
      console.log(this.state.viewPerPosts)
     }
    async deletePost(viewPostId){
        await axios.delete("https://jsonplaceholder.typicode.com/posts/"+viewPostId).then(res=>{
            alert("Post deleted successfully")
        }) 
     }
    async editPost(viewPostId){
     this.setState({viewPostId:viewPostId})
     
    }

    render() {
        console.log(this.state.currentPost,"hello") 
        return (
<>
   <button><img src={plus} className='imgSize'/></button>
  
<ul className='paddingStyle'>
      {this.state.setPosts.map(data =>(
          <div className='bgCard1'>
          <div className='bgCard'>
        <li className='fs-3  list-Style' key={data.id}>
         Title: {data.title}
          
        </li>
        <li className='list-Style fs-5 text-primary'>
         Content:  {data.body}
          
        </li>
      
        </div>
        <button onClick={()=>this.viewPost(data.id)}> View   </button>
        <button onClick={()=>this.editPost(data.id)}> Edit   </button>
        <button onClick={()=>this.deletePost(data.id)}> Delete </button>
        </div>
      ))}
      </ul> 
      <Pagination  postPerPage={this.state.postPerPage} totalPosts={this.state.setPosts.length} nextPage={this.state.newPage}/>
      <Newpost/>
      <ViewPost viewPerPosts={this.state.viewPerPosts}/>
      <Editpost viewPostId={this.state.viewPostId}/>
      
      {/* <Pagination itemsPerPage={4}/> */}

</>
         
      
        );
    }
}
 
export default Post;