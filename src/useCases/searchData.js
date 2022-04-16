import getPage from "../infrastructure/crawler/cheerio/getPage.js"
import dataSites from "../repository/dataSites.js"

const searchData = async (term) => {
  
  const dataToScrape = await dataSites(term)

  return getPage(dataToScrape)

}

export default searchData