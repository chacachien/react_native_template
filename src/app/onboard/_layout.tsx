import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'


export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='/one'  />
        <Stack.Screen name='/two' />
        <Stack.Screen name='/three' />
    </Stack>
  )
}