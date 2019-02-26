import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../styles.css'

class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const { text } = this.props

    return <div className={styles.test}>Example Component v4: {text}</div>
  }
}

export default ExampleComponent
