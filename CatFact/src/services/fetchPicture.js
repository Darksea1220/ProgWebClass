const BASE_URL = 'https://cataas.com/cat'

export const fetchPicture = async ({ fact }) => {
  try {
    const response = await fetch(`${BASE_URL}/says/${fact}`)

    if (!response.ok) {
      throw new Error('Error fetching data from API')
    }

    return response.url
  } catch (error) {
    throw new Error(error)
  }
}
