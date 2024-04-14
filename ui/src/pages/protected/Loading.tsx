import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Loading from '../../features/common/components/Loading'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Loading [demo]"}))
      }, [])

    return(
        <Loading></Loading>
    )
}

export default InternalPage