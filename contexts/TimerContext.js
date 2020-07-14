import React, { createContext, useContext, useState } from 'react'

const TimerContext = createContext()
const TimerUpdateContext = createContext()

export const useInitialTimer = () => {
  return useContext(TimerContext)
}
export const useInitialTimerUpdate = () => {
  return useContext(TimerUpdateContext)
}

export const TimerProvider = ({ children }) => {
  const [initialTimer, setInitialTimer] = useState({
    pomodoro: 2,
    break: 1,
  })

  return (
    <TimerContext.Provider value={initialTimer}>
      <TimerUpdateContext.Provider value={setInitialTimer}>
        {children}
      </TimerUpdateContext.Provider>
    </TimerContext.Provider>
  )
}
