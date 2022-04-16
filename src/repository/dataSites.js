import getRandomInt from "../utils/randon.js"

const dataSites = async (term) => {
  const mgt = {
    "id": 1,
    "url": `http://megatorrentshd.net/?s=${term}`,
    "section": '#categoria .ItemN',
    "title": "h2 a",
    "link": "a"
  }

  const bfn = {
    "id": 2,
    "url": `https://www.baixafilme.net/?s=${term}`,
    "section": '.filmes .item',
    "title": ".titulo h2",
    "link": "a"
  }
  let arr = [mgt, bfn]

  return arr[getRandomInt(0,arr.length)]
}

export default dataSites