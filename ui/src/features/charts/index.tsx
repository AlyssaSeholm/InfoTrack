import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart'
import PieChart from './components/PieChart'
import ScatterChart from './components/ScatterChart'
import StackBarChart from './components/StackBarChart'
import Datepicker from "react-tailwindcss-datepicker"; 
import { SetStateAction, useState } from 'react'




function Charts(){

    const [dateValue, setDateValue] = useState({ 
        startDate: new Date(), 
        endDate: new Date() 
    }); 
    
    const handleDatePickerValueChange = (newValue: SetStateAction<{ startDate: Date; endDate: Date }>) => {
        console.log("newValue:", newValue); 
        setDateValue(newValue); 
    } 

    return(
        <>
        <Datepicker 
            containerClassName="w-72" 
            value={dateValue} 
            inputClassName="input input-bordered w-72" 
            popoverDirection={"down"}
            toggleClassName="invisible"
            onChange={(value) => handleDatePickerValueChange(value as SetStateAction<{ startDate: Date; endDate: Date }>)} 
            showShortcuts={true} 
        /> 

        {/** ---------- Demo of Different charts with dummy data ----------- */}
            <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
                <StackBarChart />
                <BarChart />
            </div>
        
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <DoughnutChart />
                <PieChart />
            </div>

            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <ScatterChart />
                <LineChart />
            </div>
        </>
    )
}

export default Charts