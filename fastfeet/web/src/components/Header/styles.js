import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-width: 1000px;
  background: var(--color-bcg-form);
`;

export const HeaderWrapper = styled.header`
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 135px;
    height: 26px;
    margin-right: 30px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
  }

  ul {
    border-left: 1px solid var(--color-border-input);
    padding-left: 30px;
    display: flex;
  }

  .active {
    li {
      color: var(--color-text);
    }
  }

  li {
    padding: 5px;
    font-size: 15px;
    color: var(--color-placeholder);
    font-weight: bold;
  }

  div {
    display: flex;
    font-size: 14px;
    flex-direction: column;

    align-items: center;

    button {
      border: 0;
      background: none;
      color: var(--color-exit-alert);
    }
  }
`;
