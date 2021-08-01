import styled from 'styled-components';

const StyledTaskbarEntries = styled.li`
  background-color: pink;
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  width: ${({ theme }) => theme.sizes.taskbar.entry.maxwidth};
`;

export default StyledTaskbarEntries;
