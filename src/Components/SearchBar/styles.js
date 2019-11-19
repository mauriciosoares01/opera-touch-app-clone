import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #222021;
  border-radius: 25px;
  padding-horizontal: 7px;
`;

export const LogoSearch = styled.Image`
  width: 30px;
  height: 30px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Pesquisar ou digitar um endereço',
  placeholderTextColor: '#808080',
})``;

export const BoxButton = styled.TouchableOpacity`
  margin-horizontal: 5px;
`;
