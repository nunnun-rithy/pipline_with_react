import './App.css';
// I'm using the standard React logo here, but you can replace 'logo.svg'
// with your '/pngegg.png' if you have it in your public folder.
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            {/* These divs create the animated aurora background effect */}
            <div className="aurora-bg">
                <div className="aurora-bg__c1"></div>
                <div className="aurora-bg__c2"></div>
                <div className="aurora-bg__c3"></div>
            </div>

            {/* This is the main content card with the glass effect */}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to Your Test Pipeline</h1>
                <p>
                    This is a simple, visually appealing React app designed to look great
                    while you test your deployment process.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;