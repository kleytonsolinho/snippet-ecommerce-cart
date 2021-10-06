import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 400px;
  max-width: 1000px;
  padding-top: 110px;
  margin: 0 auto;
  background: #fff;
  color: #bbb;
  border-radius: 10px;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2;
  }

  div h1 {
    font-size: 4rem;
  }

  div p {
    margin: 2rem;
    font-size: 1.2rem;
  }

  div button {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--primary-color);
    color: #fff;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    margin-top: auto;
    font-weight: bold;

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const Icon = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;

  font-size: 15rem;
  color: #dddddd;
  opacity: 0.5;
`;
