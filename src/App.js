import { AuthProvider } from "./context/AuthContext";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./sass/styles.scss";
import LoginPage from "./components/login/LoginPage";
import AdminPage from "./components/admin/AdminPage";
import EditPage from "./components/admin/EditPage";
import HomePage from "./components/home/HomePage";
import PageSpecific from "./components/home/PageSpecific";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/page/:id" element={<PageSpecific />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin/edit/:id" element={<EditPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
