
function DirectorCard({name, movies}) {

    let movieLis = movies.map(movie =>{
        return <li>{movie}</li>
    })
    
        return(
            <div>
                <h2>{name}</h2>
                <h4>{name} created:</h4>
                <ul>
                {movieLis}    
                </ul>
            </div>
        )
    }
    
    export default DirectorCard