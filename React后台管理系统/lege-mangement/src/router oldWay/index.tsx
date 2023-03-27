
// 组件式路由文件
import App from '../App';
import Home from '../views/Home'
import About from '../views/About'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
