import { useCallback, useState } from "react";
import { IAuthNavbarItem } from "../models";
import { Button, Modal } from "../ui";
import RegistrtionForm from "../modules/registrtionForm";

const AuthNavbarItems = () => {
    const [isRegistrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    console.log(isRegistrationModalOpen);
    

    const openRegistrationModal = useCallback(() => {
        setRegistrationModalOpen(true);
    }, []);

    const openLoginModal = useCallback(() => {
        setLoginModalOpen(true);
    }, []);

    const handleSignout = useCallback(() => {

    }, []);

    const getAuthNavbarItems = (isAuthorized: boolean): IAuthNavbarItem[] => {
        if (isAuthorized) {
            return [
                { label: 'Sign Out', theme: 'primary', onClick: handleSignout },                   
            ]
        } else {
            return [
                { label: 'Sign Up', theme: 'primary', onClick: openRegistrationModal },
                { label: 'Sign In', theme: 'secondary', onClick: openLoginModal },
            ]
        }
    }

    return (
        <div className="flex gap-8">
            {getAuthNavbarItems(false).map(({ label, theme, onClick }) => (
                <Button
                    key={label}
                    type="button"
                    theme={theme}
                    onClick={onClick}
                >
                    {label}
                </Button>
            ))}

            <Modal isOpen={isRegistrationModalOpen} onClose={() => setRegistrationModalOpen(false)}>
                <RegistrtionForm />
            </Modal>

            <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
                <RegistrtionForm />
            </Modal>
        </div>
    )
}

export default AuthNavbarItems;
