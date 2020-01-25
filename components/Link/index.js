import styled from "styled-components";

import { Link as NextRoutesLink } from "../../routes";

const AppLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  z-index: 1;
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    border-bottom: 5px solid yellow;
    z-index: -1;
    transition: border-width 0.15s;
  }
  :hover {
    :after {
      border-bottom: 16px solid yellow;
    }
  }
  :visited {
    color: black;
  }
`;
const LinkSpan = styled.span`
  position: absolute;
  z-index: 10;
`;
export const Link = props => {
  return (
    <NextRoutesLink passHref {...props}>
      <AppLink>{props.children}</AppLink>
    </NextRoutesLink>
  );
};