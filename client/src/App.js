import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {LandingPage, AddPost, UserPosts, Setting, About} from "./Pages";

import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<UserPosts />} />
      </Routes>
    </BrowserRouter>
  );
}
