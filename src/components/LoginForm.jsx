import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { toast } from 'react-toastify'
import { StyledFirebaseAuth } from 'react-firebaseui'
import { GoogleAuthProvider } from 'firebase/auth';

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccessWithAuthResult: (authResult) => {
                toast.success("Signed up with Google!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                navigate("/");
                return false;
            },
        },
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success("Login successful!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/");
        } catch (error) {
            toast.error(error.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col lg={12}>
                        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                    </Col>
                    <Col lg={12}>
                        <div className="armor-input-field">
                            <label htmlFor="login-email">Email:</label>
                            <input type="email" name="email" value={email} id="login-email" onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="armor-input-field">
                            <label htmlFor="login-password">Password:</label>
                            <input type="password" name="password" value={password} id='login-password' onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="forgot-password">
                            <Link to="/forgot-password">Forgot Password?</Link>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="login-form-btn">
                            <button type='submit' className='theme-btn'>Login</button>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="goto-singup-button">
                            <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                        </div>
                    </Col>
                </Row>
            </form>
        </>
    )
}

export default LoginForm