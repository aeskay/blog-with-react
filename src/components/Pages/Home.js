import React, {useState} from 'react';
import {data} from '../../data';
import PostSummary from './PostSummary';
import Carousel from './Carousel';
import Divider from '../layout/Divider';


function Home() {
    
    const [count, setCount] = useState(9)
    const [disabled, setDisabled] = useState(false)
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
      const newData = [...data].slice(0, count);
      shuffle(newData)
      
      const handleCount = () => {
        setDisabled(true)
        setTimeout(function() {
            setCount(count+6);
            setDisabled(false)
          }, 2000);
          
      }   

    const posts = newData.map(item => {
        return (<PostSummary item={item} key={item.id}/>)
    })
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="images/bg-1.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/bg-2.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="images/bg-3.jpg" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <Divider text={<span>Featured Posts</span>}/>
            <div className="pt-4">
                <Carousel shuffled={shuffled}/>
            </div>

            
            <Divider text={<span>Latest Posts</span>}/>

            <div className="postCont container">
                <div className="d-flex flex-wrap flex-row bd-highlight mb-3">
                    {posts}
                </div>
                <div>
                    <button disabled={disabled} className="btn btn-primary btn-lg" onClick={handleCount}>Load More Posts</button>
                </div>
            </div>
            
        </div>
    )
}

export default Home
