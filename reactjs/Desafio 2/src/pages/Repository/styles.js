import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    margin-left: 1.6rem;
    animation: spin 1.5s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 2rem;
  }

  h1 {
    font-size: 2.4rem;
    margin-top: 2rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: #595959;
    line-height: 1.4;
    text-align: center;
    max-width: 40rem;
  }
  a {
    color: #7159c1;
    font-size: 1.6rem;
    text-decoration: none;
  }
`;

export const IssuesList = styled.ul`
  list-style: none;
  padding: 3rem;
  margin-top: 3rem;

  border-top: 1px solid #eee;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid #eee;
    padding: 1.6rem;
    border-radius:.8rem;

      margin-top: 1.6rem;
    }

    img {
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      margin-right: 1.6rem;
    }

    div {
      flex: 1;

      strong {
        font-size: 1.6rem;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background:#eee;
          color:#333;
          border-radius:.2rem;
          font-size:1.2rem;
          font-weight:600;
          height:2.0rem;
          padding:.3rem .4rem;
          margin-left:1.0rem
        }
      }
      p {
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: #999;
      }
    }
  }
`;

export const PageAction = styled.div`
  padding: 1.6rem 3rem;
  display: flex;

  align-items: center;

  justify-content: space-between;

  button {
    color: #fff;
    background: #7159c1;
    border: 0;
    border-radius: 0.8rem;
    padding: 0.8rem;
    cursor: pointer;

    &:hover {
      background: #5130ba;
    }

    &[disabled] {
      opacity: 0.1;
      cursor: not-allowed;
      background: #7159c1;
    }
  }
`;

export const IssuesFilter = styled.div`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 3rem;
  margin-top: 1.6rem;

  font-size: 1.2rem;

  font-weight: bold;

  button {
    cursor: pointer;
    border: 0;
    background: #fff;
    &[disabled] {
      border-bottom: 2px solid #7159c1;

      cursor: not-allowed;
    }
  }
`;
