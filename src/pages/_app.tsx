import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Head from "next/head";
import ButtonAppBar from "@/components/sidebar";
import {ThemeProvider} from "@mui/material";
import theme from "@/components/theme";

export default function App({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <title>Nerede Kal Case</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/logoo.ico"/>
            </Head>
            <>

                <ThemeProvider theme={theme}>
                    <ButtonAppBar/>
                    <Component {...pageProps} />
                </ThemeProvider>

            </>

        </>
    )
}
