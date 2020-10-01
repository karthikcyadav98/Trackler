import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Userlist from '../screens/Userlist';
import UserDetails from '../screens/UserDetails';

const Stack = createStackNavigator();

const Navigation = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Userlist"
				options={{
					title: 'Userlist',
					headerShown: false
				}}
			>
				{props => <Userlist {...props} />}
			</Stack.Screen>

			<Stack.Screen
				name="UserDetails"
				options={{
					title: 'UserDetails',
					headerShown: false
				}}
			>
				{props => <UserDetails {...props} />}
			</Stack.Screen>
		</Stack.Navigator>
	);
};

export default Navigation;
