import React from 'react'
import {data} from '../../data';
import {Link} from 'react-router-dom'
import Divider from '../layout/Divider';

function Post(props) {
    const slug = props.match.params.post_id
    const title = slug.replace(/-/g, ' ');

    const post = data.find(item => item.title === title)


    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    const shuffled = shuffle([...data])
    const filtArr = shuffled.filter(item => item.title !==title && item.category === post.category)
    const spliceFilt = filtArr.splice(0, 2);
    const mapFilt = spliceFilt.map(item => {
        let slug = item.title.toLowerCase().trim().split(/\s+/).join('-');
        return (
            <div className="item col-sm-4 col-md-3" key={item.id}>
                <div className="card mb-2">
                    <img className="card-img-top" src={`/${item.image}`}
                    alt="Card image cap"/>
                    <div className="card-body">
                    <Link to={`/posts/${slug}`}><h4 className="card-title">{item.title}</h4></Link>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <nav aria-label="breadcrumb" className="pt-4">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/categories/${post.category}`}>{post.category}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{post.title}</li>
                </ol>
            </nav>
            <div className="row py-5">
                <div className="col-sm-6">
                    <img src={`/${post.image}`} alt="Card image cap"  className="img-fluid"/>
                </div>
                <div className="col-sm-6 d-flex align-items-center">
                    <h3 className="display-4">{post.title}</h3>
                </div>
            </div>
            <div className="row">
                <p className="post-body">{post.body}</p>
                <p className="post-body">{post.body}</p>
                <p className="post-body">{post.body}</p>
            </div>
            
            <Divider text={<span>Related Posts</span>}/>
            
            <div className="d-flex justify-content-between px-3">
                <p><i className="fa fa-arrow-left"></i> Previous</p>
                <p><i className="fa fa-arrow-right"></i> Next</p>
            </div>
            <div className="d-flex justify-content-between">
                {mapFilt}
            </div>
        </div>
    )
}

export default Post
