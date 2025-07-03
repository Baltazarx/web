'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import AddClassBody from "../elements/AddClassBody"
import BackToTop from '../elements/BackToTop'
import DonutProgress from '../elements/DonutProgress'
import PopupLogin from "../elements/PopupLogin" 
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    // 2. Ubah nama state dan handler untuk popup login
    const [isLoginOpen, setLoginOpen] = useState(false)
    const handleLoginPopup = () => setLoginOpen(!isLoginOpen)

    useEffect(() => {
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])

    return (
        <>
            <AddClassBody />
            <DonutProgress />
            <div id="wrapper">
                {/* 3. Perbarui props yang dikirim ke komponen Header */}
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLoginPopup={handleLoginPopup} />}
                {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLoginPopup={handleLoginPopup} /> : null}
                {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handleLoginPopup={handleLoginPopup} /> : null}

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {!footerStyle && < Footer1 />}
                {footerStyle == 1 ? < Footer1 /> : null}
                {footerStyle == 2 ? < Footer2 /> : null}

                {/* 4. Ganti komponen PopupBid dengan PopupLogin dan sesuaikan props-nya */}
                <PopupLogin 
                    isOpen={isLoginOpen} 
                    handleClose={handleLoginPopup} 
                />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}