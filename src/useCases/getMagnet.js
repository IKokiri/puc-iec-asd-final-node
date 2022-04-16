import getPageMagnet from "../infrastructure/crawler/cheerio/getMagnet.js"
import { saveMovie } from "../repository/moviesRepository.js"
import { getOneDataSite } from "../repository/siteRepository.js"

const getMagnet = async (dataToGetMagnet) => {
  const { site_id } = dataToGetMagnet
  await saveMovie(dataToGetMagnet)
  const dataSite = await getOneDataSite(site_id)
  console.log(dataSite)
  const siteInfo = await getPageMagnet(dataToGetMagnet, dataSite)
  return siteInfo
}

export default getMagnet