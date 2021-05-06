
function ActorCard({name, movies}) {

    let movieLis = movies.map(movie =>{
        return <li>{movie}</li>
    })
    
        return(
            <div>
                <h2>{name}</h2>
                <h4>{name} has starred in:</h4>
                <ul>
                {movieLis}    
                </ul>
            </div>
        )
    }
    
    export default ActorCard