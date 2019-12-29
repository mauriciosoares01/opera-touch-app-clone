import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Header,
  LogoSearch,
  TextInput,
  SendButton,
  SearchBox,
} from './styles';
import {WebView} from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function navigationOptionsWeb() {
  return {header: null};
}

function WebViewPage({navigation}) {
  const {getParam} = navigation;
  const [path, setPath] = useState(getParam('path'));
  const [textHeader, setTextHeader] = useState('');

  function handleSubmitEditing() {
    const googleSearch =
      'https://www.google.com/search?q=' + textHeader.replace(' ', '+');

    setPath(googleSearch);
  }

  return (
    <Container>
      <Header>
        <SearchBox>
          <LogoSearch source={require('../../assets/googleSearchLogo.png')} />
          <TextInput
            placeholder={path}
            onChangeText={setTextHeader}
            onSubmitEditing={handleSubmitEditing}
            numberOfLines={1}
            elipsedMode="tail"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </SearchBox>
        <SendButton onPress={handleSubmitEditing}>
          <Icon name="send" color="#fff" size={22} />
        </SendButton>
      </Header>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <WebView source={{uri: path}} />
    </Container>
  );
}

export default WebViewPage;
