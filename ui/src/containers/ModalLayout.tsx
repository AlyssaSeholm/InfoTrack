import { useEffect } from 'react'
import { MODAL_BODY_TYPES } from '../utilities/Constants'
import { useSelector, useDispatch } from 'react-redux'
import { ModalState, closeModal } from '../features/common/modalSlice'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import { RootState } from '../app/store'


function ModalLayout() {


    const {isOpen, bodyType, size, extraObject, title} = useSelector((state: RootState) => state.modal)
    const state = useSelector((state: RootState) => state);
    const dispatch = useDispatch()

    const close = () => { //const close = (e: ModalState) => {
        dispatch(closeModal(state.modal))
    }

    const getModalBody = () => {
        switch(bodyType as keyof typeof MODAL_BODY_TYPES){
            case MODAL_BODY_TYPES.CONFIRMATION:
                return <ConfirmationModalBody extraObject={extraObject} closeModal={close} />
            default:
                return <> <div></div> </>
        }
    }
    
//         [MODAL_BODY_TYPES.LEAD_ADD_NEW]: <AddLeadModalBody closeModal={close} extraObject={extraObject} />,
//         [MODAL_BODY_TYPES.CONFIRMATION]: <ConfirmationModalBody extraObject={extraObject} closeModal={close} />,
//         [MODAL_BODY_TYPES.DEFAULT]: <div></div>
// }[bodyType as keyof typeof MODAL_BODY_TYPES]


    return(
        <>
        {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

                {/* Loading modal body according to different modal type */}
                {
                    getModalBody()
                }
            </div>
            </div>
            </>
    )
}

export default ModalLayout