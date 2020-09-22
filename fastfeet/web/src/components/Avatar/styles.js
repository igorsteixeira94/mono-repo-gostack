import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  margin-top: 30px;

  label {
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 2px dashed var(--color-border-input);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
export const ContainerImage = styled.div`
  width: 150px;
  height: 150px;

  align-self: center;

  border: 2px dashed var(--color-border-input);

  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-border-input);

  svg {
    fill: var(--color-border-input);
  }
`;
