import React, { Component } from 'react';
class Pagination extends Component {
    
    constructor(props)
    {
        super(props)
       this.state = { 
         pageNumber : []
        } 
        console.log(this.props.totalPosts )
        for( let i=1 ; i<=Math.ceil(this.props.totalPosts / this.props.postPerPage); i++)
        {
           this.state.pageNumber.push(i);
        }
        console.log(this.state.pageNumber,"page")
    }
   
    render() {
        return ( 

            <> 
            
            <ul className='pagination'>
                {this.state.pageNumber.map(number => (
                    <li className='page-item' key={number}>
                        <a onClick={() =>(this.nextPage(number))} href='#' className='page-link'>
                        {number}
    
                        </a>
                    </li>
                ))}
            </ul>
            
            </>
    
          );
    }
    
 }

 
export default Pagination;

 