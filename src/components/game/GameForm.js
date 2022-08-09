import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getCategories } from "../../managers/CategoryManager"
import { createGame } from "../../managers/GameManager"

export const GameForm = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [currentGame, setCurrentGame] = useState({
        title: "",
        designer: "",
        year_released: 0,
        number_of_players: 0,
        estimated_time_to_play: 0,
        age_recommendation: 0,
        categories: 0
    })
    
    useEffect(
        () => {
            getCategories().then(setCategories)
        }, []
    )

    const changeGameState = (domEvent) => {
        const copy = {...currentGame}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentGame(copy)
    }

    return (
        <>
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form=control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                    <label htmlFor="designer">Developer: </label>
                    <input type="text" name="designer" required autoFocus className="form=control"
                        value={currentGame.designer}
                        onChange={changeGameState}/>
                    <label htmlFor="year_released">Release Year: </label>
                    <input type="number" name="year_released" required autoFocus className="form=control"
                        value={currentGame.year_released}
                        onChange={changeGameState}/>
                    <label htmlFor="number_of_players">Players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form=control"
                        value={currentGame.number_of_players}
                        onChange={changeGameState}/>
                    <label htmlFor="estimated_time_to_play">Time to Complete: </label>
                    <input type="number" name="estimated_time_to_play" required autoFocus className="form=control"
                        value={currentGame.estimated_time_to_play}
                        onChange={changeGameState}/>
                    <label htmlFor="age_recommendation">Minimum Age: </label>
                    <input type="number" name="age_recommendation" required autoFocus className="form=control"
                        value={currentGame.age_recommendation}
                        onChange={changeGameState}/>
                    <label htmlFor="categories">Categories: </label>
                    <select name="categories" required autoFocus className="form-control"
                        value={currentGame.categories}
                        onChange={changeGameState}
                    >
                        <option value="0" selected disabled hidden>Select a Category</option>
                        {categories.map(cat => <option key={`category--${cat.id}`} value={cat.id}>{cat.label}</option>)}
                    </select>
                </div>
            </fieldset>
        <button onClick={(evt) => {
            evt. preventDefault()
            
            const game = {
                title: currentGame.title,
                designer: currentGame.designer,
                year_released: parseInt(currentGame.year_released),
                number_of_players: parseInt(currentGame.number_of_players),
                estimated_time_to_play: parseInt(currentGame.estimated_time_to_play),
                age_recommendation: parseInt(currentGame.age_recommendation),
                categories: parseInt(currentGame.categories)
            }
            createGame(game).then(()=> navigate("/games"))
        }}>Save</button>
        </form>
        </>
    )
}