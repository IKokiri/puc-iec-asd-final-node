import cheerio from "cheerio";
import got from "got";
import { v4 } from "uuid";

const getPage = async (dataToScrape) => {

    const { url, section, title: titleData, link: linkData } = dataToScrape
    let response = ''
    try{
        response = await got(url);
    }catch(e){
        console.log('erro ao obter pagina')
        return false
    }

    const $ = cheerio.load(response.body);

    let searchPossibilities = []


    $(section).each(function (index, element) {
        const title = $(element).find(titleData).text()
        const link = $(element).find(linkData).attr('href')
        const id = v4()
        const movie = { title, link, site_id: dataToScrape.id, id}

        searchPossibilities.push(movie)
    })
    return searchPossibilities

}

export default getPage