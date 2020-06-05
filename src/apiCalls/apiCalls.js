export const getNPbyState = async (stateCode) => {
    const endpoint = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=k1ezJuHrYOoTmktmmI4fNKrZuu7z5TJnmihUHgmh`
    const response = await fetch(endpoint)
    if (!response.ok) {
        throw new Error('There was an error loading National Parks data')
    }
    const data = await response.json()
    return data
}