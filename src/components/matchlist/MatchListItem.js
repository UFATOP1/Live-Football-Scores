import React, { useState, useEffect } from 'react'
import crest from '../../images/crest.png'

const MatchListItem = ({ matches, teams }) => {

  const [ teamDetails, setTeamDetails ] = useState(null)

  const [ statusFilter, setStatusFilter ] = useState('SCHEDULED')
  const [ selectedTeam, setSelectedTeam ] = useState('ALL')

  const filterMatch = (match) => {
    let isFiltered = false
    if (statusFilter === 'ALL' || statusFilter === match.status) {
      teams.forEach((team) => {
        if (selectedTeam === 'ALL' || selectedTeam === match.homeTeam.id.toString() || selectedTeam === match.awayTeam.id.toString()) {
          isFiltered = true
        }
      })
    }
    return isFiltered
  }

  useEffect(() => {
    const obj = {}
    teams.forEach((team) => {
      const key = team.id
      obj[team.id] = {
        crestUrl: team.crestUrl,
        shortName: team.shortName,
      }
    })
    setTeamDetails(obj)
  }, [teams])

  const handleStatusUpdate = (event) => {
    setStatusFilter(event.target.value)
    console.log(statusFilter)
  }

  const handleSelectTeam = (event) => {
    setSelectedTeam(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <select className="form-control" onChange={handleStatusUpdate}>
          <option value='SCHEDULED'>Upcoming Matches</option>
          <option value="ALL">All Matches</option>
          <option value="FINISHED">Final Results</option>
        </select>
        <select className="form-control" onChange={handleSelectTeam}>
          <option value="ALL" defaultValue>All Teams</option>
          { teams.length > 0 && teams.map((team) => {
            return <option key={team.id} value={team.id}>{team.shortName}</option>
          })}
        </select>
      </div>
      { (matches.length > 0 && teamDetails) && matches.map((match) => {
        if (teamDetails[match.homeTeam.id] && filterMatch(match)) {
          const homeTeamCrest = teamDetails[match.homeTeam.id].crestUrl
          const shortHomeTeamName = teamDetails[match.homeTeam.id].shortName
          const awayTeamCrest = teamDetails[match.awayTeam.id].crestUrl
          const shortAwayTeamName = teamDetails[match.awayTeam.id].shortName
          return (
            <div key={match.id} className="match d-flex justify-content-between w-100 align-items-center">
              <div className="home-team team">
                { teams.length > 0 ?
                  <img src={homeTeamCrest} className="team-crest" />
                  :
                  <img src={crest} alt="Team crest" className="team-crest" />
                }
                <p className="team-name">{shortHomeTeamName}</p>
              </div>
              <div className="score d-flex flex-column justify-content-center align-items-center">
                { (new Date(match.utcDate).getTime()) > (Date.now()) ?
                  <>
                    <p className="mb-0 match-date">{new Date(match.utcDate).toLocaleDateString()}</p>
                    <p className="mb-0 match-date"><strong>{new Date(match.utcDate).toLocaleTimeString([], { timeStyle: 'short' })}</strong></p>
                  </>
                  :
                  <>
                    <p className="mb-0">{new Date(match.utcDate).toLocaleDateString()}</p>
                    <p className="mb-0">FINAL</p>
                    <p className="mb-0"><span>{match.score.fullTime.homeTeam}</span>-<span>{match.score.fullTime.awayTeam}</span></p>
                  </>
                }
              </div>
              <div className="away-team team">
                <p className="team-name">{shortAwayTeamName}</p>
                { teams.length > 0 ?
                  <img src={awayTeamCrest} className="team-crest" />
                  :
                  <img src={crest} alt="Team crest" className="team-crest" />
                }
              </div>
            </div>
          )
        }
      })}
    </>
  )
}
export default MatchListItem