import { styled } from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 821px) {
    position: fixed;
    top: 0;
    right: "1%";
    width: 100%;
    height: 10%;
    z-index: 1;
    transition: left 0.3s ease-in-out;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
