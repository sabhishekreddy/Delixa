import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "./Components/Authentication/SignIn/SignIn"
import SignUp from "./Components/Authentication/SignUp/SignUp"
import Recovery from "./Components/Authentication/Recovery/Recover";

import ProductMain from "./Components/ProductPage/ProductMain"
import Main from "./Components/StoreComponent/Main"
import GettingStarted from "./Components/GettingStarted/GettingStarted"
import { useLocation } from "react-router-dom";

function App() {
  const { pathname, hash, key } = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GettingStarted />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recover" element={<Recovery />} />

        <Route path="store">
          <Route path=":storeid">
            <Route path=":productid" element={<ProductMain />} />
            <Route index element={<Main />} />
          </Route>
        </Route>
        <Route path="product" element={<h1>Product Page</h1>} />

        <Route path="profile" element={<SignIn />}>
          <Route path=":userid" element={<h1>Profile Page</h1>} />
        </Route>

        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="contact" element={<h1>Contact Page</h1>} />
        <Route path="error" element={<h1>Error Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
