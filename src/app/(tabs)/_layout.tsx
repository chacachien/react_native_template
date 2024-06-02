import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import { Redirect, Tabs } from 'expo-router'

export default function _layout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Trang chủ',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
					headerShown: true,
				}}
			/>

			<Tabs.Screen
				name="notification"
				options={{
					title: 'Thông báo',
					tabBarIcon: ({ color }) => <FontAwesome size={28} name="bell" color={color} />,
					headerShown: true,
					headerTitleAlign: 'center',
				}}
			/>
		</Tabs>
	)
}
