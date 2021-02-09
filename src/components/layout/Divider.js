import React from 'react'

function Divider({text}) {
    return (
        <div className="text-divider-container">
            <br/>
            <div className="well">
                <h3 className="text-divider"><span>{text}</span></h3>
            </div>
        </div>
    )
}

export default Divider
