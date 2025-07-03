"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image"; 

export default function PopupLogin({ isOpen, handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password });
        alert(`Mencoba login dengan Email: ${email}`);
    };

    return (
        <>
            <div className={`modal fade popup ${isOpen ? "d-block show" : ""}`} id="popup_login" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="close icon" onClick={handleClose} data-dismiss="modal" aria-label="Close">
                            <Image src="/assets/images/backgroup/bg_close.png" alt="Close" width={20} height={20} />
                        </div>

                        <div className="header-popup">
                            <h5>Selamat Datang Kembali</h5>
                            <div className="desc">
                                Belum punya akun? <Link href="/register">Daftar di sini</Link>
                            </div>
                            <div className="spacing" />
                        </div>

                        <div className="modal-body center">
                            <form onSubmit={handleSubmit} className="login-form">
                                {/* ... isi form tetap sama ... */}
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="Masukkan email Anda" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="Masukkan password Anda" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="forgot-password-link">
                                    <Link href="/forgot-password">Lupa Password?</Link>
                                </div>
                                <button type="submit" className="login-button">Login</button>
                                <div className="divider">
                                    <span>Atau lanjutkan dengan</span>
                                </div>
                                <div className="social-login">
                                    <button type="button" className="social-button google">
                                        <Image src="/assets/images/common/icon_google.png" alt="Google" width={24} height={24} />
                                        <span>Google</span>
                                    </button>
                                    <button type="button" className="social-button facebook">
                                         <Image src="/assets/images/common/icon_facebook.png" alt="Facebook" width={24} height={24} />
                                        <span>Facebook</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            {isOpen &&
                <div className="modal-backdrop fade show" onClick={handleClose} />
            }

            <style jsx>{`
                /* ===== STYLE BARU UNTUK TOMBOL CLOSE ===== */
                .close.icon {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                }
                .close.icon:hover {
                    transform: scale(1.1) rotate(90deg);
                    opacity: 0.8;
                }
                /* ========================================= */

                .login-form {
                    width: 100%;
                    text-align: left;
                }
                .form-group {
                    margin-bottom: 20px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #cfcfcf;
                }
                .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 1px solid #4a4a4a;
                    background-color: #2a2a3a;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 1rem;
                }
                .form-control::placeholder {
                    color: #888;
                }
                .forgot-password-link {
                    text-align: right;
                    margin-top: -10px;
                    margin-bottom: 20px;
                }
                .forgot-password-link a {
                    color: #00a3ff;
                    font-size: 0.9em;
                }
                .login-button {
                    width: 100%;
                    padding: 15px;
                    background-color: #00a3ff;
                    border: none;
                    border-radius: 8px;
                    color: #fff;
                    font-size: 1rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .login-button:hover {
                    background-color: #0088d6;
                }
                .divider {
                    display: flex;
                    align-items: center;
                    text-align: center;
                    color: #888;
                    margin: 25px 0;
                }
                .divider::before, .divider::after {
                    content: '';
                    flex: 1;
                    border-bottom: 1px solid #4a4a4a;
                }
                .divider span {
                    padding: 0 15px;
                }
                .social-login {
                    display: flex;
                    gap: 15px;
                }
                .social-button {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px;
                    border: 1px solid #4a4a4a;
                    background-color: transparent;
                    color: #fff;
                    border-radius: 8px;
                    cursor: pointer;
                    gap: 10px;
                }
                .social-button:hover {
                    background-color: #2a2a3a;
                }
            `}</style>
        </>
    )
}