import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const GitHubStarsChart = () => {
    const [starsOverTime, setStarsOverTime] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/flutter/flutter');
                const starEvents = response.data;
                const starsByYear = {};

                starEvents.forEach(event => {
                    const starYear = event.starred_at.slice(0, 4);
                    starsByYear[starYear] = (starsByYear[starYear] || 0) + 1;
                });

                setStarsOverTime(starsByYear);
            } catch (error) {
                console.error('Failed to fetch GitHub star events:', error);
            }
        };

        fetchData();
    }, []);

    const years = Object.keys(starsOverTime);
    const stars = Object.values(starsOverTime);

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Stars Over Time',
                data: stars,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };

    return (
        <div>
            <h2>GitHub Stars Over Time for Flutter Repository</h2>
            <Line data={data} />
        </div>
    );
};

export default GitHubStarsChart;
