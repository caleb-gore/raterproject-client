import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getGames } from "../../managers/GameManager"

export const GameList = () => {
    const [games, setGames] = useState([])
    const navigate = useNavigate()
    useEffect(
        () => {
            getGames().then(setGames)
        }, []
    )
    
    return(
        <>
        <div>
        <button onClick={()=> navigate('/games/new')}>Register New Game</button>
        </div>
        {games.map(game => <div>
            <Link to={`/games/${game.id}`} key={`game--${game.id}`}>{game.title}</Link>
            </div>
            )}
        </>
    )
}