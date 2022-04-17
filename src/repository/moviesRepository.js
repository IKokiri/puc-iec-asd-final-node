import typeorm from "typeorm"
const { getManager } = typeorm

const saveMovie = async (dataMovie) => {
    const {title, link, site_id} = dataMovie
    try {
        const query = `INSERT INTO movies (title, link, site_id) values (?,?,?)`
        const sitesData = getManager().query(query, [title, link, site_id])
    } catch (error) {
        console.log(error)
        return false
    }
    return null;

}

const isMovieTitleExists = async (movieTitle) => {

    try {
        const query = `Select * from movies where title = ?`
        const movie = await getManager().query(query, [movieTitle])
        return (movie.length)? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

const addRate = async (title) => {
    try {
        const query = `update movies set rate = rate + 1 where title = ?`
        const movie = await getManager().query(query, [title])
        return (movie.length)? true : false
    } catch (error) {
        console.log(error)
        return false
    }
}

const getMostAndVerified = async (title) => {
    try {
        const query = `select * from movies order by rate desc limit 10`
        const movies = await getManager().query(query, [title])
        return movies
    } catch (error) {
        console.log(error)
        return false
    }
}

export { saveMovie, isMovieTitleExists, addRate, getMostAndVerified }