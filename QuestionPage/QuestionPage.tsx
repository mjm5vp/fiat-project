import React, { Component, ReactNode } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class QuestionPage extends Component {
  state = {
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  }

  renderButtons(): ReactNode {
    return this.state.options.map((i) => {
      return <Button title={i} type="outline"></Button>
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Pick the best Answer</Text>
        {this.renderButtons()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
