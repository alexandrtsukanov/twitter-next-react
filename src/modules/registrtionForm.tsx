import { ChangeEvent, SubmitEvent, useState } from "react";
import { Button } from "../ui";

const RegistrtionForm = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const changeNickname = (event: ChangeEvent<HTMLInputElement>) => {
        setNickname(event.target.value);
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

    const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nickname" className="form-label">Create nickname</label>
                <input
                    type="text"
                    className="form-control"
                    id="nickname"
                    placeholder="Nickname"
                    value={nickname}
                    onChange={changeNickname}
                />
                <div className="invalid-feedback">Error nickname</div>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">Enter your email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={changeEmail}
                />
                <div className="invalid-feedback">Error email</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Create password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password" 
                    placeholder="Password"
                    value={password}
                    onChange={changePassword}
                />
                <div className="invalid-feedback">Error password</div>
            </div>

            <div className="mb-3">
                <label htmlFor="password-confirmation" className="form-label">Confirm password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password-confirmation"
                    placeholder="Password"
                    value={passwordConfirmation}
                    onChange={changePasswordConfirmation}
                />
                <div className="invalid-feedback">Error password</div>
            </div>

            <Button type="submit">Submit</Button>
        </form>
    )
}

export default RegistrtionForm;
