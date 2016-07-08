import React from 'react'
import { Song } from './Song'

export const SongList = ({songs, addSong}) => (
  <div>
    {songs.map((song, i) => {
      return <Song song={song} key={i} addSong={addSong}/>
    })}
  </div>
)