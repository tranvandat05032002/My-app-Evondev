import "./App.css";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Contact from "./Contact";
import Blog from "./Blog";
import BlogPageDetail from "./BlogPageDetail";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetail></BlogPageDetail>}
          ></Route>
        </Route>
        <Route path="*" element={<h1>Error 404!</h1>}></Route>
      </Routes>
    </div>
  );
}
export default AppRouter;
