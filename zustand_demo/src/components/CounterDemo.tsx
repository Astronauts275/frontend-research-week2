import React from 'react'
import { useCounterStore } from '../store/counterStore'

const CounterDemo: React.FC = () => {
  const { count, increase, decrease, reset } = useCounterStore()

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>🧮 Zustand Store Management</h2>
      <h3>Count: {count}</h3>
      <button onClick={increase}>➕ Tăng</button>
      <button onClick={decrease}>➖ Giảm</button>
      <button onClick={reset}>🔁 Reset</button>
    </div>
  )
}

export default CounterDemo
