import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import NavBtn from "./coding_apple/NavBtn";
import PostList from "./coding_apple/PostList";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import InputV2 from "./pages/InputV2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link>|{" "}
        <Link to="/inputV2">InputV2</Link> | <Link to="/list">List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/inputV2" element={<InputV2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
