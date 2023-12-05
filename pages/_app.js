import React from 'react';
import "../styles/globals.css";
//Import config antd
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
//Import redux
import { store } from "../redux/store";
import StoreProvider from "../redux/providers";
//Import components
import Loading from "../components/Shared/Loading";

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider store={store}>
      <ConfigProvider theme={theme}>
        <Component {...pageProps} />
        <Loading />
      </ConfigProvider>
    </StoreProvider>
  );
}
