import React from 'react'
import { Link } from 'react-router-dom'
import teamImage from '../images/kit.png'
import ballImage from '../images/football.png'

const Home = () => {

  return (
    <>
      <div className="container center mb-5 mt-3">
        <h1 className="display-1">Live Football Scores</h1>
        <p className="lead">Live scores and upcoming matches</p>
        <Link to="/matches/" className="btn btn-success">See All Matches</Link>
      </div>
      <ul className="list-unstyled container">
        <li className="media">
          <img src={teamImage} className="mr-3 team-image" alt="football kit" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Real Life Football Results</h5>
            See upcoming games, filter by team, and see all this season&apos;s Premier League results.
          </div>
        </li>
        <li className="media">
          <img src={ballImage} className="mr-3 team-image" alt="football" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">Follow Your Favourite Team</h5>
            Pick your favourite Premier League team and see all their results and fixtures in one table.
          </div>
        </li>
      </ul>
    </>
  )

}

export default Home