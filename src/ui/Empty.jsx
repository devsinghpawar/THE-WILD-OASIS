import styled from "styled-components";

const ParaGroup = styled.p`
  display: flex;
  padding: 5rem;
  font-size: 25px;
`;

function Empty({ resourceName }) {
  return <ParaGroup>No {resourceName} could be found.</ParaGroup>;
}

export default Empty;
