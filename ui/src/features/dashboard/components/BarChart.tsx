import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import TitleCard from '../../../components/Cards/TitleCard';
import { useState } from 'react';
import CompletedThemes from '../../theme/themeColors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart(){
      const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            color: CompletedThemes["dark"]?.primary
          }
        },
      };
      
      // const darkModeAccentColors = { primary: "#7480ff", secondary: "#00c7b2", accent: "#ff52d9" }; //, "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40"}
      // const lightModeColors = { primary: "#80cbc4", secondary: "#ff52d9", accent: "#00c7b2", background: "#f9f9f9"}
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];      

      const data = {
        labels,
        datasets: [
          {
            label: 'Store 1',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: CompletedThemes[currentTheme]?.primary //currentTheme === "dark" ? darkModeAccentColors.secondary : lightModeColors.primary,
            // backgroundColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: 'Store 2',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: CompletedThemes[currentTheme]?.secondary //currentTheme === "dark" ? darkModeAccentColors.primary : lightModeColors.secondary,
            // backgroundColor: 'rgba(53, 162, 235, 1)',
          },
        ],
      };

    return (
      <TitleCard title={"Revenue"}>
        <Bar options={{ ...options, plugins: { legend: { position: "top" } } }} data={data} />
      </TitleCard>
    )
}


export default BarChart