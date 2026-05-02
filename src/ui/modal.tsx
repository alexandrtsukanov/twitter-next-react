'use client';

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    successBtnText?: string;
    closeBtnText?: string;
    children: ReactNode;
    onSuccess?: () => void;
};

const Modal = ({
    isOpen,
    onClose,
    title = 'Header',
    successBtnText = 'Success',
    closeBtnText,
    children,
    onSuccess,
}: IProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);
    
    if (!isOpen) return null;

    return createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal-dialog">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        {children}
                    </div>

                    <div className="modal-footer">
                        {!!closeBtnText && (
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{closeBtnText}</button>
                        )}

                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => onSuccess?.()}
                        >
                            {successBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    )
}

export default Modal;
