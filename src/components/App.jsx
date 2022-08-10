import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Box } from 'common/Box';
import Section from 'components/Section';

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
          <Section
            title="Please leave feedback"
            options={this.state}
            onLeaveFeedback={this.handleState}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Box>
      </>
    );
  }
}
