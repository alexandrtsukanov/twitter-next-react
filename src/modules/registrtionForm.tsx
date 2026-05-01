import { ChangeEvent, useState } from "react";
import { Modal } from "../ui";

const RegistrtionForm = () => {
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const changeNick = (event: ChangeEvent<HTMLInputElement>) => {
        setNick(event.target.value);
    };

    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const changePasswordConfirmation = (event: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirmation(event.target.value);
    };

    return (
        <div>
            {/* <Modal
                title="Registration"
                onSuccess={() => { console.log('Sign Ip') }}
                successBtnText="Sign Up"
                closeBtnText="Cancel"
            >
                <div>
                    <input />
                    <input />
                    <input />
                    <input />
                </div>
            </Modal> */}

            <input type="text" value={nick} onChange={changeNick} />
            <input type="email" value={email} onChange={changeEmail} />
            <input type="password" value={password} onChange={changePassword} />
            <input type="password" value={passwordConfirmation} onChange={changePasswordConfirmation} />
        </div>
    )
}

export default RegistrtionForm;
