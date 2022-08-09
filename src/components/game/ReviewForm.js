import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createReview } from "../../managers/ReviewManager"

export const ReviewForm = () => {
    const navigate = useNavigate()
    const { gameId } = useParams()
    const [currentReview, setCurrentReview] = useState({
        game: gameId,
        review: ""
    }
    )

    const handleReviewChange = (domEvent) => {
        const copy = {...currentReview}
        copy[domEvent.target.name] = domEvent.target.value
        setCurrentReview(copy)
    }

    return (
        <>
        <form>
            <label htmlFor="review">Review: </label>
            <textarea name="review" value={currentReview.review} onChange={handleReviewChange}/>
            <button onClick={()=> {
                const review = {
                    game: currentReview.game,
                    review: currentReview.review
                }

                createReview(review).then(navigate(`/games/${gameId}`))
            }}>Save</button>
        </form>
        </>
    )
}