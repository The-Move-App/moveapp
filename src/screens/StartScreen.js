import React from 'react'
import Background from '../comp/Background'
import Logo from '../comp/Logo'
import Header from '../comp/Header'
import Button from '../comp/Button'
import Paragraph from '../comp/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>MOVE</Header>
      <Paragraph>
        The easiest way to start move.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}