import React, { Component } from 'react'

export default class PlayListForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    }

    this.addToList = this.addToList.bind(this)
  }

  addToList (e) {
    e.preventDefault()
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value})
    let listItem = JSON.stringify(this.state)

    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting', {
      method: 'POST',
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, 'yay')
    }).catch(err => {
      console.log(err, 'boo!')
    })
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle: ''})
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='userName'>Username:</label>
          <input type='text' className='form-control' name='userName' placeholder='Enter username' onChange={this.addToList} value={this.state.userName} />
        </div>
        <div className='form-group'>
          <label htmlFor='songArtist'>Song Artist:</label>
          <input type='text' className='form-control' name='songArtist' placeholder='Enter Artist or Band Name' onChange={this.addToList} value={this.state.songArtist} />
        </div>
        <div className='form-group'>
          <label htmlFor='songTitle'>Song Title</label>
          <input type='text' className='form-control' name='songTitle' placeholder='Enter Song Title' onChange={this.addToList} value={this.state.songTitle} />
        </div>
        <div className='form-group'>
          <label htmlFor='songNotes'>Notes About Song:</label>
          <textarea className='form-control' rows='3' placeholder='Type notes about the song' onChange={this.addToList} value={this.state.songNotes} />
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    )
  }
}
