import { getMostRated, setVerified } from "../repository/moviesRepository.js"
import got from "got";
import sleep from "../utils/sleep.js";

const verifyMost = async (term) => {
  
  const mostMovies = await getMostRated()
  
  for(let movie of mostMovies){
    const {id, link} = movie
    try {
      await got(link);
      await setVerified(id)
      console.log(link, 'VERIFICADO')
    } catch (error) {
      console.log(link, 'VERIFICADO ERRO')
    }
    sleep(1000)
  }
   

}

export default verifyMost