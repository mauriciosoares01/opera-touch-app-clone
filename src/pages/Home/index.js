import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Background, Text, Content, Logo, BoxLogo} from './styles';
import SearchBar from '../../Components/SearchBar';

export function navigationOptions({navigation}) {
  return {header: null};
}

const pages = () => {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />
      <Background source={require('../../assets/background.jpg')} />
      <Content>
        <BoxLogo>
          <Logo source={require('../../assets/operaLogo.png')} />
        </BoxLogo>
        <SearchBar />
        <Text>Texto</Text>
      </Content>
    </Container>
  );
};

export default pages;
