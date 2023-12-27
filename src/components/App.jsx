import css from './App.module.css';
import { FeedbackOptions } from './FeedbackOptions /FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './SectionTitle/SectionTitle';
import { Notification } from './NotificationMessage/NotificationMessage';

import {useState} from 'react'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const countTotalFeedback = () => {
        return good + neutral + bad;
      };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
    
  };
 const onBtnClicked = option =>
     { switch (option){
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
        case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
        case 'bad':
        setBad(prevBad => prevBad+ 1);
        break;
        default:
          return;
     }
      
    };
  
  const total = countTotalFeedback();
       
    
  return (
          <div className={css.wrapper}>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={onBtnClicked}
              />
            </Section>
            <Section title="Statistics">
              {total ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total }
                  positivePercentage={countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Section>
          </div>
        );
}


