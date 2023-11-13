import { lazy } from "react";
import { Outlet } from "react-router-dom";
const Header = lazy(()=> import('./components/header'))

const App = () => {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  )
};

export default App;