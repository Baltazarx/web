'use client'
import Link from "next/link"
import { useEffect, useState } from 'react'
import Menu from "../Menu"
import MobileMenu from '../MobileMenu'

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleConnect }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 991)
        }

        // Initial check
        handleResize()

        // Event listener for window resize
        window.addEventListener('resize', handleResize)

        // Cleanup on unmount
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

                        {/* /#main-nav */}
                        <a onClick={handleConnect} data-toggle="modal" data-target="#popup_bid" className="tf-button style2">
                            Connect
                        </a>
                        <div className={`mobile-button ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                    </div>
                </div>
            </header>

        </>
    )
}
