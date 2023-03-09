import React from 'react';
import "./modal.css"

const AddTaskModal = (props) => {
    return (
        <div className={props.active ? "modal active" : "modal"} onClick={() => props.setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <p>123</p>
            </div>
        </div>
    );
}

export default AddTaskModal;