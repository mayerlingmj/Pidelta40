import React, { useState } from 'react'

const User = ({ user, onPasswordUpdate, onLogin, onRegister, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(user.name)
  const [editedEmail, setEditedEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    if (isEditing) {
      // Implement the logic to save the edited user details
      // In a real application, send a request to update user details on the server
      // You can use the provided onPasswordUpdate function to update the password

      // Example: Simulate updating the user details in the state (replace with API request)
      setEditedName(editedName) // Update edited name in state
      setEditedEmail(editedEmail) // Update edited email in state

      // Example: Simulate updating the password in the state (replace with API request)
      if (isRegistering) {
        onRegister(editedEmail, newPassword) // Send the registration request
      } else {
        onLogin(editedEmail, oldPassword) // Send the login request
      }

      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  const handleLogout = () => {
    // Implement the logic to handle user logout
    // In a real application, send a request to the server to invalidate the user's session
    onLogout()
  }

  return (
    <div
      className="user"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Adjust as needed
        textAlign: 'center',
        backgroundImage: 'url(https://i.imgur.com/m7tsWDs.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Arial, sans-serif', // You can change the font family as needed
        color: 'white',
        padding: '20px'
      }}
    >
      <p
        className="user-info"
        style={{
          marginBottom: '20px'
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              style={{ marginRight: '10px', padding: '5px' }}
            />
            {isRegistering && (
              <input
                type="password"
                placeholder="Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={{ marginRight: '10px', padding: '5px' }}
              />
            )}
            {!isRegistering && (
              <input
                type="password"
                placeholder="Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                style={{ marginRight: '10px', padding: '5px' }}
              />
            )}
          </>
        ) : (
          <>
            <span>Name: {user.name}</span>
            <span>Email: {user.email}</span>
          </>
        )}
      </p>
      <div
        className="user-buttons"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <button
          onClick={handleSaveClick}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'red',
            border: '2px solid red',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s'
          }}
        >
          {isEditing ? (isRegistering ? 'Register' : 'Login') : 'Edit'}
        </button>
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'red',
            border: '2px solid red',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s'
          }}
        >
          {isRegistering ? 'Switch to Login' : 'Switch to Register'}
        </button>
        {/* <button
          onClick={handleLogout}
          style={{
            margin: '5px',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            color: 'red',
            border: '2px solid red',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s'
          }}
        >
          Logout
        </button> */}
      </div>
    </div>
  )
}

export default User
