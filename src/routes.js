import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen, {navigationOptions} from './pages/Home';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigationOptions,
  },
});

export default createAppContainer(MainStack);
