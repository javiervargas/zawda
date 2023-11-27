import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the necessary plugins and components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function createGradient(ctx, chartArea) {
    const gradient = ctx.createLinearGradient(0, 0, 0, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');  // Start color
    gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');   // End color (transparent)
    return gradient;
  }
  
  
  
export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'BTC/USD Percentage Change Over 5 Years',
      },
    },
    scales: {
      x: {  // For the x-axis
        grid: {
          display: false  // Hide grid lines
        }
      },
      y: {  // For the y-axis
        grid: {
          display: false  // Hide grid lines
        }
      }
    }
  };
  
export function Calc() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1825&interval=daily');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const dates = data && data.prices ? data.prices.map(item => new Date(item[0]).toLocaleDateString()) : [];
        const prices = data && data.prices ? data.prices.map(item => item[1]) : [];

        // Calculate percentage changes
        const referencePrice = prices[0];
        const percentageChanges = prices.map(price => ((price - referencePrice) / referencePrice) * 100);

        setChartData({
            labels: dates,
            datasets: [
              {
                label: 'BTC/USD Percentage Change',
                data: percentageChanges,
                borderColor: '#F7931A',
                fill: true,
                // backgroundColor will be set by the gradient function
              },
            ],
          });
          
          
          
          
          
      } catch (error) {
        console.error("There was a problem fetching the BTC/USD data:", error);
      }
    }

    fetchData();
  }, []);

  return chartData.labels.length > 0 ? <Line 
  options={options} 
  data={chartData} 
  onElementsComplete={chart => {
    const ctx = chart.ctx;
    const gradient = createGradient(ctx, chart.chartArea);
    
    const dataset = chart.data.datasets[0];
    dataset.backgroundColor = gradient;
    chart.update();
  }}
/>




 : <p>Loading...</p>;
}

export default Calc;
