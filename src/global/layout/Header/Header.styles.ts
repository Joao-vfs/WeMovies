import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 960px;

  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.sm};
`;

export const ShoppingCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
