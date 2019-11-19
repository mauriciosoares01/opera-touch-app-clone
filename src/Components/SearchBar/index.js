import React from 'react';
import Options from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, SearchInput, BoxButton, LogoSearch} from './styles';

const SearchBar = () => {
  return (
    <Container>
      <LogoSearch source={require('../../assets/googleSearchLogo.png')} />
      <SearchInput />
      <BoxButton>
        <Options name="dots-vertical" size={25} color="#fff" />
      </BoxButton>
    </Container>
  );
};

export default SearchBar;
