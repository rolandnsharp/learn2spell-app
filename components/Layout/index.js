import styled from "styled-components";
// import Menu from "../../components/Menu";
// import { Body } from "../../components/Text";
import { Link } from "../../routes";
const Header = styled.div`
  background: grey;
  display: flex;
  height: 50px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
`;

const Logo = styled.a`
  background: black;
  flex: 0 0 auto;
  line-height: 50px;
  display: block;
  font-weight: bold;
  padding: 0 20px;
  text-decoration: none;
  border-right: 10px solid yellow;
  color: white;
  font-family: Times New Roman;
  letter-spacing: 1px;
  font-weight: 600;
  :visited {
    color: white;
  }
  :active {
    color: white;
  }
  :hover {
    color: yellow;
  }
`;

const ContentContainer = styled.div`
  min-height: 100%;
  background: yellow;
`;

// const Content = styled.div`
//   height: 100%;
//   background: red;
// `;

// const Footer = styled.div`
//   flex-shrink: 0;
//   background: ${({ theme }) => theme.color.grey.toString()};
//   color: ${({ theme }) => theme.color.grey.darken(0.5).toString()};
//   height: 30px;
//   line-height: 30px;
//   display: flex;
//   justify-content: space-between;
// `;

// const FooterLinks = styled.div`
//   display: flex;
// `;
export default ({ children, auth, user }) => {
  if (auth === null) {
  }
  
  return (
    <div>
      <Header>
        {/* <Link href="/" passHref> */}
          <p>learn2spell </p>
          {/* <Logo>learn2spell </Logo> */}
        {/* </Link> */}

        {/* <Menu auth={auth} user={user} /> */}
      
      </Header>
      <ContentContainer>
        {children}
        
      </ContentContainer>
    </div>
  );
};  