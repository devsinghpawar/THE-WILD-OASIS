import { useState } from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { HiBars3 } from "react-icons/hi2";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 820px) {
    /* Apply styles for mobile screens here */
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    width: 60%;
    height: 100%;
    z-index: 1;
    transition: left 0.3s ease-in-out;
  }
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;
  position: fixed;

  @media (max-width: 820px) {
    display: block;
    z-index: 2;

    & svg {
      margin-top: 0.1rem;
      width: 4rem;
      height: 3.5rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
    }
  }
`;

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>
        <HiBars3 />
      </HamburgerIcon>

      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav toggleMenu={toggleMenu} />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
