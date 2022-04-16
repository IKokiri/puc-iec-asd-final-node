import typeorm from "typeorm"
const { getManager } = typeorm

const getAllDataSite = async () => {

  try {

    const query = `SELECT * FROM site_data`
    const sitesData = getManager().query(query)
    console.log(sitesData)
  } catch (error) {
    console.log(error)
    return false
  }
  return null;

}

const getOneRandomDataSite = async () => {

  try {
    const query = `SELECT * FROM site_data ORDER BY random() LIMIT 1`
    const arrSitesData = await getManager().query(query)
    const siteData = arrSitesData[0]
    return siteData
  } catch (error) {
    console.log(error)
    return false
  }

}

const getOneDataSite = async (id) => {
  try {
    const query = `SELECT * FROM site_data where id = ?`
    const arrSitesData = await getManager().query(query, [id])
    const siteData = arrSitesData[0]
    return siteData
  } catch (error) {
    console.log(error)
    return false
  }

}

export { getAllDataSite, getOneRandomDataSite, getOneDataSite }

// const mgt = {
//   "id": 1,
//   "url": `http://megatorrentshd.net/?s=${term}`,
//   "section": '#categoria .ItemN',
//   "title": "h2 a",
//   "link": "a"
// }