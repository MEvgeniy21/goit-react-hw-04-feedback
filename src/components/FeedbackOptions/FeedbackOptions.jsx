import PropTypes from 'prop-types';
import { Box } from 'common/Box';

export default function FeedbackOptions({ onGood, onNeutral, onBad }) {
  return (
    <Box pb={5} display="flex" alignItems="center" gridGap={3} ml={3}>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
    </Box>
  );
}

FeedbackOptions.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};
