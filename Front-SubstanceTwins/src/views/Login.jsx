import { Link } from "react-router-dom";
import { createRef, useState } from 'react';
import clientAxios from '../config/axios';
import Alerts from "../components/alerts";



export default function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();

        const datos = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        try {
            const respuesta = await clientAxios.post('/api/login', datos)
          

        } catch (error) {
            setErrors(Object.values(error.response.data.errors))
        }
    }



    return (
        <>

            <h2 className="fw-normal ">Log In</h2>
            <h5 className="fw-light ">Insert your data in the next form</h5>
            <br />

            <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errors ? errors.map(error =><Alerts key={error}>{error}</Alerts>) : null}


                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder=""
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



                    <input type="submit" value="Login" className="btn btn-warning " />



                </form>
            </div>
            <div className="d-flex">
                <div className="p-2 flex-fill">
                    <p className="text-body-secondary">
                        Don't have an account? <Link to="/auth/register" className="text-reset">Register here</Link>.
                    </p>
                </div>
                <div className="p-2 flex-fill">
                    <Link to="/" className="btn btn-warning btn-sm">Back to the store</Link>
                </div>

            </div>

        </>

    )
}
