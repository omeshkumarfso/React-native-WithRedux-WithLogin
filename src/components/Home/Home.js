import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/AuthSlice';


const Home = () => {
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    dispatch(authActions.logOut())
  }

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=> LogoutHandler()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home