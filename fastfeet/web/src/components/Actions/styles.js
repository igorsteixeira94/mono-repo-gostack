import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 10px 0px;

  button {
    border: 0;
    background: none;
    outline: 0;
  }
`;

export const ActionsList = styled.div`
  padding: 16px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  left: calc(50% - 75px);
  width: 150px;
  box-shadow: 0px 0px 2px #00000026;
  background: #fff;
  border-radius: 6px;
  z-index: 9999;

  &::before {
    content: '▲';
    position: absolute;
    top: -8px;
    left: calc(50% - 5px);
    font-size: 10px;
    text-shadow: 0px -1px 3px #00000057;
    color: #fff;
  }

  /*Editar os children*/
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & + hr {
      margin: 8px 0px;
      border-top: 1px solid var(--color-border-input);
    }

    svg {
      margin-right: 16px;
    }
  }
`;
