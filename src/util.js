export const characterInfo = (apiData) => {
  const getNeededData = {}
  apiData.forEach(data => {
    characterInfo.id = data.id;
    characterInfo.url = data.url;
    //characterInfo.name = data.name; Don't need??
  })

  return characterInfo;
}
