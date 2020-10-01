import React, {useState, useEffect} from 'react';
import {View, FlatList, Dimensions, StyleSheet, Platform} from 'react-native';
import {Appbar, DataTable} from 'react-native-paper';
import {DatePicker} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const UserDetails = ({navigation, route}) => {
	const [date, setDate] = useState(new Date());
	const [activeDate, setActiveDate] = useState([]);

	useEffect(() => {
		let activePeriod = [];

		route.params.user.activity_periods.map(item => {
			if (moment(item.start_time).format('DD/MM/YYYY') === moment(date).format('DD/MM/YYYY')) {
				activePeriod.push(item);
			}
		});
		setActiveDate(activePeriod);
	}, []);

	const tosetDate = newDate => {
		let TonewDate = moment(newDate, 'DD/MM/YYYY').format('DD/MM/YYYY');
		setDate(TonewDate);

		let activePeriod = [];

		route.params.user.activity_periods.map(item => {
			if (moment(item.start_time).format('DD/MM/YYYY') === moment(newDate).format('DD/MM/YYYY')) {
				activePeriod.push(item);
			}
		});
		setActiveDate(activePeriod);
	};

	return (
		<View style={{flex: 1}}>
			<Appbar.Header>
				<Appbar.BackAction onPress={() => navigation.goBack()} />
				<Appbar.Content title="Activity List" />
			</Appbar.Header>
			<View style={{padding: 10}}>
				<View style={styles.dateText}>
					<View style={{width: SCREEN_WIDTH * 0.9}}>
						<DatePicker
							value={date}
							locale={'en'}
							timeZoneOffsetInMinutes={undefined}
							modalTransparent={false}
							animationType={'fade'}
							androidMode={'default'}
							placeHolderText={moment(date).format('DD/MM/YYYY')}
							textStyle={{color: 'black'}}
							placeHolderTextStyle={{color: 'black'}}
							onDateChange={placeHolderText => tosetDate(placeHolderText)}
							disabled={false}
						/>
					</View>
					<Icon style={styles.icon} name="caretdown" />
				</View>
				<View style={styles.table}>
					<DataTable.Header>
						<DataTable.Title style={{justifyContent: 'center'}}>FROM</DataTable.Title>
						<DataTable.Title style={{justifyContent: 'center'}}>TO</DataTable.Title>
					</DataTable.Header>
					{activeDate.length === 0 ? (
						<DataTable.Row>
							<DataTable.Cell style={{justifyContent: 'center'}}>
								No Data available for this date
							</DataTable.Cell>
						</DataTable.Row>
					) : (
						<FlatList
							keyExtractor={(item, i) => i.toString()}
							data={activeDate}
							renderItem={({item}) => (
								<DataTable.Row>
									<DataTable.Cell style={{justifyContent: 'center'}}>
										{item.start_time}
									</DataTable.Cell>
									<DataTable.Cell style={{justifyContent: 'center'}}>{item.end_time}</DataTable.Cell>
								</DataTable.Row>
							)}
						/>
					)}
				</View>
			</View>
		</View>
	);
};

export default UserDetails;

const styles = StyleSheet.create({
	dateText: {
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		flexDirection: 'row',
		borderRadius: 30
	},
	icon: {
		color: 'black',
		marginTop: 14,
		marginRight: 10
	},
	table: {
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5,
		marginTop: 15,
		borderRadius: 10
	}
});
