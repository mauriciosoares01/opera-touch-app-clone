import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  z-index: 0;
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

export const OptionsView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 35px 20px 25px 20px;
`;

export const TitleSites = styled.Text`
  color: #bebebe;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
`;

export const MenuBox = styled.View`
  align-self: center;
  z-index: 1;
  position: absolute;
  bottom: 30px;
`;
