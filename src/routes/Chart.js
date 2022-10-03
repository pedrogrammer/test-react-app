import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import './Chart.css';

const Chart = () => {
    const [matches, setMatches] = useState(
        window.matchMedia('(min-width: 768px)').matches
    );

    useEffect(() => {
        window
            .matchMedia('(min-width: 768px)')
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    const options = {
        chart: {
            type: 'spline',
            width: matches ? null : 345,
        },
        title: {
            text: 'My chart',
        },
        series: [
            {
                data: [1, 2, 1, 4, 3, 6],
            },
        ],
    };

    return (
        <section id="chart-section">
            <div id="chart">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </section>
    );
};

export default Chart;
