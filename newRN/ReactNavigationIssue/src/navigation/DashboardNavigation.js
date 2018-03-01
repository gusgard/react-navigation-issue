import { StackNavigator } from 'react-navigation';

import { DASHBOARD_LIST } from './constants';
import { dashboard } from '../pages';

const RouteConfigs = {
  [DASHBOARD_LIST]: {
    screen: dashboard,
    navigationOptions: () => ({
      title: 'A'
    })
  }
};
const StackNavigatorConfig = {};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
