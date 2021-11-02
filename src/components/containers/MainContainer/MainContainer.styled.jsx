import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: block;

  max-width: 400px;
  min-width: 290px;

  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;

  border: 1px solid black;
  border-radius: 5px;

  box-shadow: 3px 2px 10px 2px black;
  background: rgb(217 196 196);

  @media screen and (max-width: 500px) {
    margin-top: 0px;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
