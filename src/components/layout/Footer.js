import React from 'react'

function Footer() {
    return (
        <div className="mt-5 py-2">
            <footer className="footer-bg text-center text-lg-start pt-4">
                <div className="container p-4 pb-0">
                    <section className="home-newsletter">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="single">
                                        <h2>Subscribe to our Newsletter</h2>
                                        <div className="input-group">
                                            <input type="email" className="form-control" placeholder="Enter your email"/>
                                            <span className="input-group-btn">
                                            <button className="btn btn-theme" type="submit">Subscribe</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
            <div className="text-center p-3 bg-dark text-light">
                © 2021 Copyright: SKA Technologies
                <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
         </footer>
        </div>
    )
}

export default Footer
