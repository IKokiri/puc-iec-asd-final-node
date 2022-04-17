import getPageMagnet from "../infrastructure/crawler/cheerio/getMagnet.js"
import { addRate, isMovieTitleExists, saveMovie } from "../repository/moviesRepository.js"
import { getOneDataSite } from "../repository/siteRepository.js"

const getMagnet = async (dataToGetMagnet) => {
  const { site_id, title } = dataToGetMagnet
  try {

    const movieExists = await isMovieTitleExists(title)

    if (!movieExists) {
      await saveMovie(dataToGetMagnet)
    } else {
      await addRate(title)
    }

    const dataSite = await getOneDataSite(site_id)
    const siteInfo = await getPageMagnet(dataToGetMagnet, dataSite)

    return siteInfo
  } catch (error) {
    return false
  }
}

export default getMagnet