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

export const ListCart = styled.table`
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

  thead {
    width: 800px;
    color: #999;
    text-align: left;
  }

  th {
    margin-bottom: 10px;
  }

  tr {
    width: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid #eee;

    transition: 0.2s all;

    &:hover {
      background: #dddddd;
    }
  }

  td {
    padding: 12px;
    max-width: 20%;
  }

  img {
    width: 140px;
    border-radius: 10px;
  }

  button {
    background: transparent;
    border: none;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
    color: #999;
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
