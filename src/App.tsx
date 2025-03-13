import viteLogo from '/vite.svg';
import reactLogo from './assets/react.svg';
import './App.css';

const App = () => {
    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Kadxy</h1>
            {/*<div className="card">*/}
            {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
            {/*    count is {count}*/}
            {/*  </button>*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to test HMR*/}
            {/*  </p>*/}
            {/*</div>*/}
            <a className="read-the-docs" href={'https://beian.miit.gov.cn'} target="_blank">
                粤ICP备2024164543号-3
            </a>
        </>
    );
};

export default App;
