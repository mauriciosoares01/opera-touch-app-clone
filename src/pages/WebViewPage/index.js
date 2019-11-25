import React from 'react';
import {Container} from './styles';
import {WebView} from 'react-native-webview';

function WebViewPage({navigation}) {
  const {getParam} = navigation;
  console.log(getParam('path'));
  return (
    <Container>
      {/* <WebView source={{uri: 'https://facebook.github.io/react-native/'}} /> */}
    </Container>
  );
}

export default WebViewPage;
