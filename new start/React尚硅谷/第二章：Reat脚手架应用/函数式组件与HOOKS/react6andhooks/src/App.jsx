import React from "react";
import { NavLink, useRoutes } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes/index";
export default function App() {
  // 实例化路由对象
  const routes = useRoutes(Routes);
  console.log(routes);
  const isActive = ({ isActive }) => {
    return isActive ? "list-group-item atguigu" : "list-group-item";
  };

  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <NavLink className={isActive} to={`/about`}>
              CLICK TO ABOUT
            </NavLink>
            {/* end 点击子路由后取消父级的action */}
            <NavLink className={isActive} to={`/home`} end>
              CLICK TO HOME
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route
                  path="/"
                  element={<Navigate to="/about"></Navigate>}
                ></Route>
              </Routes> */}
              {routes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
