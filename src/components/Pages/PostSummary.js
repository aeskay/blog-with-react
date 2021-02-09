import React from 'react';
import { Link } from 'react-router-dom';

function PostSummary({item}) {
    let slug = item.title.toLowerCase().trim().split(/\s+/).join('-');
    return (
        <div className="mt-5 bd-highlight col-md-4 col-sm-12 post-card" >
            <div style={{backgroundImage: `url(/${item.image})`}}>
                <div className="align-text-bottom post-summary-content  px-1">
                    <Link to={`/posts/${slug}`}><h4 className="h4 title-name text-light ">{item.title}</h4></Link>
                    <hr className="post-border"/>
                    <p className="category-name">{item.category}</p>
                </div>
            </div>
        </div>
    )
}

export default PostSummary
