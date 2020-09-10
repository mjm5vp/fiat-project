import React, { Component, ReactNode } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'

export default class QuestionPage extends Component {
  renderButtons(): ReactNode {
    return [0, 1, 2, 3].map((i) => {
      return <Button title="Option 1" type="outline"></Button>
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
