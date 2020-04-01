import React, {useRef, useEffect} from 'react';
import {Container, MainButton} from './styles';
import LottieView from 'lottie-react-native';

function MenuButton() {
  const menuAnim = useRef(null);

  const StartAnim = () => {
    menuAnim.current.play(85, 120);
  };

  useEffect(() => {
    menuAnim.current.play(1, 70);
  }, []);

  return (
    <Container>
      <MainButton onPressIn={StartAnim} activeOpacity={0.9}>
        <LottieView
          ref={menuAnim}
          source={require('../../assets/Animations/menuButton.json')}
          loop={false}
          style={{width: 35, height: 35}}
        />
      </MainButton>
    </Container>
  );
}

export default MenuButton;
