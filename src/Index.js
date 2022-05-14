import React from 'react';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';

const Stack = createNativeStackNavigator();

const Index = () => {

  const isSignedIn = useSelector((state) => state.auth.isSignedIn)

  return (

    <Stack.Navigator>
      {!isSignedIn ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
        </>
      )}

    </Stack.Navigator>

  )
}

export default Index