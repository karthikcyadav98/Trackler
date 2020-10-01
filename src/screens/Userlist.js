import React, {useContext, useState} from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import {GlobalContext} from '../context/GlobalState';
import Useritem from './Useritem';
import Header from '../common/Header';

const Userlist = () => {
	const {userList} = useContext(GlobalContext);

	const [userData, setUserData] = useState(userList);
	const [text, setText] = useState('');

	const handleChangeText = value => {
		setText(value);
		const searchText = value;
		const prevData = userList.filter(item =>
			Object.keys(item.real_name).some(k => item.real_name.toLowerCase().includes(searchText.toLowerCase()))
		);

		setUserData(prevData);
	};

	return (
		<View style={{flex: 1, backgroundColor: '#fff'}}>
			<Header />
			<View style={styles.search}>
				<TextInput
					value={text}
					onChangeText={text => handleChangeText(text)}
					style={{marginLeft: 15}}
					inlineImageLeft="search_icon"
					placeholder="search"
				/>
			</View>
			<FlatList
				style={{marginTop: 10}}
				keyExtractor={item => item.id}
				data={userData}
				renderItem={({item}) => <Useritem item={item} />}
			/>
		</View>
	);
};

export default Userlist;

const styles = StyleSheet.create({
	search: {
		padding: Platform.OS === 'ios' ? 15 : 0,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		backgroundColor: '#F1F1F1',
		borderRadius: 50
	}
});
