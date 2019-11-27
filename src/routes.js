import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen, {navigationOptions} from './pages/Home';
import WebView, {navigationOptionsWeb} from './pages/WebViewPage';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: navigationOptions,
  },
  WebViewPage: {
    screen: WebView,
    navigationOptions: navigationOptionsWeb,
  },
});

export default createAppContainer(MainStack);
