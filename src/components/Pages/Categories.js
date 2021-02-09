import React from 'react';
import {data} from '../../data';
import Divider from '../layout/Divider';
import PostSummary from './PostSummary';


function Categories(props) {

    const catName = props.match.params.cat_name;
    const toUpper = catName.toUpperCase()
    const dataFilter = data.filter(item => item.category === catName);
    // const dividerText = <p>{toUpper} CATEGORY ({dataFilter.length})</p>
    const dataMap = dataFilter.map(item => {
        return <PostSummary item={item} key={item.id}/>
    })
    return (
        <div>
            <Divider text ={<span>{toUpper} CATEGORY ({dataFilter.length})</span>}/>
            <div className="container py-5">
                <div className="d-flex flex-wrap flex-row bd-highlight mb-3">
                    {dataMap}
                </div>
            </div>
        </div>
    )
}

export default Categories
