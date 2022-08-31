import PropTypes from 'prop-types';
import { Box } from 'common/Box';
import { ucFirst } from 'utilities';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const stateKeys = Object.keys(options);
  return (
    <Box pb={5} display="flex" alignItems="center" gridGap={3} ml={3}>
      {stateKeys.map(state => (
        <button onClick={() => onLeaveFeedback(state)} key={state}>
          {ucFirst(state)}
        </button>
      ))}
    </Box>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
