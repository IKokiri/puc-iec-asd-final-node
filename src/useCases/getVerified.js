import { getMostAndVerified } from "../repository/moviesRepository.js"

const getVerified = async (term) => {
  
  const verifieds = await getMostAndVerified()
  return verifieds
   
}

export default getVerified