export const fetchData = async () => {

  let response = await fetch('https://rickandmortyapi.com/api/character')

  if (!response.ok) {
    throw new Error('Your cat doesn\'t belong on this show')
  }
  let character = await response.json();
  console.log(character)

  return character
}
