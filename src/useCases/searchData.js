import getPage from "../infrastructure/crawler/cheerio/getPage.js"
import { getOneRandomDataSite } from "../repository/siteRepository.js"

const searchData = async (term) => {
  
  const dataToScrape = await getOneRandomDataSite()
  dataToScrape.url += term
  return getPage(dataToScrape)

}

export default searchData