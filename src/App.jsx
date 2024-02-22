import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Global.styled";
import { AppWrapper } from "./App.styled";
import SharedLayout from "./components/SharedLayouts/SharedLayout";
import BlogDetailsPage from "./pages/BlogDetailsPage/BlogDetailsPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ServiceTable from "./components/ServiceTable/ServiceTable"
import Agreement from "./components/Agreement/Agreement";



function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="agreement/:id" element={<Agreement />} />
          <Route path="doctors" element={<DoctorsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:id" element={<ServiceTable />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}

export default App;
