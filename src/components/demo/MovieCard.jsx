import axios from "axios";
import PropTypes from "prop-types";
import React from "react";
import { baseURL } from "../../api";

MovieCard.propTypes = {
    movieData: PropTypes.object.isRequired,
};

export default function MovieCard(props) {
    const [newComment, setNewComment] = React.useState("");
    const hasMovieData = Object.keys(props.movieData).length !== 0;

    const handleCommentInput = (event) => {
        setNewComment(event.target.value)
    }

    const handleSubmitComment = () => {
        console.log(newComment)
    }

    const postComment = async () => {
        try {
            const queryString = `${baseURL}/movies/${props.movieData.id}/comments`
            const httpResponse = await axios.post(queryString, {comment_text: newComment})
            setNewComment("")
        } catch (error) {
            console.error("An error occured", error);
        }
    }

    return hasMovieData ?  (
        <div>
            <h2>{props.movieData.name}</h2>
            <h3>Date: {props.movieData.date}</h3>
            {props.movieData.vote_average && (
                <h3>Rating: {props.movieData.vote_average}/10</h3>
            )}
            <h3>Duration: {props.movieData.runtime} minutes</h3>
            {props.movieData.abstract && (
                <h3>Abstract: {props.movieData.abstract}</h3>
            )}

            <div className="new-comment">
                <p>Add a comment</p>
                <textarea 
                    value={newComment}
                    onChange={handleCommentInput}
                
                />
                <button onClick={handleSubmitComment}>Submit</button>
            </div>
        </div>
    ) : (<p>Search a movie</p>);
}
