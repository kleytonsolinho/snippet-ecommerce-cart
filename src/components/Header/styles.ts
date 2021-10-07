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
  height: 330px;
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

  .listCart {
    width: 100%;
    height: 220px;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .listCart::-webkit-scrollbar {
    width: 5px;
  }
  .listCart::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 2px;
  }
  .listCart::-webkit-scrollbar-track {
    background: transparent;
  }

  .btns {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 10px;
  }

  .btns button {
    background: var(--primary-color);
    color: #fff;
    border: none;
    font-weight: bold;
    font-size: 1.1rem;
    border-radius: 5px;
  }

  .btns a button:nth-of-type(1) {
    width: 200px;
    height: 50px;

    &:hover {
      background: green;
    }
  }

  .btns a button .icon {
    margin-right: 10px;
  }

  .btns button:nth-of-type(1) {
    width: 50px;
    height: 50px;
    margin-left: 5px;

    &:hover {
      background: red;
    }
  }

  .itens {
    display: flex;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid #ddd;
    border-radius: 5px;

    &:hover {
      background: #dddddd;
      cursor: pointer;
    }
  }

  .itens li {
    width: 100%;
    margin: 5px 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .itens li img {
    width: 70px;
    border-radius: 7px;
  }
`;
