import React from "react";
import Modal from 'react-modal';

/* Old version:



const OptionModal = () => {
    return (
        <div>
            some text
        </div>
    );
};


*/

const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;