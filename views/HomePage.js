import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import styles from './styles'

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.timer}>PM:DR</Text>

      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Timer')
        }}
        title={`Start`}
        titleStyle={styles.buttonTitle}
      ></Button>
      <Button
        buttonStyle={styles.button}
        onPress={() => {
          navigation.navigate('Settings')
        }}
        title="Settings"
        titleStyle={styles.buttonTitle}
      ></Button>
    </View>
  )
}

export default HomePage
