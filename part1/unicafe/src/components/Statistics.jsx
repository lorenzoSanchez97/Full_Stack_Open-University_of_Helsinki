import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad, totalFeedbacks, average, positive }) => {
    return (
        <>
            <h1>Statistics</h1>
            {totalFeedbacks === 0 ? <p>No feedback given</p>
                :
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={totalFeedbacks} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            }
        </>
    );
};

export default Statistics;