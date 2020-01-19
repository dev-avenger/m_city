import React, { Component } from 'react'
;import Featured from './featured/index';
import MatchesHome from './matches';
import MeetPlayers from './meetPlayers';
import Promotion from './promotion/index';

class Home extends Component {

  render() {
  return (
    <div className="bck_blue">
        <Featured/>
        <MatchesHome/>
        <MeetPlayers/>
        <Promotion/>
    </div>
  )
  }
}

export default Home;
