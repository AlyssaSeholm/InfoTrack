import SelectBox from "../../../components/Input/SelectBox"
import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon'
import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import { useState } from "react"
import { RootState } from "../../../app/store"
import { useDispatch, useSelector } from "react-redux"
import { fetch_Company_ById } from "../../company/companySlice"
import NewQueryModal from "../../queries/components/NewQueryModal"
import { Button, Card, CardBody, CardFooter, Checkbox, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Typography } from "@material-tailwind/react"
import React from "react"
// import CustomDialogHeader from "../../common/components/utilities/modal/CustomDialogHeader"


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
    const companyId: string = "2";
    const handleDatePickerValueChange = (newValue: any) => {
        console.log("datePickerNewValue:", newValue);
        setDateValue(newValue);
        updateDashboardPeriod(newValue)
    }

    const updateSelectBoxValue = (value: any) => {
        console.log("selectBoxNewValue:", value);
    }

    const handleGetCompany = () => {
        dispatch(fetch_Company_ById(companyId) as any);
    }
    const dispatch = useDispatch();

    //#endregion Company Testing end
    const testCall = () => {
        dispatch(fetch_Company_ById(companyId) as any);
    }
 
    const [newQueryDialogOpen, setNewQueryDialogOpen] = React.useState(false);
    const handleOpen = () => setNewQueryDialogOpen(!newQueryDialogOpen);

    // const openNewQueryModal = () => {
    //     return (
    // //         <>
    // //   <Dialog
    // //     size="xs"
    // //     open={newQueryDialogOpen}
    // //     handler={handleOpen}
    // //     className="bg-transparent shadow-none"
    // //   >
    // //     <Card className="mx-auto w-full max-w-[24rem]">
    // //       <CardBody className="flex flex-col gap-4">
    // //         <Typography variant="h4" color="blue-gray">
    // //           Sign In
    // //         </Typography>
    // //         <Typography
    // //           className="mb-3 font-normal"
    // //           variant="paragraph"
    // //           color="gray"
    // //         >
    // //           Enter your email and password to Sign In.
    // //         </Typography>
    // //         <Typography className="-mb-2" variant="h6">
    // //           Your Email
    // //         </Typography>
    // //         <Input label="Email" size="lg" crossOrigin={undefined} />
    // //         <Typography className="-mb-2" variant="h6">
    // //           Your Password
    // //         </Typography>
    // //         <Input label="Password" size="lg" crossOrigin={undefined} />
    // //         <div className="-ml-2.5 -mt-3">
    // //           <Checkbox label="Remember Me" crossOrigin={undefined} />
    // //         </div>
    // //       </CardBody>
    // //       <CardFooter className="pt-0">
    // //         <Button variant="gradient" onClick={handleOpen} fullWidth>
    // //           Sign In
    // //         </Button>
    // //         <Typography variant="small" className="mt-4 flex justify-center">
    // //           Don&apos;t have an account?
    // //           <Typography
    // //             as="a"
    // //             href="#signup"
    // //             variant="small"
    // //             color="blue-gray"
    // //             className="ml-1 font-bold"
    // //             onClick={handleOpen}
    // //           >
    // //             Sign up
    // //           </Typography>
    // //         </Typography>
    // //       </CardFooter>
    // //     </Card>
    // //   </Dialog>
    // // </>
    //         // <>
    //         // <Dialog
    //         //     size={"xs"}
    //         //     open={newQueryDialogOpen}
    //         //     handler={handleOpen}
    //         //     animate={{
    //         //         mount: { scale: 1, y: -100 },
    //         //         unmount: { scale: 0.2, y: -300 },
    //         //     }}
    //         //     >
    //         //     <DialogHeader  >
    //         //         <p>Its a simple dialog.</p>
    //         //     </DialogHeader>
    //         //     <DialogBody>
    //         //         <div>
    //         //             The key to more success is to have a lot of pillows. Put it this way,
    //         //             it took me twenty five years to get these plants, twenty five years of
    //         //             blood sweat and tears, and I&apos;m never giving up, I&apos;m just
    //         //             getting started. I&apos;m up to something. Fan luv.
    //         //         </div>
    //         //     </DialogBody>
    //         //     <DialogFooter>
    //         //     <Button   
    //         //         variant="text"
    //         //         color="red"
    //         //         onClick={handleOpen}
    //         //         className="mr-1"             
    //         //     >
    //         //         <span>Cancel</span>
    //         //     </Button>
    //         //     <Button variant="gradient" color="green" onClick={handleOpen}  >
    //         //         <span>Confirm</span>
    //         //     </Button>
    //         //     </DialogFooter>
    //         // </Dialog>
    //         // </>
    //     )
    // }

    return (
        <div id='cats' className="grid grid-cols-1 gap-4">
            <div className="text-right ">
                <NewQueryModal isOpen={newQueryDialogOpen} toggleIsOpen={() => setNewQueryDialogOpen(!newQueryDialogOpen)} />
                {/* {openNewQueryModal()} */}
                {/* <button className="btn btn-ghost btn-primary btn-sm normal-case"
                    onClick={() => (document?.getElementById('new_query_modal') as HTMLDialogElement)?.showModal()}>
                    <PlusIcon className="w-4 mr-2" /> Add New Query </button> */}
                <button className="btn btn-ghost btn-primary btn-sm normal-case"
                onClick={handleOpen}>
                <PlusIcon className="w-4 mr-2" /> Add Query </button>
                    
                <button className="btn btn-ghost btn-sm normal-case" onClick={testCall}>
                    <ArrowPathIcon className="w-4 mr-2" />Refresh All Data</button>
                <button className="btn btn-ghost btn-sm normal-case  ml-2">
                    <ShareIcon className="w-4 mr-2" />Share</button>

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