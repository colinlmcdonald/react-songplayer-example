import React, { Component } from 'react'
import { render } from 'react-dom'
import { songData } from './songData'
import { SongList as Library } from './SongList'
import { SongList as SongQueue } from './SongList'

class Backbone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: this.props.songs,
      queue: [],
      song: {},
      id: 0
    }
    this.addSong = this.addSong.bind(this)
    this.ended = this.ended.bind(this)
  }
  addSong(x) {
    const { queue, song, id } = this.state
    x = Object.assign({}, x, { id })
    this.setState({
      queue: queue.concat(x),
      song: !song.url ? x : song,
      id: id + 1
    })
  }

  ended() {
    const { queue } = this.state
    this.setState({
      song: queue[1],
      queue: queue.slice(1)
    })
  }

  componentDidMount() {
    const audio = document.getElementsByTagName('audio')
    audio[0].onended = () => this.ended()
  }

  render() {
    const { songs, queue, song, id } = this.state
    console.log(song);
    return (
      <div>
        <h3> Library </h3>
        <Library songs={songs} addSong={this.addSong} />
        <h3> Song Queue </h3>
        <SongQueue songs={queue} />
        <h3> Player </h3>
        <audio controls autoPlay src={song.url ? song.url : ''} />
      </div>
    )
  }
}

render(<Backbone songs={songData}/>, document.getElementById('app'))