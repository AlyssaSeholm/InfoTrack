// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// // import 'chart.js/auto';
// import Chart from 'chart.js';

// interface ChartData {
//     labels: string[];
//     income: number[];
//     expenses: number[];
// }

// interface DateData {
//     [key: string]: {
//         total: number;
//         upDown: number;
//         data: ChartData;
//     };
// }

// const options = [
//     { label: 'Today', value: 'today' },
//     { label: 'Last 7 Days', value: '7days' },
//     { label: 'Last 30 Days', value: '30days' },
//     { label: 'Last 6 Months', value: '6months' },
//     { label: 'This Year', value: 'year' },
// ];

// const LineChartComponent: React.FC = () => {
//     const [selectedOption, setSelectedOption] = useState(0);
//     const [chartData, setChartData] = useState<DateData | null>(null);
//     const [date, setDate] = useState('today');

//     useEffect(() => {
//         const fetchChartData = async () => {
//             const response = await fetch('https://cdn.jsdelivr.net/gh/swindon/fake-api@master/tailwindAlpineJsChartJsEx1.json');
//             const data = await response.json();
//             setChartData(data.dates);
//         };
//         fetchChartData();
//     }, []);

//     const handleOptionChange = (index: number) => {
//         setSelectedOption(index);
//         setDate(options[index].value);
//     };

//     const data = {
//         type: 'line',
//         labels: chartData ? chartData[date].data.labels : [],
//         datasets: [
//             {
//                 label: 'Income',
//                 backgroundColor: 'rgba(102, 126, 234, 0.25)',
//                 borderColor: 'rgba(102, 126, 234, 1)',
//                 pointBackgroundColor: 'rgba(102, 126, 234, 1)',
//                 data: chartData ? chartData[date].data.income : [],
//             },
//             {
//                 label: 'Expenses',
//                 backgroundColor: 'rgba(237, 100, 166, 0.25)',
//                 borderColor: 'rgba(237, 100, 166, 1)',
//                 pointBackgroundColor: 'rgba(237, 100, 166, 1)',
//                 data: chartData ? chartData[date].data.expenses : [],
//             },
//         ],
//         layout: {
//             padding: {
//                 right: 10
//             }
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     gridLines: {
//                         display: false
//                     },
//                     // ticks: {
//                     //     callback: function(value,index,array) {
//                     //         return value > 1000 ? ((value < 1000000) ? value/1000 + 'K' : value/1000000 + 'M') : value;
//                     //     }
//                     // }
//                 }]
//             }
//         }
//     };

//     let chartData = function(){
//       return {
//           date: 'today',
//           options: [> res.json())
//                   .then((res: { dates: any; }) => {
//                       data = res.dates;
//                       renderChart();
//                   })
//           }
//         };
//           renderChart: function(){
//               let c = false;
  
//               Chart.helpers.each(Chart.instances, function(instance) {
//                   if (instance.chart.canvas.id == 'chart') {
//                       c = instance;
//                   }
//               });
  
//               if(c) {
//                   c.destroy();
//               }
  
//               let ctx = document.getElementById('chart').getContext('2d');
  
//               let chart = new Chart(ctx, {
//                   type: "line",
//                   data: {
//                       labels: data[date].data.labels,
//                       datasets: [
//                           {
//                               label: "Income",
//                               backgroundColor: "rgba(102, 126, 234, 0.25)",
//                               borderColor: "rgba(102, 126, 234, 1)",
//                               pointBackgroundColor: "rgba(102, 126, 234, 1)",
//                               data: data[date].data.income,
//                           },
//                           {
//                               label: "Expenses",
//                               backgroundColor: "rgba(237, 100, 166, 0.25)",
//                               borderColor: "rgba(237, 100, 166, 1)",
//                               pointBackgroundColor: "rgba(237, 100, 166, 1)",
//                               data: data[date].data.expenses,
//                           },
//                       ],
//                   },
//                   layout: {
//                       padding: {
//                           right: 10
//                       }
//                   },
//                   options: {
//                     scales: {
//                         yAxes: [{
//                             gridLines: {
//                                 display: false
//                             },
//                             // ticks: {
//                             //     callback: function(value,index,array) {
//                             //         return value > 1000 ? ((value < 1000000) ? value/1000 + 'K' : value/1000000 + 'M') : value;
//                             //     }
//                             // }
//                         }]
//                     }
//                 }}
       
//      }
          
        

//     return (
//         <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//             <div className="bg-gray-800 text-gray-500 rounded shadow-xl py-5 px-5 w-full lg:w-1/2">
//                 <div className="flex flex-wrap items-end">
//                     <div className="flex-1">
//                         <h3 className="text-lg font-semibold leading-tight">Income</h3>
//                     </div>
//                     <div>
//                         {options.map((option, index) => (
//                             <button key={index} onClick={() => handleOptionChange(index)} className={`text-xs hover:text-gray-300 h-6 focus:outline-none ${index === selectedOption ? 'text-white' : ''}`}>
//                                 {option.label}
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//                 <Line data={data} />
//             </div>
//         </div>
//     );
// };

// export default LineChartComponent;


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

function LineChart(){

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'MAU',
      data: labels.map(() => { return Math.random() * 100 + 500 }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
  

    return(
      <TitleCard title={"Montly Active Users (in k)"} >
          <Line data={data} options={options}/>
      </TitleCard>
    )
}


export default LineChart