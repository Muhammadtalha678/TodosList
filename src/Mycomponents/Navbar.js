import React from 'react';
import PropTypes from 'prop-types';
import {
    Link, useLocation
} from "react-router-dom";

export default function Navbar(props) {
    const location = useLocation()
    return (
        <nav className="navbar navbar-expand-lg bg-success">
            <div className="container-fluid">
                <Link className={`navbar-brand ${location.pathname === '/' ? '' : 'text-white'}`} to='/'>{props.title}</Link>
                {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link className={`nav-link ${location.pathname === '/addTodo' ? '' : 'text-white'}`} aria-current="page" to='/addTodo'>AddTodo</Link>
                        </li>
                        <li className="nav-item">

                            <Link className={`nav-link ${location.pathname === '/about' ? '' : 'text-white'}`} to='/about'>About</Link>
                            {/* <a className="nav-link" href="#">About</a> */}
                        </li>
                    </ul>
                    {
                        props.searchbar ?
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            :
                            ""
                    }
                </div>
            </div>
        </nav>
    );
}

// Navbar.defaultProps = {
//     title: "Todo List",
//     searchbar: true
// }

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    searchbar: PropTypes.bool.isRequired
};
