import React from 'react'
import { storiesOf } from '@storybook/react'
import Bootstrap from './index'

storiesOf('Bootstrap', module)
  .add('default', () => <Bootstrap />)
  .add('with some props', () => (
    <Bootstrap title='Title from props' message='message from props' />
  ))
