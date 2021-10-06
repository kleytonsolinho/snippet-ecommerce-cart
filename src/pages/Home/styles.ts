import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductList = styled.div`
  padding: 2rem;
  padding-top: 110px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;
