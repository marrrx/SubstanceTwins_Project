import { Link } from "react-router-dom";
import { createRef, useState } from 'react';
import clientAxios from '../config/axios';
import Alerts from "../components/alerts";

export default function Register() {


    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }

        try {
            const respuesta = await clientAxios.post('/api/register',datos)
            console.log(respuesta)

        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }
    return (
        <>

            <h2 className="fw-normal ">Create your account</h2>
            <h5 className="fw-light ">Insert your data to continue</h5>
            <br />

            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <form
                    noValidate
                    onSubmit={handleSubmit}
                >
                    {errors ? errors.map(error =><Alerts key={error}>{error}</Alerts>) : null}

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder=""
                            ref={nameRef}
                        />


                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder=""
                            ref={passwordRef}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password_confirmation" className="form-label">
                            Repeat your password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            placeholder=""
                            ref={passwordConfirmationRef}
                        />

                    </div>



                    <input type="submit" value="Create account" className="btn btn-warning " />
                </form>
            </div>

            <div className="d-flex">
                <div className="p-2 flex-fill">
                    <p className="text-body-secondary">
                        Already have an account? <Link to="/auth" className="text-reset">Log In</Link>.
                    </p>
                </div>
                <div className="p-2 flex-fill">
                    <p className="text-body-secondary">
                        <Link to="/" className="btn btn-warning btn-sm">Back to the store</Link>
                    </p>
                </div>

            </div>
        </>
    )
}