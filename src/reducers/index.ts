export const songsReducer = () => {
  return [
    { title: 'As it was', duration: '2:47' },
    { title: 'House of cards', duration: '5:48' },
    { title: 'All i need', duration: '3:48' },
    { title: 'ACORDA PEDRINHO', duration: '2:53' },
  ];
};

export const selectedSongReducer = (selectedSong = null, action: any) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
} 