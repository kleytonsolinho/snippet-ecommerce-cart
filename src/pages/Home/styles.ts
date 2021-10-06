import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export const ProductList = styled.div`
  padding: 2rem;
  padding-top: 110px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
`;
