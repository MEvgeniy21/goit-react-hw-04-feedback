import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import PropTypes from 'prop-types';
import { Title, FeedbackSection } from './Section.styled';

export default function Section({
  title,
  state: { good, neutral, bad },
  onGood,
  onNeutral,
  onBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      <FeedbackOptions onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
      />
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
