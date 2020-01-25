import styled from "styled-components";

const TitleText = styled.div`
  letter-spacing: -0.01em;
`;
export const Title = props => {
  const { children } = props;
  return <TitleText {...props}>{children}</TitleText>;
};

const SubTitleText = styled.div`
  font-weight: 600;
`;
export const SubTitle = props => {
  const { children } = props;
  return <SubTitleText {...props}>{children}</SubTitleText>;
};

const BodyText = styled.div`
  letter-spacing: -0.009em;
`;
export const Body = props => {
  const { children } = props;
  return <BodyText {...props}>{children}</BodyText>;
};