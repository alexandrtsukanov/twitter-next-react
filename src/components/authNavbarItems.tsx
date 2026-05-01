import { useCallback } from "react";
import { IAuthNavbarItem } from "../models";
import { Button } from "../ui";

const AuthNavbarItems = () => {
    const handleSignup = useCallback(() => {

    }, []);

    const handleLogin = useCallback(() => {

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
                { label: 'Sign Up', theme: 'primary', onClick: handleSignup },
                { label: 'Sign In', theme: 'secondary', onClick: handleLogin },
            ]
        }
    }

    return (
        <div>
            {getAuthNavbarItems(true).map(({ label, theme, onClick }) => (
                <Button
                    key={label}
                    type="button"
                    theme={theme}
                    onClick={onClick}
                >
                    {label}
                </Button>
            ))}
        </div>
    )
}

export default AuthNavbarItems;
