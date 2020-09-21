import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

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
  top: 30px;
  left: calc(50% - 75px);
  width: 150px;
  height: 90px;
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
`;
