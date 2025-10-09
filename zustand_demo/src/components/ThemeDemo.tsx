import React from 'react'
import { useThemeStore } from '../store/themeStore'

const ThemeDemo: React.FC = () => {
  const { darkMode, toggleTheme } = useThemeStore()

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : '#f5f5f5',
        color: darkMode ? '#fff' : '#000',
        textAlign: 'center',
        padding: 40,
        transition: '0.3s',
      }}
    >
      <h2>🎨 Zustand Middleware (Persist)</h2>
      <p>Chế độ hiện tại: {darkMode ? 'Dark' : 'Light'}</p>
      <button onClick={toggleTheme}>Đổi giao diện</button>
    </div>
  )
}

export default ThemeDemo
