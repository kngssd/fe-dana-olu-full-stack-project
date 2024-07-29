export default function MovieCard(props) {
    return (
        <div>
            <h2>{props.movieData.name}</h2>
            <h3>{props.movieData.date}</h3>
            {props.movieData.vote_average && (
                <h3>{props.movieData.vote_average}/10</h3>
            )}
            <h3>{props.movieData.runtime}</h3>
        </div>
    );
}
