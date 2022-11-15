class RickAndMorty {
  getCharacter(id) {
    if(!id || typeof id !== 'number') {
      throw new Error('Cannot be empty or not a number');
    }
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      if(res.status === 404) {
        return null;
      }
      return res.json()})
    .then(data => {
      return data;
    })
    .catch(err => console.error(err))
  }
  async getEpisode(id){
    try {
      if(!id || typeof id !== 'number') {
        throw new Error('Cannot be empty or not a number');
      }
      const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      if(response.status === 404) {
        return null;
      }
      const data = await response.json();
      return data;
    }
    catch(err) {  
      console.error(err);
    }
  }
}
