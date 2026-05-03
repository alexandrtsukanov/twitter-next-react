'use client';

import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
};

const Modal = ({
    isOpen,
    onClose,
    children,
    title = 'Header',
}: IProps) => {
    const container = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (document) {
            container.current = document.body;
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    if (!container.current) return null;

    if (!isOpen) return null;

    return createPortal(
        <div className="modal" onClick={onClose} tabIndex={-1} id="exampleModal" style={{ height: '600px', width: '500px' }}>
            <div className="modal-dialog">
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>,
        container.current,
    )
}

export default Modal;
