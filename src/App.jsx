import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayouts/SharedLayout";

// import "./App.css";
// import NotFoundPage from "./components/NotFound/NotFound";

import BlogPage from "./pages/BlogPage/BlogPage";
import ContactsPage from "./pages/ContactsPage/COntactsPage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
