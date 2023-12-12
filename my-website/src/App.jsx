// App.jsx
import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import About40th from './components/About40th'
import HotelInfo from './components/HotelInfo'
import AddComment from './components/AddComment'
import User from './components/User'
import CrossingLines from './components/CrossingLines'
import CommentList from './pages/CommentList'
import CommentDetail from './pages/CommentDetail'

const LetsChat = ({ isAuthenticated }) => {
  return <div></div>
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    passwordHash: 'hashed_password_here'
    // other user properties
  }

  const onRegister = (name, email, password) => {
    // Implement user registration logic
    console.log('Registering user with name:', name)
    console.log('Registering user with email:', email)
    console.log('Registering user with password:', password)
  }

  const onLogin = (email, password) => {
    // Implement user login logic
    console.log('Logging in user with email:', email)
    console.log('Logging in user with password:', password)
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    // Implement user logout logic
    setIsAuthenticated(false)
  }

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about40th" element={<About40th />} />
          <Route
            path="/letschat"
            element={<LetsChat isAuthenticated={isAuthenticated} />}
          />
          <Route
            path="/user"
            element={
              <User
                user={user}
                onRegister={onRegister}
                onLogin={onLogin}
                onLogout={handleLogout}
              />
            }
          />

          <Route path="/comments" element={<CommentList user={user} />} />
          <Route path="/comments/:commentId" element={<CommentDetail />} />
          {/* ... (other routes) */}
          <Route path="/about/crossinglines" element={<CrossingLines />} />
          <Route path="/about40th/hotelinfo" element={<HotelInfo />} />
          <Route path="/comment" element={<AddComment user={user} />} />
          <Route path="/logout" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
