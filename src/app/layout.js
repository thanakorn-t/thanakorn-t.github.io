import { Prompt } from 'next/font/google';
import './globals.css';
import { Box, Typography } from '@mui/material';

const prompt = Prompt({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
    title: `Thanakorn's portfolio`,
    description: 'Description of about work experience.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={prompt.className}>
                {children}

                <footer
                    className={prompt.className}
                    style={{ padding: '.8rem 1rem' }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography
                            className="text-gray"
                            variant="small"
                            sx={{ fontWeight: 400, fontSize: 14 }}
                        >
                            © 2024 thanakorn-t.github.io. All Rights Reserved.
                        </Typography>
                    </Box>
                </footer>
            </body>
        </html>
    );
}
