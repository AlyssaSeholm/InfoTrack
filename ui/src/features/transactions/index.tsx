import moment from "moment"
import { useEffect, useState } from "react"
import TitleCard from "../../components/Cards/TitleCard"
import DUMMY_DATA from "../../utilities/dummyData"
import FunnelIcon from '@heroicons/react/24/outline/FunnelIcon'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon'
import SearchBar from "../../components/Input/SearchBar"

const TopSideButtons = ({ removeFilter, applyFilter, applySearch }:
    {
        removeFilter: () => void,
        applyFilter: (params: string) => void,
        applySearch: (value: string) => void
    }) => {

    const [filterParam, setFilterParam] = useState("")
    const [searchText, setSearchText] = useState("")
    const locationFilters = ["Paris", "London", "Canada", "Peru", "Tokyo"]

    const showFiltersAndApply = (params: string) => {
        applyFilter(params)
        setFilterParam(params)
    }

    const removeAppliedFilter = () => {
        removeFilter()
        setFilterParam("")
        setSearchText("")
    }

    useEffect(() => {
        if (searchText == "") {
            removeAppliedFilter()
        } else {
            applySearch(searchText)
        }
    }, [searchText])

    return (
        <div className="inline-block float-right">

            <SearchBar searchText={searchText} styleClass="mr-4" setSearchText={setSearchText} placeholderText={""} />

            {/* filterbutton start */}
            {filterParam != "" &&
                <button
                    onClick={() => removeAppliedFilter()}
                    className="btn btn-xs mr-2 btn-active btn-ghost normal-case pt-1"
                >
                    {filterParam}
                    <XMarkIcon className="w-4 ml-2" />
                </button>}
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline">
                    <FunnelIcon className="w-5 mr-2" />Filter
                </label>
                <ul tabIndex={0} className="dropdown-content menu p-2 text-sm shadow bg-base-100 rounded-box w-52 " style={{zIndex: "99"}}>
                    {
                        locationFilters.map((l, k) => {
                            return <li key={k}><a onClick={() => showFiltersAndApply(l)}>{l}</a></li>
                        })
                    }
                    <div className="divider mt-0 mb-0"></div>
                    <li><a onClick={() => removeAppliedFilter()}>Remove Filter</a></li>
                </ul>
            </div>
            {/* filterbutton end */}
        </div>
    )
}


function Transactions() {


    const [trans, setTrans] = useState(DUMMY_DATA.RECENT_TRANSACTIONS)

    const removeFilter = () => {
        setTrans(DUMMY_DATA.RECENT_TRANSACTIONS)
    }

    const applyFilter = (params: string) => {
        let filteredTransactions = DUMMY_DATA.RECENT_TRANSACTIONS.filter((t) => { return t.location == params })
        setTrans(filteredTransactions)
    }

    // Search according to name
    const applySearch = (value: string) => {
        let filteredTransactions = DUMMY_DATA.RECENT_TRANSACTIONS.filter((t) => { return t.email.toLowerCase().includes(value.toLowerCase()) || t.email.toLowerCase().includes(value.toLowerCase()) })
        setTrans(filteredTransactions)
    }

    return (
        <>

            <TitleCard
                title="Recent Transactions"
                topMargin="mt-2"
                TopSideButtons={<TopSideButtons applySearch={applySearch} applyFilter={applyFilter} removeFilter={removeFilter} />}>

                {/* Team Member list in table format loaded constant */}
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Location</th>
                                <th>Amount</th>
                                <th>Transaction Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trans.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-circle w-12 h-12">
                                                            <img src={l.avatar} alt="Avatar" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{l.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{l.email}</td>
                                            <td>{l.location}</td>
                                            <td>${l.amount}</td>
                                            <td>{moment(l.date).format("D MMM")}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}


export default Transactions