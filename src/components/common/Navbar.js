import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import football from '../../images/football-green.png'

const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-md navbar-dark container justify-content-between">
      <Link className="navbar-brand" to="/">
        <img src={football} width="30" height="30" alt="" />
        <h3>LiveScores</h3>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/matches/" className="btn btn-success">Matches</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar