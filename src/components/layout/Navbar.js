import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {search} from '../../features/input/inputSlice'
import {Redirect} from 'react-router-dom';

function Navbar() {
    const [searched, setSearched] = useState('')
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearch = (e) => {
        dispatch(search(searchInput))
        setSearched(searchInput)
        e.preventDefault()
    }
    
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
            <a className="navbar-brand" href="/">
                
                &nbsp;Blog With React
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categories
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/categories/web">Web Development</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="/categories/graphics">Graphics Design</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="/categories/leads">Leads Generation</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink className="dropdown-item" to="/categories/seo">SEO</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                </ul>
                <form className="form-inline" onSubmit={handleSearch}>
                    <input onChange={handleChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                </form>
                {searched.length > 0 &&
                <Redirect to={{
                    pathname: '/search-results',
                }}/>
                }
            </div>
            </nav>
        </div>
    )
}

export default Navbar
