import { useState } from 'react';
import Statistics from './components/Statistics';
import Button from './components/Button';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedbacks = good + neutral + bad;
  const average = totalFeedbacks === 0 ? 0 : (good - bad) / totalFeedbacks;
  const positive = totalFeedbacks === 0 ? 0 : (good / totalFeedbacks) * 100;

  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} totalFeedbacks={totalFeedbacks} average={average} positive={positive} />
    </>
  );
};

export default App;