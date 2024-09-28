import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Landing() {
    return (
        <>
             <div className="container">
                <input type="checkbox" id="share-btn" />
                <label htmlFor="share-btn" aria-label="Share Button">
                    <span><b>CRUD</b></span>
                </label>

                <nav className="social-media-list" aria-label="Social Media Links">
                    <Link to={'/create'} ><i className="fa-solid fa-pen" /></Link>
                    <Link to={'/read'}><i className="fa-brands fa-readme" /></Link>
                    <Link to={'/update'}><i className="fa-solid fa-retweet" /></Link>
                    <Link to={'/delete'}><i className="fa-solid fa-trash-can" /></Link>
                </nav>
            </div>
        </>
    )
}

export default Landing