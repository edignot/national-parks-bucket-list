export const cleanNPData = (npData) => {
    return npData.map(np => {
        return {
            name: np.name,
            designation: np.designation,
            id: np.id,
            states: np.states,
            longitude: np.longiture,
            latitude: np.latitude,
            url: np.url,
            description: np.description,
            images: [np.images[0]],
            states: np.states,
            bucket: false,
            visited: false
        }
    })
}