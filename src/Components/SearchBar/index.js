import React, {useState} from 'react';
import Options from 'react-native-vector-icons/MaterialCommunityIcons';
import {Container, SearchInput, BoxButton, LogoSearch} from './styles';

function SearchBar({next}) {
  const [textSearch, setTextSearch] = useState('');

  function handleSubmitEditing() {
    const {navigate} = next;
    const googleSearch =
      'https://www.google.com/search?q=' + textSearch.replace(' ', '+');
    navigate('WebViewPage', {path: googleSearch});
  }

  return (
    <Container>
      <LogoSearch source={require('../../assets/googleSearchLogo.png')} />
      <SearchInput
        keyboardAppearance="dark"
        onChangeText={setTextSearch}
        onSubmitEditing={handleSubmitEditing}
      />
      <BoxButton>
        <Options name="dots-vertical" size={25} color="#fff" />
      </BoxButton>
    </Container>
  );
}

export default SearchBar;
