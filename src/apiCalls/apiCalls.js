export const getNPbyState = async (stateCode) => {
    try {
        const endpoint = `https://.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=k1ezJuHrYOoTmktmmI4fNKrZuu7z5TJnmihUHgmh`
        const response = await fetch(endpoint)
        const data = await response.json()
        return data
    } catch {
        return 'error'
    }   
}
