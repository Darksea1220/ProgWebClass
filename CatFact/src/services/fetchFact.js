// este primero no me funcionó bien

// import.meta.env.VITE_GIPHY_KEY
// const BASE_URL = 'https://catfact.ninja/fact'
// export const fetchFact = async () => {
//   return fetch(`${BASE_URL}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Error fetching data from API')
//       }
//       return res.json()
//     })
//     .then(({ data }) => {
//       return data
//     })
//     .catch((e) => {
//       throw new Error(e)
//     })
// }

const BASE_URL = 'https://catfact.ninja/fact'

export const fetchFact = async () => {
  try {
    const response = await fetch(BASE_URL)

    if (!response.ok) {
      throw new Error('Error fetching data from API')
    }

    const data = await response.json()

    return data.fact
  } catch (error) {
    throw new Error(error)
  }
}
