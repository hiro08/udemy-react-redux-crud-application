import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <>
        <h1>New</h1>
      </>
    )
  }
}

// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)
