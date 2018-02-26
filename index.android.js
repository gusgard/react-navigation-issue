import { AppRegistry, StatusBar } from 'react-native';

// import { colors } from './src/config/constants';
import App from './src/App';

// Configure background color for the status bar
// StatusBar.setBackgroundColor(colors.primaryDark, true);
AppRegistry.registerComponent('Skedler', () => App);
