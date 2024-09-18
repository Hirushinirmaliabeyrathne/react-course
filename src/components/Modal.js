/* eslint-disable no-undef */
function Modal(props) {  // Add props as a parameter
    function cancelHandler() {
      props.onCancel();  // Correct usage of props
    }
  
    function confirmHandler() {
      props.onConfirm();  // Fix the typo here from "onConfairm" to "onConfirm"
    }
  
    return (
      <div className="modal">
        <p>Are You Sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;
  