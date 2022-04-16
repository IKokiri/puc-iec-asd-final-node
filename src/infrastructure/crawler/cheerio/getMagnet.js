import cheerio from "cheerio";
import got from "got";

const getPageMagnet = async (dataToGetMagnet, dataSite) => {

    const { link } = dataToGetMagnet
    const { magnet_tag: magnetTag } = dataSite

    const response = await got(link);

    const $ = cheerio.load(response.body);

    let arrMagnet = []

    $(magnetTag).each(function (index, element) {
        let isHref = magnetTag.includes('href')
        if(isHref){
            arrMagnet.push($(element).attr('href'))
        }else{
            arrMagnet.push($(element).val())
        }
    })

    return arrMagnet

}

export default getPageMagnet