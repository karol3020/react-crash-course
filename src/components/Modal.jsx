import './Modal.css'

function Modal ({title, closeModal}) {
    return (
<>
    <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
            <button onClick={closeModal} className="btn btn__cancel">Cancel</button>
            <button onClick={closeModal} className="btn">Confirm</button>
        </div>
    </div>
    <div className="backdrop" />
</>
    )
}

export default Modal