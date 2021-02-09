import React from 'react'

function Divider({text}) {
    return (
        <div className="text-divider-container">
            <br/>
            <div className="well">
                <h4 className="text-divider"   style={{fontSize: '1.5rem'}}><span>{text}</span></h4>
            </div>
        </div>
    )
}

export default Divider
