import { Typography } from '@mui/material';

export default function Title ({ title, highlight, subTitle }) {
    return (
        <>
            {title && (
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '1rem',
                        fontWeight: 600,
                    }}
                    className="text-blue"
                >
                    {title}
                </Typography>
            )}

            {highlight && (
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: 'h4.fontSize',
                        fontWeight: 500,
                        color: 'white',
                    }}
                >
                    {highlight}
                </Typography>
            )}

            {subTitle && (
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: 'h5.fontSize',
                        fontWeight: 500,
                        mb: 2,
                    }}
                    className="text-blue"
                >
                    {subTitle}
                </Typography>
            )}
        </>
    );
};
