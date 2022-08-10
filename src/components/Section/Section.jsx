import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import PropTypes from 'prop-types';
import { Title, FeedbackSection } from './Section.styled';

export default function Section({
  title,
  options,
  onLeaveFeedback,
  total,
  positivePercentage,
}) {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        options={options}
        total={total}
        positivePercentage={positivePercentage}
      />
    </FeedbackSection>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
