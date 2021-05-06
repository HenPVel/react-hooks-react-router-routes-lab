
function MovieCard({title, time, genres}) {

let genreLis = genres.map(genre =>{
    return <li>{genre}</li>
})

    return(
        <div>
            <h2>{title}</h2>
            <h4>Duration: {time} Minutes</h4>
            <ul>
            {genreLis}    
            </ul>
        </div>
    )
}

export default MovieCard