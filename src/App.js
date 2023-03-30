import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from "./components";
import { routes } from "./pages";

function App() {
 
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>

      <ToastContainer position="bottom-right"/>
    </Layout>
  );
}

export default App;
