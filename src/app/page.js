'use client';

import styles from './page.module.css';
import 'swiper/css';

import {
    Box,
    ButtonBase,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
    styled,
} from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import SlideImage from './components/slide-image';
import Image from 'next/image';
import StarsIcon from '@mui/icons-material/Stars';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Title from './components/title';
import Portfolio from './components/portfolio';

const Navbar = styled(ButtonBase)(() => ({
    border: '1px solid transparent',
    borderRadius: '12px',
    padding: 16,
    transition: 'all .2s',
    '&:hover': {
        backgroundColor: 'rgba(0, 76, 153, 0.1)',
        border: '1px solid rgba(0, 127, 255, 0.3)',
    },
}));

export default function Home() {
    return (
        <main>
            <Container disableGutters={true}>
                <Box className={styles['background-size']}>
                    <Grid container sx={{ height: '100%' }}>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{ my: 10, px: 3, color: 'white' }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                }}
                                className="text-blue"
                            >
                                Contact
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: 'h3.fontSize',
                                    fontWeight: 500,
                                }}
                            >
                                Thanakorn Tawsan
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: 'h5.fontSize',
                                    fontWeight: 500,
                                    mb: 2,
                                }}
                                className="text-blue"
                            >
                                Full Stack Developer
                            </Typography>

                            <List className="text-gray" sx={{ mb: 7 }}>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <FmdGoodIcon
                                            sx={{ fontSize: '1rem' }}
                                            className="text-gray"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Bangkok, Thailand
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon sx={{ minWidth: 24 }}>
                                        <EmailIcon
                                            sx={{ fontSize: '1rem' }}
                                            className="text-gray"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            className="text-gray"
                                            underline="none"
                                            href="mailto:thanakorntawsan@gmail.com"
                                        >
                                            thanakorntawsan@gmail.com
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 16,
                                            height: 16,
                                            position: 'relative',
                                            mr: 1,
                                        }}
                                    >
                                        <Image
                                            loading="eager"
                                            src="/svg/line.svg"
                                            fill
                                            style={{
                                                objectFit: 'contain',
                                                objectPosition: 'center',
                                                transform: 'scale(2)',
                                                filter: 'grayscale(1)',
                                            }}
                                            alt="LINE logo"
                                        />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link
                                            className="text-gray"
                                            underline="none"
                                            href="https://line.me/ti/p/tIOlOzRqVj"
                                            target="_blank"
                                        >
                                            morningmore
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                            </List>

                            <Stack direction="column" spacing={2}>
                                {/* <Navbar>
                                    <Grid xs>
                                        <AccountCircleIcon />
                                    </Grid>
                                    <Grid xs={10} sx={{ textAlign: 'start' }}>
                                        <Typography sx={{ fontWeight: 600 }}>
                                            Introduction
                                        </Typography>
                                        <Typography></Typography>
                                    </Grid>
                                </Navbar> */}
                                {/* <Navbar>
                                    <Grid item xs sx={{ textAlign: 'start' }}>
                                        <StarsIcon
                                            sx={{ color: 'var(--blue-2)' }}
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        xs={11}
                                        sx={{ textAlign: 'start' }}
                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: 14,
                                            }}
                                        >
                                            Experiences
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                color: 'var(--gray-2)',
                                            }}
                                        >
                                            Describe your educational history
                                            and previous work.
                                        </Typography>
                                    </Grid>
                                </Navbar> */}
                                {/* <Navbar>Portfolio</Navbar> */}
                            </Stack>
                        </Grid>

                        <Grid item md={6} xs={12}>
                            <Box className={styles.slide}>
                                <Box className={styles.slide__wrapper}>
                                    <Box className={styles.slide__body}>
                                        <Grid container>
                                            <Grid
                                                item
                                                xs={6}
                                                className={styles.slide__item}
                                            >
                                                <SlideImage image="/images/portfolio/www.dusit-international.com.png" />
                                                <SlideImage image="/images/portfolio/investor.sabina.co.th.png" />
                                                <SlideImage image="/images/portfolio/ablockbyayothaya.png" />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={6}
                                                className={[
                                                    styles.slide__item,
                                                    styles[
                                                        'slide__item--slideup'
                                                    ],
                                                ].join(' ')}
                                            >
                                                <SlideImage image="/images/portfolio/www.thg.co.th.png" />
                                                <SlideImage image="/images/portfolio/www.siamrajathanee.com.png" />
                                                <SlideImage image="/images/portfolio/lbzero.png" />
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Grid sx={{ py: 5 }}>
                    <Grid item xs={12}>
                        <Title highlight="Portfolio" title="All my works" />
                        <Portfolio />
                    </Grid>
                </Grid>
            </Container>
        </main>
    );
}
