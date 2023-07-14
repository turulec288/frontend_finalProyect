import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage/>
            </PrivateRoute>
          }
        />
        
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App
