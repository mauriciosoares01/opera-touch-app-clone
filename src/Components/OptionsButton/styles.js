import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.TouchableOpacity``;

export const Circle = styled.View`
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-color: #fff;
  border-width: ${StyleSheet.hairlineWidth};
  border-radius: 35px;
`;

export const Title = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #fff;
  font-size: 10px;
`;
