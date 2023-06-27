import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <div>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Nishanth</span>
                    <img alt='icon' className="img-profile rounded-circle" style={{ width: 30 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNVeRVAa6t-lq4qpDwr1MU1ZPvRf2WcuXtw&usqp=CAU" />
                    <Link className="btn btn-outline-success btn-sm" to="/">Logout</Link>
                </div>

            </div>
        </nav>

    )
}

export default Navbar