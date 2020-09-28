import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: ${(props) => (props.show ? 'block' : 'none')};
  width: 100%;
  min-width: 1000px;
  height: 100vh;
  color: black;
`;
export const Content = styled.div`
  position: relative;
  background: var(--color-bcg-form);

  top: 100px;
  left: calc(50% - 250px);

  width: 450px;
  height: 353px;

  padding: 20px;

  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;

  h5 {
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0px;
  }
  strong {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-text-light);
  }

  span {
    color: var(--color-text-light);
    padding: 2px 0px;
    display: block;
    font-size: 16px;
  }
`;

export const DeliveryInfo = styled.section`
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border-input);
`;
