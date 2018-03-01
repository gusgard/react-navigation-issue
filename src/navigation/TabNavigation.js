import { StackNavigator, TabNavigator } from 'react-navigation';

import { HOME, CREATE, DASHBOARD, DASHBOARD_LIST } from './constants';
import CreateNavigation from './CreateNavigation';
import DashboardNavigation from './DashboardNavigation';
import { dashboard } from '../pages';

const RouteConfigs = {
  [DASHBOARD]: {
    screen: DashboardNavigation,
    navigationOptions: () => ({
      header: null
    })
  },
  [HOME]: {
    screen: StackNavigator({
      [DASHBOARD_LIST]: {
        screen: dashboard,
        navigationOptions: () => ({
          title: 'B'
        })
      }
    }),
    navigationOptions: () => ({})
  },
  [CREATE]: {
    screen: CreateNavigation,
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
