import React from 'react';
import { 
    View,
    TextInput,
    StyleSheet,
    Text,
    Image, 
    Pressable
} from 'react-native';

export default class SignUp extends React.Component{
    
    state = {
        firstname: '', lastname: '', password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({[key]: val})
    }
    signUp = async () => {
        const {firstname, lastname, password, email} = this.state
        try {
            console.log('Registration Completed!', success)
        } catch(err){
            console.log('Error signing up: ', err)
        }
    }


    
    
    render(){
        return(
            <View style={styles.container}>
              <Image
                style = {styles.tinyLogo}
                source = {require('/Users/saidahmed/Documents/mobile-app/MoveApp/assets/logo_the_move.png')}
                />
                <Text 
                  style = {styles.alreadyuser}> New User?
                  <Text style = {styles.hyperlink}> Create Account </Text>
                </Text> 
                <TextInput
                style={styles.input}
                placeholder = 'Email'
                autoCapitalize="none"
                textAlign='center'
                placeholderTextColor='black'
                onChangeText = {val => this.onChangeText('email', val)}
                />
                <TextInput
                style={styles.input}
                placeholder = 'Password'
                secureTextEntry={true}
                autoCapitalize="none"
                textAlign='center'
                placeholderTextColor='black'
                onChangeText = {val => this.onChangeText('password', val)}
                />
                <TextInput
                style={styles.btn}
                placeholder = 'Continue'
                autoCapitalize="none"
                textAlign='center'
                placeholderTextColor='white'
                onChangeText = {val => this.onChangeText('firstname', val)}
                />
                <Pressable style={styles.button}>
                <Text style={styles.text}>Continue</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: 327,
        height: 80,
        backgroundColor: 'white',
        borderColor: '#707070',
        borderWidth: 5,
        margin: 10,
        padding: 8,
        color: 'black',
        borderRadius: 50,
        fontSize: 18,
        fontWeight: '500',
    },
    alreadyuser: {
      fontSize: 14,
      color: 'black',
      fontWeight: 'bold',
      marginBottom: 100
    },
    hyperlink: {
      fontSize: 14,
      color: '#632FEF',
      fontWeight: 'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo:
    {
      width: 150,
      height: 150,
      marginBottom: 30,
    },
    button: {
      width: 192,
      height: 62,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#6C63FF',
      borderRadius: 50,
      color: 'white',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
})