import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, SharedLayoutStyled } from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { Button } from "components/Styled/Button.styled";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import { scrollToTop } from "helpers";

const SharedLayout = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isLoading = useSelector((state) => state.loading.isLoading);

  const hideHeader = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SharedLayoutStyled>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      {isVisible && (
        <Button type="button" className="icon totop" onClick={scrollToTop}>
          <MdOutlineKeyboardDoubleArrowUp />
        </Button>
      )}
    </SharedLayoutStyled>
  );
};

export default SharedLayout;
