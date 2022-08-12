import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import { TextStat, ValueStat } from './Statistics.styled';
import { ucFirst } from 'utilities';

export default function Statistics({ options, total, positivePercentage }) {
  const stateKeys = Object.keys(options);
  return (
    <div>
      {total ? (
        <>
          {stateKeys.map(state => (
            <TextStat key={state}>
              {ucFirst(state)}:<ValueStat>{options[state]}</ValueStat>
            </TextStat>
          ))}
          <TextStat>
            Total:<ValueStat>{total}</ValueStat>
          </TextStat>
          <TextStat>
            Positive feedback:
            <ValueStat>{positivePercentage}%</ValueStat>
          </TextStat>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
