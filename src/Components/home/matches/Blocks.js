import React, { Component } from 'react'
import {firebaseMatches} from '../../../firebase';
import {firebaseLooper, reverseArray} from '../../ui/misc';
import MatchesBlock from '../../ui/matches_block';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {

    state = {
      matches:[]
    }

    async componentDidMount(){
      const result = await firebaseMatches.limitToLast(6).once("value");
      const matches = firebaseLooper(result);
      console.log(matches);

      //In lecture following technique used
      // firebaseMatches.limitToLast(6).once("value").then((snapshot)=>{
        //console.log(snapshot.val());
      //});

      this.setState({
        matches: reverseArray(matches)
      });

      console.log(matches);
    }

    showMatches = (matches) => (
      matches ?
      matches.map( match => (
        <Slide bottom key={match.id}>
          <div className="item">
            <div className="wrapper">
              <MatchesBlock match={match}/> 
            </div>
          </div>
        </Slide>
      )

      )
      :null
    )

  render() {
    return (
      <div className="home_matches">
        {this.showMatches(this.state.matches)}
        
      </div>
    )
  }
}

export default Blocks;
