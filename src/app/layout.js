"use client";
import "@/assets/scss/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { AuthProvider } from "@/views/auth";
import { roboto, inter } from "@/assets/fonts";
import MaterialWrapper from "@/components/MaterialWrapper";
import NavBar from "@/views/navbar";
import Footer from "@/views/footer";
import store from "@/store";
import { BackToTop } from "@/components";

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <head />
      <body>
        <Provider store={store}>
          <SessionProvider>
            <MaterialWrapper>
              <NavBar />
              {children}
              <BackToTop />
              <Footer id="contact"/>
            </MaterialWrapper>
          </SessionProvider>
        </Provider>
      </body>
    </html>
  );
}
