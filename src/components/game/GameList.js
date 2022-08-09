import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getGames } from "../../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])

    useEffect(
        () => {
            getGames().then(setGames)
        }, []
    )
    
    return(
        <>
        {games.map(game => <Link to={`/games/${game.id}`} key={`game--${game.id}`}>{game.title}</Link>)}
        </>
    )
}