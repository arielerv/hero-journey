import React from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { routes } from 'constant';

import { Container, Text, Logo } from './styled';

const Home = () => {
  const dispatch = useDispatch();
  setTimeout(() => dispatch(push(routes.LOGIN)), 1500);

  return (
    <Container>
      <Logo />
      <Text>Hero&apos;s Journey</Text>
    </Container>
  );
};

export default Home;
