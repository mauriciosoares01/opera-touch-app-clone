import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 65px;
  background-color: #222021;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})`
  margin: 25px 0px 0px 0px;
  color: #fff;
  width: 70%;
`;

export const LogoSearch = styled.Image`
  width: 25px;
  height: 25px;
  margin: 30px 5px 0px 15px;
`;

export const SendButton = styled.TouchableOpacity`
  margin-top: 25px;
  padding: 8px;
`;

export const SearchBox = styled.View`
  flex-direction: row;
`;
