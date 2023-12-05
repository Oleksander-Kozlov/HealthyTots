import { Routes, Route } from "react-router-dom";
import { AppWrapper } from "./App.styled";
import SharedLayout from "./components/SharedLayouts/SharedLayout";
import { GlobalStyle } from "./Global.styled";


// import "./App.css";
// import NotFoundPage from "./components/NotFound/NotFound";

import BlogPage from "./pages/BlogPage/BlogPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import HomePage from "./pages/HomePage/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";

function App() {
  return (
    <AppWrapper>
              <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      </AppWrapper>
  );
}

export default App;
