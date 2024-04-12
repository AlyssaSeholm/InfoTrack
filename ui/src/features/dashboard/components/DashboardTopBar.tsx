import SelectBox from "../../../components/Input/SelectBox"
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon'
import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import { useEffect, useState } from "react"
import Datepicker from "react-tailwindcss-datepicker";
import { getAPI } from "../../../app/API"
import { RootState } from "../../../app/store"
import { useDispatch, useSelector } from "react-redux"
import CompletedThemes from "../../theme/themeColors"
import { Company } from "../../company/types"
import { fetch_Company_ById } from "../../company/companySlice"
import NewQueryModal from "../../queries/components/NewQueryModal"



const periodOptions = [
    { name: "Today", value: "TODAY" },
    { name: "Yesterday", value: "YESTERDAY" },
    { name: "This Week", value: "THIS_WEEK" },
    { name: "Last Week", value: "LAST_WEEK" },
    { name: "This Month", value: "THIS_MONTH" },
    { name: "Last Month", value: "LAST_MONTH" },
]

function DashboardTopBar({ updateDashboardPeriod }: { updateDashboardPeriod: Function }) {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });
    const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);

    //#region Company Testing start


    const { selectedCompany, selectedCompanyId, isCompanyLoading, companyError, companyList } = useSelector((state: RootState) => ({
        selectedCompanyId: state.company.selectedCompanyId,
        selectedCompany: state.company.companies.find(c => c.id === state.company.selectedCompanyId),
        companyList: state.company.companies,
        isCompanyLoading: state.company.isLoading,
        companyError: state.company.error,
    }));

    const companyId: string = "2";
    const handleDatePickerValueChange = (newValue: any) => {
        console.log("datePickerNewValue:", newValue);
        setDateValue(newValue);
        updateDashboardPeriod(newValue)
    }

    const updateSelectBoxValue = (value: any) => {
        console.log("selectBoxNewValue:", value);
        // Add your implementation here
    }

    var displayCompanySliceStatus = () => {
        var firstCompany = companyList[0] ?? null;
        if (isCompanyLoading) return <div>Loading...</div>;
        if (companyError) return <div>Error: {companyError}</div>;
        if (!companyList || companyList.length === 0) return <div>No companies found.</div>;
        if (firstCompany) return <div>Id: {firstCompany.id?.toString()}  NAME: {firstCompany.name} </div>;
        if (!selectedCompany) return <div>Company not found.</div>;
        if (!selectedCompanyId) return <div>CompanyId not set.</div>;
    }

    const handleGetCompany = () => {
        dispatch(fetch_Company_ById(companyId) as any);
        // getAPI("api/Company/ById", "2").then((response) => {
        //     console.log("response", response);
        // });
    }
    const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fetch_Company_ById(companyId) as any);
    // }, [dispatch, companyId]);

    // const handleUpdateCompany = () => {
    //     const updatedCompany: Company = { ...selectedCompany, name };
    //     dispatch(updateCompany(updatedCompany));
    //     // getAPI("api/Company/ById", "2").then((response) => {
    //     //     console.log("response", response);
    //     // });
    // }

    //#endregion Company Testing end
    const testCall = () => {
        dispatch(fetch_Company_ById(companyId) as any);
        // console.log("test call");
        // getAPI("api/Company/ById", "2").then((response) => {
        //     console.log("response", response);
        // });
    }
    // const openNewQueryModal = () => {

    //     return (
    //         <dialog id="my_modal_4" className="modal">
    //             <div className="modal-box w-11/12 max-w-5xl">
    //                 <h3 className="font-bold text-lg">Hello!</h3>

    //                 <form method="dialog">
    //                     <p className="py-4">Click the button below to close</p>
    //                     <div className="modal-action">
    //                         <button className="btn">Close</button>
    //                     </div>
    //                 </form>
    //             </div>
    //         </dialog>
    //     )
    // }

    return (
        <div id='cats' className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
                <Datepicker
                    containerClassName="w-72 "
                    value={dateValue}
                    inputClassName="input input-bordered w-72"
                    popoverDirection={"down"}
                    toggleClassName="invisible"
                    onChange={handleDatePickerValueChange}
                    showShortcuts={true}
                />

                <SelectBox
                    options={periodOptions}
                    labelTitle="Period"
                    placeholder="Select date range"
                    containerStyle={"w-72 bg-" + CompletedThemes[currentTheme]?.neutral}
                    labelStyle="hidden"
                    defaultValue="TODAY"
                    updateFormValue={updateSelectBoxValue}
                    labelDescription={undefined}
                    updateType={undefined} />
            </div>
            <div className="text-right ">
                {displayCompanySliceStatus()}
                {/* {openNewQueryModal()} */}
                <NewQueryModal />
                <button
                    className="btn btn-ghost btn-primary btn-sm normal-case"
                    onClick={() => (document?.getElementById('my_modal_4') as HTMLDialogElement)?.showModal()}>
                    <PlusIcon className="w-4 mr-2" />
                    Add New Query
                </button>
                <button className="btn btn-ghost btn-sm normal-case" onClick={testCall}><ArrowPathIcon className="w-4 mr-2" />{isCompanyLoading ? "Loading.." : "Refresh Data"}</button>
                <button className="btn btn-ghost btn-sm normal-case  ml-2"><ShareIcon className="w-4 mr-2" />Share</button>

                <div className="dropdown dropdown-bottom dropdown-end  ml-2">
                    <label tabIndex={0} className="btn btn-ghost btn-sm normal-case btn-square "><EllipsisVerticalIcon className="w-5" /></label>
                    <ul tabIndex={0} className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a><EnvelopeIcon className="w-4" />Email Digests</a></li>
                        <li><a><ArrowDownTrayIcon className="w-4" />Download</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar