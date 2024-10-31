import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
} from "react-router-dom"; // Mengimpor BrowserRouter, Route, dan NavLink dari react-router-dom

// Lazy loading untuk komponen Home dan BarangList
const Home = React.lazy(() => import("./components/Home"));
const BarangList = React.lazy(() => import("./components/Barang/List"));
const BarangCreate = React.lazy(() => import("./components/Barang/Create"));


const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Home
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/barang">
                  Barang
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/barang"
              element={
                  <BarangList />
              }
            />
            <Route
              path="/barang/create"
              element={
                  <BarangCreate />
              }
            />
          </Routes>
        </Suspense>

        <div>&copy; 2024 </div>
      </div>
    </Router>
  );
};

export default App;