import typeorm from "typeorm"
const { getManager } = typeorm

const saveMovie = async (dataMovie) => {
    const {title, link, site_id} = dataMovie
    console.log(dataMovie)
    console.log(site_id)
    try {
        const query = `INSERT INTO movies (title, link, site_id) values (?,?,?)`
        const sitesData = getManager().query(query, [title, link, site_id])
    } catch (error) {
        console.log(error)
        return false
    }
    return null;

}
export { saveMovie }