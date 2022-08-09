import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleGame } from "../../managers/GameManager"

export const GameDetails = () => {
    const [currentGame, setCurrentGame] = useState({})
    const { gameId } = useParams()

    useEffect(
        () => {
            getSingleGame(gameId).then(setCurrentGame)
        }, []
    )
    
    return (
        <>
        <h1>{currentGame.title}</h1>
        <p>Developer: {currentGame.designer}</p>
        <p>Released: {currentGame.year_released}</p>
        <p>Players: {currentGame.number_of_players}</p>
        <p>Hours to complete: {currentGame.estimated_time_to_play}</p>
        <p>Age: {currentGame.age_recommendation}+</p>
        <p>Categories:</p>


        </>
    )
}