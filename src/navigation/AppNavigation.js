import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';

import TabNavigation from './TabNavigation';

const RouteConfigs = {
	TabNavigation: {
		screen: TabNavigation
	}
};
const StackNavigatorConfig = {
	mode: Platform.OS === 'ios' ? 'modal' : 'card'
};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
