import React, { Component } from 'react';
import  Animate  from 'react-move/Animate';
import {easePolyOut} from 'd3-ease';
import PlayerCard from '../../ui/playerCard';
import Otamendi from '../../../Resources/images/players/Otamendi.png';


class HomeCards extends Component {

  state ={
    cards:[
      {
        bottom:90,
        left:300
      },
      {
        bottom:60,
        left:200
      },
      {
        bottom:30,
        left:100
      },
      {
        bottom:0,
        left:0
      }
      
    ]
  }

  showAnimateCards = () => (
    this.state.cards.map((card, i) => (
      
      <Animate
        key={i}
        show={this.props.show}

        start={{
          bottom: 0,
          left: 0
        }}
        enter={{
          bottom: [card.bottom],
          left: [card.left],
          timing: { duration: 500, ease: easePolyOut }

        }}
      >
        {({ left, bottom }) => (
          <div
            style={{
              position: 'absolute',
              left,
              bottom
            }}
          >
            {console.log(left,bottom)}

            <PlayerCard
              number="30"
              name="Nicolas"
              lastname="Otamendi"
              bck={Otamendi}

            />

          </div>
        )
        }
    </Animate>

      )
    )
  )
  





  render() {
    return (
      <div>
        {this.showAnimateCards()}
      </div>
    )
  }
}

export default HomeCards;