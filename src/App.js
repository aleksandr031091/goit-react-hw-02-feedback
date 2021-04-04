import { Component } from "react";
import scss from "./components/App/App.module.scss";

import Section from "./components/Section";

import Statistic from "./components/Statistic";

import FeedbackOptions from "./components/FeedbackOptions";

import Message from "./components/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const { name } = event.target;
    this.setState((state) => ({ [name]: state[name] + 1 }));
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPercentPositivFeedback = () => {
    const total = this.countTotal();
    const { good } = this.state;
    const percent = (good * 100) / total;
    return Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotal();
    const positivFeedback = this.countPercentPositivFeedback();
    const objkey = Object.keys(this.state);

    return (
      <div className={scss.container}>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions
          options={objkey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Section title="Statistics">
          {total === 0 ? (
            <Message message="No feedback given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivFeedback={positivFeedback}
            />
          )}
        </Section>
      </div>
    );
  }
}
