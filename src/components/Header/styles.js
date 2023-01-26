import styled from "styled-components";

export const Container = styled.header`
  //dessa maneira mesmo que a página seja rolada p/ cima, o
  //header não irá sair da tela.
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  
  padding: 0 80px;
`;

export const Profile = styled.div `
  display: flex;
  align-items: center;

  // essa > faz com que o react aplique as configs 
  // apenas na img dentro do Profile, e não em outras img.
  > img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;