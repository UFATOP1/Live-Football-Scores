import React from 'react'
import { Link } from 'react-router-dom'
import teamImage from '../images/gril.jpeg'
import ballImage from '../images/football.png'

const Home = () => {

  return (
    <>
      <div className="container center mb-5 mt-3">
        <h1 className="display-1">UFAX FOOTBALL fixtures</h1>
        <p className="lead">fixtures today and upcoming matches</p>
        <Link to="/matches/" className="btn btn-success">ตารางการแข่งขัน</Link>
      </div>
      <ul className="list-unstyled container">
        <li className="media">
          <div className="img-container"><img src={teamImage} className="mr-3 team-image" alt="football kit" /></div>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Sexy Life Football</h5>
            <p>See upcoming Sexy Gril, filter for you all this season&apos;s Premier League results.</p>
          </div>
        </li>
        <li className="media">
          <div className="img-container"><img src={ballImage} className="mr-3 team-image" alt="football" /></div>
          <div className="media-body">
            <h5 className="mt-0 mb-1">Follow Your Favourite Team</h5>
            <p>เลือกทีมพรีเมียร์ลีกที่คุณชื่นชอบและดูผลการแข่งขันและโปรแกรมการแข่งขันทั้งหมดในตารางเดียว.</p>
          </div>
        </li>
      </ul>
    </>
  )

}

export default Home
