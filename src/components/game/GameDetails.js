import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleGame } from "../../managers/GameManager";
import { getReviews } from "../../managers/ReviewManager";

export const GameDetails = () => {
  const navigate = useNavigate();
  const [currentGame, setCurrentGame] = useState({});
  const [reviews, setReviews] = useState([])
  const { gameId } = useParams();

  useEffect(() => {
    getSingleGame(gameId).then(setCurrentGame);
    getReviews(gameId).then(setReviews)
  }, [gameId]);

  return (
    <>
      <h1>{currentGame.title}</h1>
      <p>Developer: {currentGame.designer}</p>
      <p>Released: {currentGame.year_released}</p>
      <p>Players: {currentGame.number_of_players}</p>
      <p>Hours to complete: {currentGame.estimated_time_to_play}</p>
      <p>Age: {currentGame.age_recommendation}+</p>
      <p>Categories:</p>
      <p>Reviews: </p>
        <ul>
            {reviews.map(rev => <li key={`review--${rev.id}`}>{rev.review}</li>)}
        </ul>
      <button
        onClick={() => {
          navigate(`/games/${gameId}/review`);
        }}
      >
        Review Game
      </button>
    </>
  );
};
