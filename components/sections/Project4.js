"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";

// ==============================================================================
// == ANDA HANYA PERLU MENGUBAH BAGIAN INI ==
// ==============================================================================
// Ganti dengan URL API backend Anda yang sebenarnya.
const API_URL = 'https://api.example.com/leaderboard'; 
// Pastikan API Anda mengembalikan format JSON seperti ini:
// [
//   { "id": 1, "rank": 1, "username": "Faisol", "score": 9850, "avatar": "/path/to/avatar.png" },
//   { "id": 2, "rank": 2, "username": "Junaedi", "score": 9540, "avatar": "/path/to/avatar.png" }
// ]
// ==============================================================================


// Komponen Ikon Mahkota (SVG)
const CrownIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
    </svg>
);

// Komponen untuk Tampilan Loading (Skeleton)
const LeaderboardSkeleton = () => (
    <div className="leaderboard-body">
        {[...Array(8)].map((_, i) => (
            <div className="leaderboard-row" key={i}>
                <div className="leaderboard-cell rank">
                    <div className="skeleton skeleton-rank" />
                </div>
                <div className="leaderboard-cell username">
                    <div className="skeleton skeleton-avatar" />
                    <div className="skeleton skeleton-text" />
                </div>
                <div className="leaderboard-cell score">
                    <div className="skeleton skeleton-score" />
                </div>
            </div>
        ))}
    </div>
);


export default function Project4() {
    // State untuk menyimpan data, status loading, dan error
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect untuk fetch data saat komponen pertama kali dimuat
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Gagal mengambil data: ${response.status} ${response.statusText}`);
                }
                const data = await response.json();
                setLeaderboardData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Array dependensi kosong agar hanya berjalan sekali

    const getRankClass = (rank) => {
        if (rank === 1) return 'rank-gold';
        if (rank === 2) return 'rank-silver';
        if (rank === 3) return 'rank-bronze';
        return 'rank-default';
    };
    
    // Fungsi untuk merender konten utama berdasarkan state
    const renderContent = () => {
        if (loading) {
            return <LeaderboardSkeleton />;
        }

        if (error) {
            return <div className="state-message">Terjadi kesalahan: {error}</div>;
        }

        if (leaderboardData.length === 0) {
            return <div className="state-message">Belum ada data di leaderboard.</div>;
        }

        return (
            <div className="leaderboard-body">
                {leaderboardData.map((player) => (
                    <div className={`leaderboard-row ${player.rank <= 3 ? `top-${player.rank}` : ''}`} key={player.id}>
                        <div className="leaderboard-cell rank">
                            {player.rank <= 3 ? (
                                <CrownIcon className={`rank-icon ${getRankClass(player.rank)}`} />
                            ) : (
                                <span className="rank-number">{player.rank}</span>
                            )}
                        </div>
                        <div className="leaderboard-cell username">
                            <Image 
                                src={player.avatar || '/assets/images/avatars/default.png'} // Fallback ke avatar default
                                alt={player.username} 
                                width={40} 
                                height={40} 
                                className="player-avatar"
                            />
                            <span>{player.username}</span>
                        </div>
                        <div className="leaderboard-cell score">
                            {player.score.toLocaleString('id-ID')} PTS
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <section className="tf-section project_4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-md-9">
                            <div className="tf-title left" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">Leaderboard</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="wrap-btn" data-aos="fade-up" data-aos-duration={800}>
                                <Link href="/leaderboard" className="tf-button style1">View All</Link>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="leaderboard-wrapper" data-aos="fade-up" data-aos-duration={800}>
                                <div className="leaderboard-header">
                                    <div className="leaderboard-cell rank">Rank</div>
                                    <div className="leaderboard-cell username">Player</div>
                                    <div className="leaderboard-cell score">Score</div>
                                </div>
                                {renderContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* ... (semua style lain tetap sama) ... */
                .leaderboard-wrapper {
                    background-color: #13182b;
                    border-radius: 15px;
                    padding: 10px 20px 20px 20px;
                    color: #fff;
                    font-family: 'Roboto', sans-serif;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    min-height: 400px; /* Memberi tinggi minimum agar tidak aneh saat loading */
                    display: flex;
                    flex-direction: column;
                }
                .leaderboard-header, .leaderboard-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 10px;
                    border-bottom: 1px solid #2a324b;
                    transition: all 0.3s ease-in-out;
                }
                .leaderboard-header {
                    color: #8a99b4; text-transform: uppercase; font-size: 0.8em; letter-spacing: 1px;
                }
                .leaderboard-body .leaderboard-row:last-child { border-bottom: none; }
                .leaderboard-row:hover {
                    background-color: #1c233d; transform: scale(1.02);
                    border-radius: 10px; box-shadow: 0 0 20px rgba(0, 242, 234, 0.1);
                }
                .leaderboard-cell { text-align: left; display: flex; align-items: center; }
                .leaderboard-cell.rank { flex: 0 0 15%; justify-content: center; font-size: 1.1em; font-weight: bold; }
                .rank-number {
                    background-color: #2a324b; border-radius: 50%; width: 30px; height: 30px;
                    display: flex; align-items: center; justify-content: center;
                    font-size: 0.9em; color: #bdc8dc;
                }
                .leaderboard-cell.username { flex: 1 1 55%; font-weight: 500; }
                .player-avatar {
                    border-radius: 50%; margin-right: 24px !important; border: 2px solid #3a4553;
                }
                .leaderboard-cell.score {
                    flex: 0 0 30%; justify-content: flex-end; font-weight: 700;
                    font-size: 1.1em; color: #00f2ea;
                }
                .leaderboard-row.top-1, .leaderboard-row.top-2, .leaderboard-row.top-3 {
                    background-color: #1c233d; border-radius: 10px; margin: 8px 0;
                    border-left-width: 4px; border-bottom: 1px solid transparent;
                }
                .leaderboard-row.top-1 {
                    border-left-color: #FFD700;
                    box-shadow: inset 0 0 15px rgba(255, 215, 0, 0.1), 0 0 15px rgba(255, 215, 0, 0.1);
                }
                .leaderboard-row.top-2 {
                    border-left-color: #C0C0C0;
                    box-shadow: inset 0 0 15px rgba(192, 192, 192, 0.1), 0 0 15px rgba(192, 192, 192, 0.1);
                }
                .leaderboard-row.top-3 {
                    border-left-color: #CD7F32;
                    box-shadow: inset 0 0 15px rgba(205, 127, 50, 0.1), 0 0 15px rgba(205, 127, 50, 0.1);
                }
                .rank-icon { width: 30px; height: 30px; fill: #8a99b4; }
                .rank-icon.rank-gold { fill: #FFD700; }
                .rank-icon.rank-silver { fill: #C0C0C0; }
                .rank-icon.rank-bronze { fill: #CD7F32; }

                /* --- Style untuk Skeleton & State Messages --- */
                .state-message {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-grow: 1;
                    color: #8a99b4;
                    font-size: 1.1em;
                }
                .skeleton {
                    background-color: #2a324b;
                    border-radius: 5px;
                    animation: shimmer 1.5s infinite linear;
                    background: linear-gradient(to right, #2a324b 8%, #3a4553 18%, #2a324b 33%);
                    background-size: 1200px 100%;
                }
                @keyframes shimmer {
                    0% { background-position: -1200px 0; }
                    100% { background-position: 1200px 0; }
                }
                .skeleton-rank { width: 30px; height: 30px; border-radius: 50%; }
                .skeleton-avatar { width: 40px; height: 40px; border-radius: 50%; margin-right: 24px; }
                .skeleton-text { width: 120px; height: 20px; }
                .skeleton-score { width: 80px; height: 20px; }
            `}</style>
        </>
    )
}