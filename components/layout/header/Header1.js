'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Menu from "../Menu"
import MobileMenu from '../MobileMenu'

// 1. Terima prop 'handleLoginPopup', bukan 'handleConnect'
export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleLoginPopup }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <header id="header_main" className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="container">
                    <div id="site-header-inner">
                        <div className="header__logo">
                            <Link href="/"><img src="assets/images/logo/Group 2.png" alt="" /></Link>
                        </div>
                        {isMobile ? (
                            <MobileMenu isMobileMenu={isMobileMenu} />
                        ) : (
                            <Menu />
                        )}

                        {/* 2. Ganti onClick untuk memanggil fungsi popup login */}
                        {/* 3. Ganti teks tombol menjadi "Login" */}
                        <a onClick={handleLoginPopup} className="tf-button style2">
                            Login
                        </a>
                        <div className={`mobile-button ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                    </div>
                </div>
            </header>
        </>
    )
}