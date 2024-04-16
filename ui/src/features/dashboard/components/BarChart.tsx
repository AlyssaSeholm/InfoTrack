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
import CompletedThemes from '../../theme/themeColors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarChart() {
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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Store 1',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: CompletedThemes[currentTheme]?.primary
      },
      {
        label: 'Store 2',
        data: labels.map(() => { return Math.random() * 1000 + 500 }),
        backgroundColor: CompletedThemes[currentTheme]?.secondary
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