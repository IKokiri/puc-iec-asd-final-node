import { getMostRated } from "../repository/moviesRepository.js"

const getVerified = async (term) => {
  
  const verifieds = await getMostRated()
  return verifieds
   
}

export default getVerified