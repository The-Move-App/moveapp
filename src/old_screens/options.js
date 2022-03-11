import React from 'react'
import { View } from 'react-native'

import { Nav } from '/Users/saidahmed/Documents/mobile-app/MoveApp/index/components/index.js'

const Options = () => <View />

Options.navigationOptions = ({ navigation }) => ({
  header: <Nav title="Settings" navigation={navigation} />,
})

export default Options
