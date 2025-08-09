import { createUserWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from "../firebase/config";
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignupForm = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState('')

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
                });
                navigate("/");
                return false;
            },
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

         if (!acceptTerms) {
            toast.error("Please accept the terms & conditions.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
            return;
        }

        if (password !== confirmpassword) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: fullname,
                photoURL: 'https://i.ibb.co/Sn3r1jJ/default-user.png' // You can change this default image
            });

            toast.success("Signup successful!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            setFullname('');
            setEmail('');
            setPassword('');
            setConfirmpassword('');

            console.log("User created:", user);
            navigate("/");

        } catch (error) {
            console.error("Signup error:", error.message);
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
                            <label htmlFor="full-name">Full Name:</label>
                            <input type="text" name="fullname" id="full-name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="armor-input-field">
                            <label htmlFor="signup-email">Email:</label>
                            <input type="email" name="email" id="signup-email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="armor-input-field">
                            <label htmlFor="signup-password">Password:</label>
                            <input type="password" name="password" id="signup-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="armor-input-field">
                            <label htmlFor="confirm-password">Confirm Password:</label>
                            <input type="password" name="confirmpassword" id="confirm-password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} required />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="armor-checkbox-field">
                            <label>
                                <input type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />
                                I accept the <Link to="/termsconditions">Terms & Conditions</Link>
                            </label>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="login-form-btn">
                            <button type='submit' className='theme-btn'>Sign up</button>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="goto-singup-button">
                            <span>Already have an account? <Link to="/login">Sign in</Link></span>
                        </div>
                    </Col>
                </Row>
            </form>
        </>
    )
}

export default SignupForm