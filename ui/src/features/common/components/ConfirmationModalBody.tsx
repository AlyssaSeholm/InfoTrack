import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import { showNotification } from '../headerSlice'
import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../../../utilities/Constants'

function ConfirmationModalBody({ extraObject, closeModal}: { extraObject: any, closeModal: any }){

    const dispatch = useDispatch()

    const { message, type, _id, index} = extraObject


    const proceedWithYes = async() => {
        if(type === CONFIRMATION_MODAL_CLOSE_TYPES.QUERY_DELETE){
            // positive response, call api or dispatch redux function
            // dispatch(deleteQuery({index}))
            // dispatch(showNotification({message : "Query Deleted!", status : 1}))
        }
        closeModal()
    }

    return(
        <> 
        <p className=' text-xl mt-8 text-center'>
            {message}
        </p>

        <div className="modal-action mt-12">
                
                <button className="btn btn-outline   " onClick={() => closeModal()}>Cancel</button>

                <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>Yes</button> 

        </div>
        </>
    )
}

export default ConfirmationModalBody