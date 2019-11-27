import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  Background,
  Content,
  Logo,
  BoxLogo,
  OptionsView,
  TitleSites,
} from './styles';
import SearchBar from '../../Components/SearchBar';
import OptionsButton from '../../Components/OptionsButton';

export function navigationOptions({navigation}) {
  return {header: null};
}

function Home({navigation}) {
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
        <SearchBar next={navigation} />
        <OptionsView>
          <OptionsButton iconName="send" title="Meu Flow" />
          <OptionsButton iconName="query-builder" title="Histórico" />
          <OptionsButton iconName="tab" title="Guias" />
        </OptionsView>
        <TitleSites>SITES PRINCIPAIS</TitleSites>
      </Content>
    </Container>
  );
}

export default Home;
