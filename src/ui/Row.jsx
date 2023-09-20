import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      @media screen and (max-width: 480px) {
        display: flex;
        flex-direction: column;
        margin-top: 1rem;
      }
      @media (min-width: 481px) and (max-width: 821px) {
        margin-top: 3rem;
      }
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
