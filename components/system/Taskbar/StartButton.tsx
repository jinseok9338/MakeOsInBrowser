import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProcessConsumer } from 'contexts/process';
import StyledStartButton from 'styles/components/system/StyledStartButton';

const StartButton = (): JSX.Element => (
  <ProcessConsumer>
    {({ close, open }) => (
      <StyledStartButton
        title="start"
        onClick={() => open('HelloWorld')}
        onDoubleClick={() => close('HelloWorld')}
      >
        <FontAwesomeIcon icon={faWindows} />
      </StyledStartButton>
    )}
  </ProcessConsumer>
);

export default StartButton;
