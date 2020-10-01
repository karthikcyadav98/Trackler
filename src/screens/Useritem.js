import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Card, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Useritem = ({item}) => {
	const navigation = useNavigation();

	return (
		<Card style={styles.cardContainer}>
			<View style={[styles.row, {justifyContent: 'space-between'}]}>
				<View style={styles.row}>
					<View>
						<Image style={styles.image} source={require('../assets/user.png')} />
					</View>
					<View>
						<Text style={styles.nameText}>{item.real_name}</Text>
						<Text style={styles.locText}>{item.tz}</Text>
					</View>
				</View>
				<View style={{justifyContent: 'center'}}>
					<IconButton
						icon="arrow-right-drop-circle-outline"
						size={25}
						onPress={() => navigation.navigate('UserDetails', {user: item})}
					/>
				</View>
			</View>
		</Card>
	);
};

export default Useritem;

const styles = StyleSheet.create({
	cardContainer: {
		padding: 10
	},
	textHead: {
		fontWeight: 'bold',
		fontSize: 18
	},
	nameText: {
		fontSize: 18,
		marginLeft: 10
	},
	locText: {
		fontSize: 16,
		marginLeft: 10,
		color: '#666666'
	},
	row: {
		flexDirection: 'row'
	},
	image: {
		width: SCREEN_WIDTH * 0.12,
		height: SCREEN_HEIGHT * 0.06
	}
});
