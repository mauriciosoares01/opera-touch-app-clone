import styled from 'styled-components/native';

export const Container = styled.View``;

export const MainButton = styled.TouchableOpacity.attrs({
  activeOpatcity: 0,
})`
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  background-color: #6d2aff;
  border-radius: 30px;
`;
