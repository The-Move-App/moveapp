import React from 'react'
import PropTypes from 'prop-types'

import contactData from '/Users/saidahmed/Documents/mobile-app/MoveApp/index/mocks/contact.json'

import Profile from '/Users/saidahmed/Documents/mobile-app/MoveApp/index/screens/profile.js'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen
