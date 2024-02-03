import React,{ Component } from "react";
import { Statistics } from "./Feedback/Statistics/Statistics"; 
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions"; 
import { Section } from "./Feedback/Section/Section"; 
import { Notification } from "./Feedback/Notification/Notification"; 

class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }

  handleFeedback = (type) => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1
      }
    }))
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state.feedback;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  }

 render() {

  const { good, neutral, bad } = this.state.feedback;
  const options = Object.keys(this.state.feedback);
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={options}
          handleFeedback={this.handleFeedback}
        />
      </Section>
      
      <Section title="Statistics">
        {totalFeedback > 0 ? (<Statistics 
          bad={bad}
          good={good}
          neutral={neutral}
          total={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
        />) : (<Notification message="There is no feedback"/>)}
      </Section>
    </div>
  )
 }
};

export default App;