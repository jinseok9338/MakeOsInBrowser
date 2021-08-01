import styled from 'styled-components';

const StyledTaskbarEntries = styled.li`
  background-color: pink;
  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
`;

export default StyledTaskbarEntries;
