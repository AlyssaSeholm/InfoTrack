import AmountStats from './components/AmountStats'
import PageStats from './components/PageStats'

import UserChannels from './components/UserChannels'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import DoughnutChart from './components/DoughnutChart'
import { useEffect, useState } from 'react'
import Loading from '../common/components/Loading'
import { fetchInitialData } from '../../app/dataFetchers'
import { AppDispatch } from '../../app/store'
import Companies from './components/Companies'
import notify, { ToastType } from '../../services/NotificationService'

function Dashboard(){

    const dispatch: AppDispatch = useDispatch();
    const [initialDataFetch, setInitialDataFetch] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setInitialDataFetch(true);
                await dispatch(fetchInitialData());
                setInitialDataFetch(false);
                console.log("Initial data fetched successfully!");
            } catch (error) {                
                notify("There was an issue when retrieving inital data. Try reloading. ", ToastType.ERROR);
                console.error(`Error: ${error}`);
            }
        };

        fetchData();
    }, []);

    // const updateDashboardPeriod = (newRange: { startDate: any; endDate: any }) => {
    //     dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }));
    // };

    const renderDashboard = () => {

        return (
            <>
            <DashboardTopBar />
            {/** ---------------------- Demo stats ------------------------- */}
            
                <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
                    <AmountStats />
                    <PageStats />
                </div>

            {/** ---------------------- SEO Results Accordions ------------------------- */}

                <div className="grid mt-4 grid-cols-1 gap-6">
                    <Companies></Companies>
                </div>
                

            {/** ---------------------- Demo User source channels table  ------------------------- */}
            
                <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                    <UserChannels />
                    <DoughnutChart />
                </div>
            </>
        )
    };

    const isLoading = () : boolean => {
        if (initialDataFetch) { 
            return true;
        }
        return false;
    }

    return(
        <>
            {isLoading() && <Loading />}
            {!isLoading() && renderDashboard()}
        
        </>
    )
}

export default Dashboard