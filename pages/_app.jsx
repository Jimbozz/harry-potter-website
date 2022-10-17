import { AuthProvider } from "../context/AuthContext";
import { FavoritesContextProvider } from "../context/FavoritesContext";
import "../styles/scss/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <FavoritesContextProvider>
        <Component {...pageProps} />
      </FavoritesContextProvider>
    </AuthProvider>
  );
}

export default MyApp;
