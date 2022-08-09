import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import { Title } from 'components/Section/Section.styled';
import { TextStat, ValueStat } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  const total = countTotalFeedback();

  return (
    <div>
      <Title>Statistics</Title>
      {total ? (
        <>
          <TextStat>
            Good:<ValueStat>{good}</ValueStat>
          </TextStat>
          <TextStat>
            Neutral:<ValueStat>{neutral}</ValueStat>
          </TextStat>
          <TextStat>
            Bad:<ValueStat>{bad}</ValueStat>
          </TextStat>
          <TextStat>
            Total:<ValueStat>{total}</ValueStat>
          </TextStat>
          <TextStat>
            Positive feedback:
            <ValueStat>{countPositiveFeedbackPercentage()}%</ValueStat>
          </TextStat>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
