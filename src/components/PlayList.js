import React, { Component } from 'react'
import PlayListItem from './PlayListItem'

// The state for your PlayList should just have one key value pair, songs, in order to properly function with the fetch function from the tinylasagna.js file that you will copy into the PlayListComponent (follow the directions in that file).

export default class PlayList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      songs: [] // TODO: change to array or object probably
    }

    this.fetchData = this.fetchData.bind(this)
  }

  componentDidMount () {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json()
    }).then(data => {
      this.setState({songs: data})
      console.log('state', this.state.songs)
    })
  }

  fetchData (e) {
    e.preventDefault()
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json()
    }).then(data => {
      this.setState({songs: data})
    })
  }

  render () {
    return (
      <div>
        <h1>I am the PlayList</h1>
        <PlayListItem />
      </div>
    )
  }
}