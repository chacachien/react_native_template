import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

export default function _layout() {
	const router = useRouter()
	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}
		>
			<Stack.Screen name="index" options={{ title: 'Home' }} />
			<Stack.Screen
				name="register/index"
				options={{
					title: 'Register',
					headerRight: () => <Button title="Login" onPress={() => router.push('login')} />,
				}}
			/>
			<Stack.Screen name="login" options={{ title: 'Login', presentation: 'modal' }} />
			<Stack.Screen name="[missing]" options={{ title: '404' }} />
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
             }} />
		</Stack>
	)
}
