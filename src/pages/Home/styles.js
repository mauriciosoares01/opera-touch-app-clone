import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  z-index: -1;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  align-self: center;
  padding-horizontal: 30px;
`;

export const BoxLogo = styled.View`
  align-items: center;
  padding-top: 30px;
  margin: 25px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Text = styled.Text``;
