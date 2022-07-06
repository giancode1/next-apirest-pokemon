import { FC } from "react";
import Head from "next/head";

import { Box } from "@mui/material";

interface Props {
    title?: string;
    children?: React.ReactNode | undefined; //react18
}

export const Layout:FC<Props> = ({title = 'OpenJira App', children }) => {
  return (
    <Box sx={{ flexFlow:1 }}>
        <Head>
            <title>{title}</title>
        </Head>

      

        <Box sx={{ padding: '10px 20px' }}>
            {children}
        </Box>
    </Box>
  )
}
