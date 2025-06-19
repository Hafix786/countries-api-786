import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContexts'

const useTheme = () => useContext(ThemeContext)

export default useTheme