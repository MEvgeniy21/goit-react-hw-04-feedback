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

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
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
            state={this.state}
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Box>
      </>
    );
  }
}
