import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MatchListItem from './MatchListItem'
import Spinner from '../common/Spinner'

const MatchList = () => {

  const [ matches, setMatches ] = useState([])
  const [ teams, setTeams ] = useState([])

  useEffect(() => {
    const getAllMatches = async () => {
      try {
        const { data } = await axios.get('https://api.football-data.org/v2/competitions/PL/matches', {
          headers: {
            'X-Auth-Token': 'cbca71a154e1422080a1731a6afc597e',
            'content-type': 'application/json',
          },
        })
        setMatches(data.matches)
      } catch {
        console.log('Unable to fetch matches')
      }
    }
    getAllMatches()
    const getTeams = async () => {
      try {
        const { data } = await axios.get('https://api.football-data.org/v2/competitions/PL/teams', {
          headers: {
            'X-Auth-Token': 'cbca71a154e1422080a1731a6afc597e',
            'content-type': 'application/json',
          },
        })
        setTeams(data.teams)
      } catch {
        console.log('Unable to fetch crests')
      }
    }
    getTeams()
  }, [])

  return (
    <div className="match-list min-vh-100 d-flex justify-content-start flex-column container">
      { matches.length > 0 ? <MatchListItem matches={matches} teams={teams} /> : <Spinner /> }
    </div>
  )
}

export default MatchList