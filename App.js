import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import {GlobalProvider} from './src/context/GlobalState';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: '#fff',
		accent: '#03A9F4'
	}
};

const App = () => {
	return (
		<GlobalProvider>
			<PaperProvider style={{flex: 1}} theme={theme}>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</PaperProvider>
		</GlobalProvider>
	);
};

export default App;
