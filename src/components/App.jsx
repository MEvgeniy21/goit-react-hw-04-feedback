import { useState } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Box } from 'common/Box';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

const REVIEWS_INITIAL = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export function App() {
  const [review, setReview] = useState(REVIEWS_INITIAL);

  const handleState = reviewKey => {
    setReview(prevState => ({
      ...prevState,
      [reviewKey]: prevState[reviewKey] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const reviewsValue = Object.values(review);
    return reviewsValue.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((review.good * 100) / total);
  };

  return (
    <>
      <GlobalStyle />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        mt={5}
      >
        <Box display="flex" alignItems="start" flexDirection="column">
          <Section title="Please leave feedback">
            <FeedbackOptions options={review} onLeaveFeedback={handleState} />
          </Section>
          <Section title="Statistics">
            <Statistics
              options={review}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        </Box>
      </Box>
    </>
  );
}
