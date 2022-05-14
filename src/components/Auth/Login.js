import { StyleSheet, View,Text, TextInput,Button,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { authActions } from '../../store/AuthSlice';



const Login = ({navigation}) => {
    const dispatch = useDispatch();

    const inputTextColor = useSelector((state) => state.themeColors.inputTextColor)
    const headingTextColor = useSelector((state) => state.themeColors.headingTextColor)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailInputHandler = (event) => {
        setEmail(event)
    }
    const passworInputdHandler = (event) => {
        setPassword(event)
    }
    const LoginHandler = () => {
        dispatch(authActions.logIn())
    }

    return (
        <View style={styles.container} >
            <View style={styles.inputView}>
                <TextInput
                style={styles.input(inputTextColor)}
                    placeholder='Enter Email'
                    textContentType={'emailAddress'}
                    value={email}
                    onChangeText={(e) => emailInputHandler(e)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                style={styles.input(inputTextColor)}
                allowFontScaling={true}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(e) => passworInputdHandler(e)}
                />
            </View>
            {/* <View style={styles.buttonView}>
                <Button 
                style={styles.button}
                title='Login'
                color={headingTextColor}
                />
            </View> */}
            
                <TouchableOpacity 
                style={styles.buttonView(headingTextColor)} 
                onPress={ ()=> LoginHandler() }>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.textView} onPress={ () => navigation.navigate('Signup')}>
                    <Text>If you are not registered? <Text style={styles.text(headingTextColor)}> SignUp</Text></Text>
                    
                </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        // backgroundColor: 'red',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
   
    inputView: {
        height: 50,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:20
    },
    input: inputColor => ({
        color: inputColor,
        // borderWidth:2,
        height:'90%',
        fontSize:22,          
    }),

    // input:{
    // color:{inputTextColor}
    // }

    buttonView: buttonViewColor => ({
        height:50,
        width:'50%',
        backgroundColor:buttonViewColor,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40 
    }),
       
    
    button:{
        color:'white',
        fontSize:30,
    },

    textView: {
        height:'8%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    text:textColor => ({
        color:textColor,
        fontSize:22
    })
});

export default Login

