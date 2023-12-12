const User = require('../../../pi-delta-40-anniversary/models/User')
const middleware = require('../../../pi-delta-40-anniversary/middleware')

const userService = {
  registerUser: async ({ name, email, password }) => {
    try {
      const passwordDigest = await middleware.hashPassword(password)
      const existingUser = await User.findOne({ email })

      if (existingUser) {
        throw new Error('A user with that email has already been registered!')
      }

      const newUser = await User.create({
        name,
        email,
        passwordDigest: passwordDigest.toString()
      })
      return newUser
    } catch (error) {
      throw error
    }
  },

  loginUser: async ({ email, password }) => {
    try {
      const user = await User.findOne({ email })

      if (!user) {
        throw new Error('Unauthorized')
      }

      const matched = await middleware.comparePassword(
        user.passwordDigest,
        password
      )

      if (matched) {
        const payload = {
          id: user.id,
          email: user.email
        }

        const token = middleware.createToken(payload)
        return { user: payload, token }
      } else {
        throw new Error('Unauthorized')
      }
    } catch (error) {
      throw error
    }
  },

  updatePassword: async (userId, { oldPassword, newPassword }) => {
    try {
      const user = await User.findById(userId)
      const matched = await middleware.comparePassword(
        user.passwordDigest,
        oldPassword
      )

      if (matched) {
        const passwordDigest = await middleware.hashPassword(newPassword)
        const updatedUser = await User.findByIdAndUpdate(userId, {
          passwordDigest
        })
        const payload = {
          id: updatedUser.id,
          email: updatedUser.email
        }

        return { status: 'Password Updated!', user: payload }
      } else {
        throw new Error('Old Password did not match!')
      }
    } catch (error) {
      throw error
    }
  },

  checkSession: async (userId) => {
    try {
      const user = await User.findById(userId)
      return { id: user.id, email: user.email }
    } catch (error) {
      throw error
    }
  },

  logoutUser: async () => {
    try {
      return { status: 'Logout successful' }
    } catch (error) {
      throw error
    }
  }
}

module.exports = userService
