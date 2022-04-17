import getPage from "../infrastructure/crawler/cheerio/getPage.js"
import { getOneRandomDataSite } from "../repository/siteRepository.js"

const searchData = async (term) => {
  
  try {
    const dataToScrape = await getOneRandomDataSite()
    dataToScrape.url += term
    const dataFound = await getPage(dataToScrape)

    return (dataFound)? dataFound : false 
  } catch (error) {
    return false 
  }
   

}

export default searchData