import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Text, View } from 'react-native';

import { creation } from '../pages';

const RouteConfigs = {
	MainA: {
		screen: StackNavigator({
			ScreenA: {
				screen: () => (
					<View>
						<Text>A screen</Text>
					</View>
				),
				navigationOptions: () => ({
					title: 'A'
				})
			}
		}),
		navigationOptions: () => ({
			header: null
		})
	},
	MainB: {
		screen: StackNavigator({
			ScreenB: {
				screen: () => (
					<View>
						<Text>B screen</Text>
					</View>
				),
				navigationOptions: () => ({
					title: 'B'
				})
			}
		}),
		navigationOptions: () => ({})
	},
	MainC: {
		screen: StackNavigator({
			ScreenC: {
				screen: creation,
				navigationOptions: () => ({
					header: null
				})
			}
		}),
		navigationOptions: () => ({
			tabBarVisible: false,
			title: 'C'
		})
	}
};

const TabNavigatorConfig = {
	// initialRouteName: CREATE,
	tabBarPosition: 'bottom', // Android
	swipeEnabled: false // Android
	// lazy: true,
};

export default TabNavigator(RouteConfigs, TabNavigatorConfig);
