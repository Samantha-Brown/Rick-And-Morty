export const getCharacterInfo = (apiData) => {
  console.log('<<<<<looOKK', apiData.results)
  return apiData.results.map(data => {
    const getNeededData = {}
    //characterInfo.id = data.id;
    getNeededData.image = data.image;
    getNeededData.name = data.name;
    return getNeededData;
  })

}
