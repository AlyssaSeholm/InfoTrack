import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import ShareIcon from '@heroicons/react/24/outline/ShareIcon'
import EnvelopeIcon from '@heroicons/react/24/outline/EnvelopeIcon'
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon'
import PlusIcon from '@heroicons/react/24/outline/PlusIcon'
import NewQueryModal from "../../queries/components/NewQueryModal"
import React from "react"
import DelayedTooltip from "../../../components/common/delayedTooltip/DelayedTooltip"

function DashboardTopBar({ }: {}) {

    const [newQueryDialogOpen, setNewQueryDialogOpen] = React.useState(false);
    const handleOpen = () => setNewQueryDialogOpen(!newQueryDialogOpen);

    return (
        <div id='cats' className="grid grid-cols-1 gap-4">

            <NewQueryModal isOpen={newQueryDialogOpen} toggleIsOpen={() => setNewQueryDialogOpen(!newQueryDialogOpen)} />
            <div className="text-right flex">
                <div className='flex flex-1 opacity-50'>
                    <DelayedTooltip content="Coming Soon! Ability to share, email, and download!" placement='bottom'>
                        <div className='join flex flex-1 border-base-100'>
                            <button className="btn btn-outline btn-xs join-item flex items-center pt-1"> <ArrowPathIcon className="w-4 mr-2" />Sync Data</button>
                            <button className="btn btn-outline btn-xs join-item flex items-center pt-1"> <ShareIcon className="w-4" />Share</button>
                            <button className="btn btn-outline btn-xs join-item flex items-center pt-1" ><EnvelopeIcon className="w-4" />Email</button>
                            <button className="btn btn-outline btn-xs join-item flex items-center pt-1" ><ArrowDownTrayIcon className="w-4" />Download</button>
                        </div>
                    </DelayedTooltip>
                </div>

                <div className='flex flex-1 justify-end'>
                    <DelayedTooltip content="Add a query and start searching!" placement='bottom'>
                        <button className="btn btn-primary btn-sm flex items-center pt-2" onClick={handleOpen}>
                            <PlusIcon className="w-4 mr-2" /> Add Query
                        </button>
                    </DelayedTooltip>
                </div>
            </div>
        </div>
    )
}

export default DashboardTopBar