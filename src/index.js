import React  from 'react';
import App from './App';
import  ReactDOM  from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class Index extends React.Component {
 
  render() { 
    return (
      <App />
 
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
 
export default Index;