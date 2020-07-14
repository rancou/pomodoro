import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import { capitalize, formatTimeLeft } from './lib/util'

export default function App() {
  const initialState = {
    pomodoro: 5,
    break: 3,
  }

  const [timerStatus, setTimerStatus] = useState(false)
  const [type, setType] = useState('')
  const [timeLeft, setTimeLeft] = useState(initialState.pomodoro)
  const [timerText, setTimerText] = useState('')
  const [start, setStart] = useState(false)

  const initialCurrType = () => {
    if (!type) return
    return initialState[type]
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
    console.log(start)
    if (!start) setStart(() => true)
    if (timeLeft <= 0) {
      if (type) {
        setTimeLeft(initialState[type])
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
        ></Button>
      )}

      {type !== '' && timeLeft > 0 && !timerStatus && (
        <Button
          buttonStyle={styles.button}
          onPress={restartTimer}
          title={`Restart`}
        ></Button>
      )}

      {!start && (
        <Button
          buttonStyle={styles.button}
          onPress={() => {
            setType(() => 'pomodoro')
            toggleTimer('pomodoro')
          }}
          title={`Start a Pomodoro`}
        ></Button>
      )}

      {!start && (
        <Button
          buttonStyle={styles.button}
          onPress={() => {
            setType(() => 'break')

            toggleTimer('break')
          }}
          title={`Take a Break`}
        ></Button>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
    backgroundColor: '#000',
    paddingHorizontal: 30,
    marginBottom: 32,
    minWidth: 200,
  },
  timer: {
    fontSize: 64,
    fontWeight: 'bold',
    marginBottom: 100,
    width: '100%',
    textAlign: 'center',
  },
  type: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    width: '100%',
    textAlign: 'center',
  },
})
