import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Content = styled.section`
  width: 100%;
  height: auto;
  max-width: 1000px;
  padding-top: 110px;
  margin: 0 auto;
`;

export const ListCart = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 10px;
  position: relative;
  padding: 2rem;
  margin: 0 auto;
  color: #000000;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    width: 100%;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1rem;
    color: #999;
  }
`;

export const ListContent = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    width: 100%;
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    font-weight: bold;
    font-size: 1rem;
    color: #999;
    border-radius: 10px;

    transition: 0.2s all;

    &:hover {
      background: #dddddd;
    }
  }

  ul li img {
    width: 140px;
    border-radius: 10px;
  }

  ul li .amount {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      margin: 0 10px;
      font-size: 1.5rem;
    }

    .amount-icon {
      color: var(--primary-color);
      font-size: 1.5rem;
    }
  }

  ul li button {
    background: transparent;
    border: none;
  }

  ul li .icon {
    font-size: 2rem;
    cursor: pointer;
    color: var(--primary-color);
  }
`;

export const Checkout = styled.div`
  width: 100%;
  max-width: 850px;
  height: 100px;
  position: relative;

  padding: 0 2rem;

  color: #000000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }

  div {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  > div button {
    margin-right: 15px;
  }

  button .iconTrash {
    margin-right: 10px;
  }

  button {
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
    font-weight: bold;

    transition: all 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;
