import React from 'react';
import { FaHome, FaCompass, FaRegListAlt, FaFolderOpen, FaHistory, FaThumbsUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.jpg'; // Import the image file

function App() {
    const ytvideo = [
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
        'https://www.youtube.com/embed/cqdK--33sVI?si=D2f2VoEJa6_i5SYp',
    ];

    return (
        <div className="d-flex">
            <div className="sidebar d-flex flex-column align-items-center p-3">
                <img src={logo} alt="YouTube Logo" className="youtube-logo mb-4" />
                <div className="icon-container d-flex flex-column align-items-center">
                    <FaHome className="sidebar-icon mb-4" />
                    <FaCompass className="sidebar-icon mb-4" />
                    <FaRegListAlt className="sidebar-icon mb-4" />
                    <FaFolderOpen className="sidebar-icon mb-4" />
                    <FaHistory className="sidebar-icon mb-4" />
                    <FaThumbsUp className="sidebar-icon mb-4" />
                </div>
            </div>
            <div className="container-fluid p-4">
                <input type="text" className="form-control mb-4 search-bar" placeholder="Search..." />
                <div className="row">
                    {ytvideo.map((video, index) => (
                        <div key={index} className="col-12 col-md-4 mb-4">
                            <iframe
                                width="100%"
                                height="315"
                                src={video}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
