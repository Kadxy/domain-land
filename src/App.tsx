import './App.css';

const App = () => {
    return (
        <>
            <div className='logo'>
                <img src={'./logo.svg'} alt="logo"/>
            </div>
            <div className="title">
                {import.meta.env.VITE_WEBSITE_TITLE || 'TITLE'}
            </div>

            {import.meta.env.VITE_WEBSITE_SUBTITLE &&
                <div className="subtitle">
                    {import.meta.env.VITE_WEBSITE_SUBTITLE}
                </div>
            }
            {import.meta.env.VITE_WEBSITE_IPC_NAME &&
                <a className="icp" href={'https://beian.miit.gov.cn'} target="_blank">
                    {import.meta.env.VITE_WEBSITE_IPC_NAME}
                </a>}
        </>
    );
};

export default App;
