import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
