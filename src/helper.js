export const cleanNPData = (npData) => {
    return npData.map(np => {
        return {
            name: np.name,
            designation: np.designation,
            id: np.id,
            states: np.states,
            longitude: np.longitude,
            latitude: np.latitude,
            url: np.url,
            description: np.description,
            images: np.images,
            states: np.states,
            weatherInfo: np.weatherInfo,
            bucket: false,
            visited: false,
            notes: []
        }
    })
}