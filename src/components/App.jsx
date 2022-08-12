import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Box } from 'common/Box';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleState = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const stateValue = Object.values(this.state);
    return stateValue.reduce((acc, num) => acc + num, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  render() {
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
              <FeedbackOptions
                options={this.state}
                onLeaveFeedback={this.handleState}
              />
            </Section>
            <Section title="Statistics">
              <Statistics
                options={this.state}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          </Box>
        </Box>
      </>
    );
  }
}
