import { AppStyled } from "./App.styled";
import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "components/SharedLayout/SharedLayout";
import { useDispatch, useSelector } from "react-redux";

import { Toaster } from "react-hot-toast";
import { getFavTeachers } from "redux/user/operations";
import { PrivateRoute } from "components/PrivateRoute";

const HomePage = lazy(() => import("pages/HomePage"));
const CardsPage = lazy(() => import("pages/CardsPage"));
const FavoritesPage = lazy(() => import("pages/FavoritesPage"));

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  useEffect(() => {
    dispatch(getFavTeachers(userId));
  }, [dispatch, userId]);

  return (
    <>
      <AppStyled>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="teachers" element={<CardsPage />} />
            <Route
              path="/favorites"
              element={
                <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
              }
            />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </AppStyled>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#363636",
          },
        }}
      />
    </>
  );
}

export default App;
