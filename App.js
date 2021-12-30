import React from 'react'
import { Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigator, TabNavigator } from 'react-navigation'
import PropTypes from 'prop-types'

import Profile1 from '/Users/saidahmed/Documents/mobile-app/MoveApp/index/screens'
import Options from '/Users/saidahmed/Documents/mobile-app/MoveApp/index/screens/options.js'

const Profile1Stack = StackNavigator(
  {
    profile: {
      screen: Profile1,
      path: '/',
    },
    options: {
      screen: Options,
      path: '/',
    },
  },
  {
    mode: 'card',
  }
)


const HomeIcon = ({ focused, tintColor }) => (
  <Icon
    name="circle"
    type="entypo"
    size={26}
    color={focused ? tintColor : 'gray'}
  />
)

const RootTabs = TabNavigator(
  {
    profile1: {
      screen: Profile1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: HomeIcon,
      },
    },

    // PRODUCT
    product1: {
      screen: Product1Stack,
      navigationOptions: {
        tabBarLabel: 'Profile1',
        tabBarIcon: HomeIcon,
        tabBarVisible: false,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'black' : 'gray',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      labelStyle: {
        fontSize: 12,e
      },
      iconStyle: {
        width: 30,
        height: 30,
      },
      style: {
        backgroundColor: 'white',
        justifyContent: 'center',
      },
    },
    tabBarPosition: 'bottom',
    initialRouteName: 'profile1',
  }
)

HomeIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  tintColor: PropTypes.string.isRequired,
}

export default RootTabs
