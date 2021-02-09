import React from 'react'
import {Link} from 'react-router-dom'
import Divider from '../layout/Divider'

function ErrorPage() {
    return (
        <div className="container">
            <Divider text="Page Not Found"/>
            <div className="py-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Oops!</h1>
                        <h2>
                            404 Not Found</h2>
                        <div className="error-details">
                            Sorry, an error has occured, Requested page not found!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg"><span className="fa fa-home"></span>Take Me Home </Link>
                            <Link to="/contact" className="btn btn-default btn-lg"><span className="fa fa-envelope"></span> Contact Support </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
            
        </div>
    )
}

export default ErrorPage
