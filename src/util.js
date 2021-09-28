export const getCharacterInfo = (apiData) => {
  return apiData.results.map(data => {
    const getNeededData = {}
    getNeededData.image = data.image;
    getNeededData.name = data.name;
    return getNeededData;
  })

}
