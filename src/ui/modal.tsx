import { ReactNode } from "react";

interface IProps {
    title?: string;
    successBtnText?: string;
    closeBtnText?: string;
    children: ReactNode;
    onSuccess: () => void;
};

const Modal = ({
    title = 'Header',
    successBtnText = 'Success',
    closeBtnText,
    children,
    onSuccess,
}: IProps) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            onClick={onSuccess}
                        >
                            {successBtnText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
