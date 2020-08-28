import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  max-width: 70rem;
  background: #fff;
  margin: 8rem auto;

  border-radius: 0.8rem;
  padding: 1.5rem 1rem;

  h1 {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      margin-right: 1rem;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  margin: 2.4rem 0;
  input {
    flex: 1;

    height: 4.8rem;
    padding: 0 1.6rem;
    border: 1px solid #eee;
    border-radius: 0.8rem;
    margin-right: 1rem;

    color: #454545;
  }
`;

const rotate = keyframes`
  from{
    transform:rotate(0deg)
  }

  to{
    transform:rotate(360deg)
  })
`;

export const ButtonSubmit = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  border: 0;
  border-radius: 0.8rem;
  background: #7159c1;
  width: 5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s infinite;
    }
  }
`;
