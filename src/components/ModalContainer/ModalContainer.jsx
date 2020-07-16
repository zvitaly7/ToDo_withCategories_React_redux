import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {selectLastModal} from "../../store/reducers/modal";

import './modalcontainer.scss'
import {hideModalActionCreator} from "../../store/actions/actionCreator";
import {connect} from "react-redux";


export class ModalContainerInternal extends Component {


    modalRenderer = () => (
        <>
            <div className='global-overlay'/>
            <div className='modal-wrapper'>
                <div className='modal-container'>
                    <div className='modal-header'>
                        <span
                            className="modal-title text-ellipsis">{this.props.modalData.name || ''}</span>
                        <span className="modal-close" onClick={this.props.closeModal}>X</span>
                    </div>
                    <div className='modal-content'>{this.props.modalData.element}</div>
                    <div className='modal-footer'></div>
                </div>
            </div>
        </>
    );

    render() {
        return this.props.modalData
            ? ReactDOM.createPortal(this.modalRenderer(), document.body)
            : null;
    }
}


export const ModalContainer = connect(state => ({
    modalData: selectLastModal(state)
}), {closeModal: hideModalActionCreator})(ModalContainerInternal);
