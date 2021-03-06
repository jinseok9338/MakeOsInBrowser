import styled from 'styled-components';

const StyledWindow = styled.section`
  background-color: ${({ theme }) => theme.colors.window};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 50px;
  position: absolute;
  text-align: center;
`;

export default StyledWindow;
