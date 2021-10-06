import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 75px;
  background-color: var(--primary-color);
  padding: 0 2rem;
  position: fixed;
  z-index: 9;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Cart = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 2.5rem;
    margin-left: 10px;
  }
`;

export const CartWidget = styled.div`
  width: 300px;
  height: 300px;
  position: absolute;
  top: 60px;
  right: 30px;
  z-index: 10;
  opacity: 1;
  overflow: hidden;

  background: #fff;
  color: #333;
  border-radius: 10px;
  padding: 1rem;

  .header {
    width: 100%;
    height: 5%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    font-weight: bold;
  }

  div {
    width: 100%;
    height: 90%;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  button {
    width: 100%;
    height: 5%;
    background: transparent;
    border: none;
    font-weight: bold;
  }

  .itens {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid #ddd;
  }

  .itens li {
    width: 100%;
    margin: 5px 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;

    &:hover {
      background: #dddddd;
      cursor: pointer;
    }
  }

  .itens li img {
    width: 70px;
    border-radius: 7px;
  }
`;
