import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'

export default function Register() {


  return (
    <View>
      <Text>Register</Text>
      <Link href='/login' asChild>
        <Button title='Login'/>
      </Link>
    </View>
  )
}