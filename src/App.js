import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import HomePage from "./component/HomePage";
import ReactQuery from "./component/ReactQuery";

function App() {
    return (
        <div className="App">
            <nav style={{backgroundColor: 'beige', paddingTop: '20px'}}>
                <Link to="/" style={{margin: '10px'}}>홈페이지</Link>
                <Link to="reactQuery">리엑트 쿼리</Link>

            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='reactQuery' element={<ReactQuery/>}/>
            </Routes>
        </div>
    );
}

export default App;
