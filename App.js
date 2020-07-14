import React, { useState, useEffect } from 'react'
import { TimerProvider } from './contexts/TimerContext'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomePage from './views/HomePage'
import Timer from './views/Timer'
import SettingsPage from './views/SettingsPage'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <TimerProvider>
        <Stack.Navigator>
          <Stack.Screen name="Pomodoro" component={HomePage} />
          <Stack.Screen name="Timer" component={Timer} />
          <Stack.Screen name="Settings" component={SettingsPage} />
        </Stack.Navigator>
      </TimerProvider>
    </NavigationContainer>
  )
}
