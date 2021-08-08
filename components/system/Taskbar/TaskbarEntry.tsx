import StyledTaskbarEntry from 'styles/components/system/StyledTaskbarEntry';

type TaskbarEntryProps = {
  icon: string;
  title: string;
};

const TaskbarEntry = ({
  icon = '/favicon.png',
  title = 'Hello World'
}: TaskbarEntryProps): JSX.Element => (
  <StyledTaskbarEntry>
    <figure>
      <img src={icon} alt={title} />
      <figcaption>{title}</figcaption>
    </figure>
  </StyledTaskbarEntry>
);

export default TaskbarEntry;
