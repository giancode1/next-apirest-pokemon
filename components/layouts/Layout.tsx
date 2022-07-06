import { FC } from "react";
import Head from "next/head";

import { Box, Container } from "@mui/material";

interface Props {
    title?: string;
    children?: React.ReactNode | undefined; //react18
}

export const Layout:FC<Props> = ({title = 'Pokemon App', children }) => {
  return (
    <Container sx={{ flexFlow:1 }}>
        <Head>
            <title>{title}</title>
        </Head>
        {children}
    </Container>
  )
}