import styles from './page.module.css';
import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import SlideImage from './components/slide-image';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <Container disableGutters={true}>
                <Box className={styles['background-size']}>
                    <Grid container>
                        <Grid
                            item
                            md={6}
                            xs={12}
                            sx={{ my: 10, px: 3, color: 'white' }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: 'h6.fontSize',
                                    fontWeight: 700,
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
                                    fontSize: 'h6.fontSize',
                                    fontWeight: 500,
                                    mb: 2,
                                }}
                                className="text-blue"
                            >
                                Full Stack Developer
                            </Typography>

                            <List className="text-gray">
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
                                            loading='eager'
                                            src="/svg/line.svg"
                                            fill
                                            style={{
                                                objectFit: 'contain',
                                                objectPosition: 'center',
                                                transform: 'scale(2)',
                                                filter: 'grayscale(1)',
                                            }}
                                            alt='LINE logo'
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
                                                <SlideImage image="/images/www.dusit-international.com.png" />
                                                <SlideImage image="/images/investor.sabina.co.th.png" />
                                                <SlideImage image="/images/lbzero-homepage.png" />
                                                {/* <SlideImage image="/images/screenshot-ayothayatileandbrick.png" /> */}
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
                                                <SlideImage image="/images/www.thg.co.th.png" />
                                                <SlideImage image="/images/www.siamrajathanee.com.png" />
                                                <SlideImage image="/images/screenshot-ablockbyayothaya.png" />
                                                {/* <SlideImage image="/images/investor.pttplc.com.png" /> */}
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </main>
    );
}
