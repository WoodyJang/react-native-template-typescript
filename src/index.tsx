/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Button, Provider, Toast} from '@ant-design/react-native'

class App extends Component<{}, {}> {
  render() {
    console.log(111)
    return (
      <Provider>
        <Button onPress={() => Toast.info('This is a toast tips')}> Start </Button>
      </Provider>
    )
  }
}

export default App
