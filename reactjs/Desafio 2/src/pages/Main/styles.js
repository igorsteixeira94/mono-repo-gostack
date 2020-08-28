import styled, { keyframes } from 'styled-components';

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
  disabled: !!props.loading,
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

export const List = styled.ul`
  list-style: none;
  font-size: 1.4rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.6rem;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      text-decoration: none;
      color: #7159c1;
      font-weight: bold;
    }
  }
`;
