type songOf = {
  song: string
}

export const selectSong = (song: string) => {
  return {
    type: 'SONG_SELECTED',
    payload: song, 
  };
};