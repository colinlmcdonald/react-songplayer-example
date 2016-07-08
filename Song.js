import React from 'react'

export const Song = ({song, addSong}) => (
  <div onClick={() => addSong(song)}>
    {song.artist} - {song.title}
  </div>
)
