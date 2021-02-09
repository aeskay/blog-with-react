import React from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {data} from '../../data';
import {useState} from 'react';
import Divider from '../layout/Divider';
 

function SearchResults() {

    let display;
    const input = useSelector(state => state.input);
    
 
    const filterData = data.filter(item => {
        return item.body.toLowerCase().includes(input.searchInput.toLowerCase())
    })
    
    if(filterData.length!==0){
        
    }
    const mapFilter = filterData.map(item => {
        let slug = item.title.toLowerCase().trim().split(/\s+/).join('-');
        return (
            <div key={item.id} className="my-5">
                <div className="card mb-3" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img 
                                src={`/${item.image}`} 
                                className="card-img" 
                                alt="Card Banner"
                                style={{maxWidth: "350px"}}
                                />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <Link to={`/posts/${slug}`}><h5 className="card-title text-left">{item.title}</h5></Link>
                            <p className="card-text text-left">{item.body}</p>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            
        )
    })

    const noResult = 
         (<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            Unknown Entry</h2>
                        <div className="error-details">
                            Sorry, no reult was found for the search input. Please try again!
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>)
    
    if(filterData.length > 0){
        display = true
    } else {
        display = false
    }

    return (
        <div className="container">
            <Divider text="Search Page"/>
            <div className="py-3">
                {display ? <div>{mapFilter}</div>:<div>{noResult}</div>}
            </div> 
            
        </div>
    )
}

export default SearchResults
