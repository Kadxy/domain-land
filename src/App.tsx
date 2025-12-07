import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const [titleFontSize, setTitleFontSize] = useState('7rem');
    const titleText = import.meta.env.VITE_WEBSITE_TITLE || 'Domain Land';
    const logoUrl = import.meta.env.VITE_WEBSITE_LOGO_URL || './logo.svg';

    useEffect(() => {
        // Dynamically adjust font size based on title length
        const length = titleText.length;

        if (length <= 5) {
            setTitleFontSize('9rem');
        } else if (length <= 8) {
            setTitleFontSize('7rem');
        } else if (length <= 12) {
            setTitleFontSize('6rem');
        } else {
            setTitleFontSize('5rem');
        }
    }, [titleText]);

    return (
        <>
            <div className='logo'>
                <img src={logoUrl} alt="logo" />
            </div>
            {import.meta.env.VITE_WEBSITE_EMAIL &&
                <div className="email-container">
                    <a className="email" href={`mailto:${import.meta.env.VITE_WEBSITE_EMAIL}`} aria-label="Contact Email">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="email-icon">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <span className="email-text">{import.meta.env.VITE_WEBSITE_EMAIL}</span>
                    </a>
                </div>
            }
            <div className="title" style={{ fontSize: titleFontSize }}>
                {titleText}
            </div>

            {import.meta.env.VITE_WEBSITE_SUBTITLE &&
                <div className="subtitle">
                    {import.meta.env.VITE_WEBSITE_SUBTITLE}
                </div>
            }
            <div className="footer-info">
                {import.meta.env.VITE_WEBSITE_IPC_NAME &&
                    <a className="icp" href={'https://beian.miit.gov.cn/#/Integrated/index'} target="_blank" rel="noopener noreferrer">
                        {import.meta.env.VITE_WEBSITE_IPC_NAME}
                    </a>
                }
            </div>
        </>
    );
};

export default App;
