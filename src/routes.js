import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen, {navigationOptions} from './pages/Home';
import WebView from './pages/WebView';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigationOptions,
  },
  WebViewPage: {
    screen: WebView,
  },
});

export default createAppContainer(MainStack);
