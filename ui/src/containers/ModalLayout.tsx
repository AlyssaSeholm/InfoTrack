import { MODAL_BODY_TYPES } from '../utilities/Constants'
import { useSelector } from 'react-redux'
import ConfirmationModalBody from '../features/common/components/ConfirmationModalBody'
import { RootState } from '../app/store'


function ModalLayout() {

    const {isOpen, bodyType, size, extraObject, title} = useSelector((state: RootState) => state.modal)

    const close = () => { 
        console.log("close"); //todo
    }

    const getModalBody = () => {
        switch(bodyType as keyof typeof MODAL_BODY_TYPES){
            case MODAL_BODY_TYPES.CONFIRMATION:
                return <ConfirmationModalBody extraObject={extraObject} closeModal={close} />
            default:
                return <> <div></div> </>
        }
    }
    return(
        <>
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
            <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

                { getModalBody() }
            </div>
            </div>
            </>
    )
}

export default ModalLayout