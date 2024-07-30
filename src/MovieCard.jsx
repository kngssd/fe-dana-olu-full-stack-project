import PropTypes from "prop-types";

MovieCard.propTypes = {
    movieData: PropTypes.object.isRequired,
};

export default function MovieCard(props) {
    return (
        <div>
            <h2>{props.movieData.name}</h2>
            <h3>{props.movieData.date}</h3>
            {props.movieData.vote_average && (
                <h3>Rating: {props.movieData.vote_average}/10</h3>
            )}
            <h3>{props.movieData.runtime}</h3>
            {props.movieData.abstract && (
                <h3>Abstract: {props.movieData.abstract}</h3>
            )}
        </div>
    );
}
