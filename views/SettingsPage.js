import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button, Input } from 'react-native-elements'
import {
  useInitialTimerUpdate,
  useInitialTimer,
} from '../contexts/TimerContext'

const Settings = (props) => {
  const setInitialTimer = useInitialTimerUpdate()
  const initialTimer = useInitialTimer()

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Input
        placeholder="25 (minutes)"
        label="Pomodoro Timer (minutes)"
        keyboardType="number-pad"
        defaultValue={initialTimer.pomodoro.toString()}
        onChangeText={(e) => {
          setInitialTimer((prevState) => ({
            ...prevState,
            pomodoro: +e,
          }))
        }}
      />
      <Input
        placeholder="5 (minutes)"
        label="Break Timer (minutes)"
        keyboardType="number-pad"
        defaultValue={initialTimer.break.toString()}
        onChangeText={(e) => {
          setInitialTimer((prevState) => ({
            ...prevState,
            break: +e,
          }))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
})

export default Settings
