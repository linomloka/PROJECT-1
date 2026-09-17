import './App.css'
import { Routes, Route } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import SignIn from './SignIn'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
