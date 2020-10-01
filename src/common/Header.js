import React from 'react';
import {Appbar} from 'react-native-paper';
import {Image, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = () => {
	return (
		<Appbar.Header style={styles.header}>
			<Image style={styles.title} source={require('../assets/title.png')} />
		</Appbar.Header>
	);
};

export default Header;

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		width: SCREEN_WIDTH * 0.4,
		height: Platform.OS === 'android' ? SCREEN_HEIGHT * 0.055 : SCREEN_HEIGHT * 0.05
	}
});
