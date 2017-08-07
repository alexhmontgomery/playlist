import React, { Component } from 'react'

export default class NavBar extends Component {
  render () {
    return (
      <nav className='navbar navbar-inverse bg-inverse'>
        <a className='navbar-brand' href='none'><img src='/images/dj-icon-color.png' width='30' height='30' className='d-inline-block align-top' alt='' />Playlists for True Playas</a>
      </nav>

    )
  }
}
