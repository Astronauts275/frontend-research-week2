import React from 'react'
import { useUserStore } from '../store/userStore'

const UserDemo: React.FC = () => {
  const { name, age, setName, setAge } = useUserStore()

  return (
    <div style={{ textAlign: 'center', marginTop: 40 }}>
      <h2>👤 Zustand Hooks & Access</h2>
      <p>Tên: {name}</p>
      <p>Tuổi: {age}</p>
      <button onClick={() => setName('Trần Thị B')}>Đổi tên</button>
      <button onClick={() => setAge(age + 1)}>Tăng tuổi</button>
    </div>
  )
}

export default UserDemo
