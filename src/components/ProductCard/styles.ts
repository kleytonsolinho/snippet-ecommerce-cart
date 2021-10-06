import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 10px;
  }

  strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 1rem;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 5px 0;
  }

  p {
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 20px;
  }

  button {
    width: 100%;
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

  button .icon {
    margin-right: 10px;
  }
`;
