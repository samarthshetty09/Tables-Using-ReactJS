import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
export const Header = () => {
    const curType = {
        cursor : "default"
    }
    
    return (
        <>
            <div style = {curType}>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link id ="linkDeco" to='/'>
                        <span className="navbar-brand mb-0 h1">Tables With ReactJS</span>
                        </Link>
                    </div>
                </nav>
        
            </div>
        </>
    )
}


