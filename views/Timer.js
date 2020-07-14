import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { capitalize, formatTimeLeft } from '../lib/util'
import { useInitialTimer } from '../contexts/TimerContext'
import styles from './styles'

const Timer = ({ navigation }) => {
  const initialState = useInitialTimer()
  const [timerStatus, setTimerStatus] = useState(false)
  const [type, setType] = useState('')
  const [timeLeft, setTimeLeft] = useState('')
  const [timerText, setTimerText] = useState('')
  const [start, setStart] = useState(false)

  const initialCurrType = () => {
    if (!type) return
    return initialState[type] * 60
  }

  useEffect(() => {
    setTimerText(formatTimeLeft(timeLeft))
    if (!timerStatus || !timeLeft || timeLeft <= 0) {
      if (timeLeft <= 0) setStart(() => false)
      return setTimerStatus(false)
    }

    const timeInterval = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(timeInterval)
  }, [timeLeft, timerStatus])

  const toggleTimer = (type = null) => {
    if (!start) setStart(() => true)
    if (timeLeft <= 0) {
      if (type) {
        setTimeLeft(initialState[type] * 60)
      } else setTimeLeft(initialCurrType())
    }
    setTimerStatus((prevState) => !prevState)
  }

  const restartTimer = () => {
    setTimeLeft(initialCurrType(type))
    setTimerStatus(() => false)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.type}>{start ? capitalize(type) : 'Pomodoro'}</Text>
      <Text style={styles.timer}>{timerText}</Text>

      {!start && (
        <>
          <Button
            buttonStyle={styles.button}
            onPress={() => {
              setType(() => 'pomodoro')
              toggleTimer('pomodoro')
            }}
            title={`Start a Pomodoro`}
            titleStyle={styles.buttonTitle}
          ></Button>
          <Button
            buttonStyle={styles.button}
            onPress={() => {
              setType(() => 'break')
              toggleTimer('break')
            }}
            title={`Take a Break`}
            titleStyle={styles.buttonTitle}
          ></Button>
        </>
      )}
      {timeLeft <= initialCurrType() && timeLeft > 0 && (
        <Button
          buttonStyle={styles.button}
          onPress={toggleTimer}
          title={`${
            timerStatus
              ? 'Pause'
              : timeLeft === initialCurrType()
              ? 'Start'
              : 'Continue'
          }`}
          titleStyle={styles.buttonTitle}
        ></Button>
      )}

      {type !== '' && timeLeft > 0 && !timerStatus && (
        <Button
          buttonStyle={styles.button}
          onPress={restartTimer}
          title={`Restart`}
          titleStyle={styles.buttonTitle}
        ></Button>
      )}
    </View>
  )
}

export default Timer
