import React from 'react'
import { games } from '../data/games'
import GameItem from './GameItem'

const GameList = () => {
  return (
      <div>{games.map((game) =>
            <GameItem game={game} key={game.id}/>
        )}</div>
  )
}

export default GameList