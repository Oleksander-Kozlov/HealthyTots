import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Global.styled";
import { AppWrapper } from "./App.styled";
import SharedLayout from "./components/SharedLayouts/SharedLayout";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const Agreement = React.lazy(() => import("./components/Agreement/Agreement"));
const DoctorsPage = React.lazy(() => import("./pages/DoctorsPage/DoctorsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage/ServicesPage"));
const ServiceTable = React.lazy(() => import("./components/ServiceTable/ServiceTable"));
const BlogPage = React.lazy(() => import("./pages/BlogPage/BlogPage"));
const BlogDetailsPage = React.lazy(() => import("./pages/BlogDetailsPage/BlogDetailsPage"));
const ContactsPage = React.lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

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
