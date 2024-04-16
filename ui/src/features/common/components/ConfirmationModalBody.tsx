import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../../../utilities/Constants'

function ConfirmationModalBody({ extraObject, closeModal }: { extraObject: any, closeModal: any }) {

    const { message, type } = extraObject


    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.QUERY_DELETE) {
        }
        closeModal()
    }

    return (
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