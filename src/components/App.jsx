import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.error('opps');
    }
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / (good + neutral + bad)) * 100
  );
  const feedbackOptions = {
    good,
    neutral,
    bad,
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          handleFeedback={handleLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            options={feedbackOptions}
            totalFeedback={countTotalFeedback}
            positiveFeedback={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </>
  );
}

// import { Component } from 'react';
// import Section from './Section/Section';
// import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = option => {
//     setState(prevState => {
//       return {
//         [option]: prevState[option] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     const { good, neutral, bad } = state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = state;
//     let formatedNumber = Math.round((good / (good + neutral + bad)) * 100);
//     return formatedNumber;
//   }

//   render() {
//     const totalFeedback = countTotalFeedback();
//     const positiveFeedback = countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={state}
//             handleFeedback={handleLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {totalFeedback === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               options={state}
//               totalFeedback={totalFeedback}
//               positiveFeedback={positiveFeedback}
//             ></Statistics>
//           )}
//         </Section>
//       </>
//     );
//   }
// }
