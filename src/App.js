import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { AddPost, routes } from "./pages";
import Main from "./pages/Main";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
