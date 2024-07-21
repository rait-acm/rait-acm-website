import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home/Home.tsx";
import Footer from "@/components/Footer/index.tsx";
import Header from "@/components/Header/index.tsx";
// import Lines from "@/components/Lines/index.tsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop/index.tsx";
import ResetScroll from "@/components/ScrollToTop/ResetScroll.tsx";
import "./globals.css";
import ToasterContext from "@/src/context/ToastContext.tsx";

import BlogPage from "@/src/pages/blog/BlogPage.tsx";
import SingleBlogPage from "@/src/pages/blog/blog-details/SingleBlogPage.tsx";
import ErrorPage from "@/src/pages/error/ErrorPage.tsx";
import SigninPage from "@/src/pages/auth/signin/SignInPage.tsx";
import Register from "@/src/pages/auth/signup/Register.tsx";
import SupportPage from "@/src/pages/support/SupportPage.tsx";
import { EventsPage } from "@/src/pages/events/EventsPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider enableSystem={false} attribute="class" defaultTheme="dark">
        {/* <Lines /> */}
        <Header />
        <ToasterContext />
        <ResetScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<SingleBlogPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/auth/signin" element={<SigninPage />} />
          <Route path="/auth/signup" element={<Register />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
