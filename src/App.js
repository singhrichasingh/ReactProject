
import './App.css';
import {Component} from 'react'
import Post from './components/post';
class App extends Component {
  
  

  constructor()
  {
   super();
  }


  

  render() { 
    return (
      <>
      <h1 className='headingTitle'>ALL POST</h1>
       <Post />
     
      </>
     );
  }
}
 
export default App;
