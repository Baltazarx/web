'use client' // Tambahkan ini di baris paling atas jika Anda menggunakan Next.js App Router

import Link from "next/link";
import { useState } from "react"; // Impor useState

// Data partner kita buat dalam bentuk array agar lebih rapi
const partners = [
    {
        href: "https://www.coingecko.com/en/coins/ugly-dog",
        src: "/assets/images/partner/01.png",
        alt: "CoinGecko Logo"
    },
    {
        href: "https://www.ascendex.com/",
        src: "/assets/images/partner/02.png",
        alt: "AscendEX Logo"
    },
    {
        href: "https://v2.raydium.io/swap/?inputCurrency=sol&outputCurrency=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump",
        src: "/assets/images/partner/03.png",
        alt: "Raydium Logo"
    },
    {
        href: "https://app.meteora.ag/pools/CafWuKH9pji8LJ7QmQjtG4VZqqGJP6aNf3F1kbyzSxt6",
        src: "/assets/images/partner/04.png",
        alt: "Meteora Logo"
    },
    {
        href: "https://www.orca.so/?tokenIn=So11111111111111111111111111111111111111112&tokenOut=74Rq6Bmckiq8qvARhdqxPfQtkQsxsqVKCbDQL5PKpump",
        src: "/assets/images/partner/05.png",
        alt: "Orca Logo"
    }
];

export default function Partner1() {
    // State untuk melacak item mana yang sedang di-hover
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Style dasar untuk setiap logo partner
    const partnerStyle = {
        display: 'inline-block',
        maxWidth: '220px', // Ukuran logo bisa diubah di sini
        transition: 'transform 0.3s ease-in-out', // Transisi untuk efek hover
        transform: 'scale(1)', // Skala normal
    };

    // Style yang akan diterapkan saat hover
    const partnerHoverStyle = {
        transform: 'scale(1.08)', // Perbesar sedikit saat hover
    };

    return (
        <>
            <section className="tf-section tf_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">Our Partners</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            {/* Wrapper Utama dengan inline style */}
                            <div 
                                data-aos="fade-up" 
                                data-aos-duration={800} 
                                style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '80px' // Jarak vertikal antar baris, bisa diubah
                                }}
                            >
                                {/* Baris Atas */}
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
                                    {partners.slice(0, 3).map((partner, index) => (
                                        <Link
                                            key={index}
                                            href={partner.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={() => setHoveredIndex(index)} // Set state saat mouse masuk
                                            onMouseLeave={() => setHoveredIndex(null)}  // Reset state saat mouse keluar
                                            style={{
                                                ...partnerStyle, // Gabungkan style dasar
                                                ...(hoveredIndex === index ? partnerHoverStyle : {}) // Tambahkan style hover jika index-nya cocok
                                            }}
                                        >
                                            <img src={partner.src} alt={partner.alt} style={{ width: '100%', height: 'auto' }} />
                                        </Link>
                                    ))}
                                </div>
                                
                                {/* Baris Bawah */}
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '50px' }}>
                                    {partners.slice(3, 5).map((partner, index) => (
                                        <Link
                                            key={index + 3} // Gunakan index unik
                                            href={partner.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={() => setHoveredIndex(index + 3)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            style={{
                                                ...partnerStyle,
                                                ...(hoveredIndex === (index + 3) ? partnerHoverStyle : {})
                                            }}
                                        >
                                            <img src={partner.src} alt={partner.alt} style={{ width: '100%', height: 'auto' }} />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}