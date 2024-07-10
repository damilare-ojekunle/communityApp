

// eslint-disable-next-line react/prop-types
function Modal({ onClose, children }) {
  const handleModalClick = (e) => {
    // Prevent clicks inside the modal from closing it
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
