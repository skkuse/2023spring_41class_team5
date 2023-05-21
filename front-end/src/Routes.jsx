import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page = React.lazy(() => import("pages/Page"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
