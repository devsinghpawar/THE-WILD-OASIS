import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { styled } from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media screen and (max-width: 821px) {
    display: flex;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;

  @media screen and (max-width: 821px) {
    margin-top: 4rem;
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: "100%";
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (max-width: 821px) {
    max-width: "100%";
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
