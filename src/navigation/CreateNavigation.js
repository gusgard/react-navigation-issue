import { StackNavigator } from 'react-navigation';

import { CREATE_WIZARD } from './constants';
import { creation } from '../pages';

const RouteConfigs = {
  [CREATE_WIZARD]: {
    screen: creation,
    navigationOptions: () => ({
      header: null
    })
  }
};
const StackNavigatorConfig = {};

export default StackNavigator(RouteConfigs, StackNavigatorConfig);
