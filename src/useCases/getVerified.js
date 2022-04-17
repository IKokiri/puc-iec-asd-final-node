import { getMostRated } from "../repository/moviesRepository.js"

const getVerified = async (term) => {

  try {
    const verifieds = await getMostRated()
    return verifieds
  } catch (error) {
    return false
  }

}

export default getVerified