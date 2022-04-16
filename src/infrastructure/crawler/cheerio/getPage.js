import cheerio from "cheerio";
import got from "got";

const getPage = async (dataToScrape) => {


    const { url, section, title: titleData, link: linkData } = dataToScrape

    const response = await got(url);

    const $ = cheerio.load(response.body);

    let searchPossibilities = []


    $(section).each(function (index, element) {
        const title = $(element).find(titleData).text()
        const link = $(element).find(linkData).attr('href')
        
        const movie = { title, link, source: dataToScrape.id }

        searchPossibilities.push(movie)
    })
    return searchPossibilities

}

export default getPage