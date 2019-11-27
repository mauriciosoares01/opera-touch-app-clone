import React from 'react';
import {Container, Circle, Title} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function OptionsButton({iconName, title}) {
  return (
    <Container>
      <Circle>
        <Icon name={iconName} size={25} color="#fff" />
      </Circle>
      <Title>{title}</Title>
    </Container>
  );
}

export default OptionsButton;
