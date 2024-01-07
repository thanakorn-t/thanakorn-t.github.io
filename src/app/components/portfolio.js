import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Portfolio() {
    const theme = useTheme();
    const downMd = useMediaQuery(theme.breakpoints.down('md'));
    
    return (
        <ImageList cols={ downMd ? 2 : 4 }>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        style={{ height: '200px'}}
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.subtitle}
                        actionIcon={
                            item.link && 
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)', fontSize: 16 }}
                                aria-label={`info about ${item.title}`}
                                href={item.link}
                                target='_blank'
                            >
                                <OpenInNewIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: '/images/portfolio/www.dusit-international.com.png',
        title: 'dusit-international.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.dusit-international.com'
    },
    {
        img: '/images/portfolio/www.thg.co.th.png',
        title: 'thg.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.thg.co.th',
    },
    {
        img: '/images/portfolio/investor.sabina.co.th.png',
        title: 'investor.sabina.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://investor.sabina.co.th'
    },
    {
        img: '/images/portfolio/investor.pttplc.com.png',
        title: 'investor.pttplc.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://investor.pttplc.com',
    },
    {
        img: '/images/portfolio/www.siamrajathanee.com.png',
        title: 'siamrajathanee.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.siamrajathanee.com',
    },
    {
        img: '/images/portfolio/investor.dtac.co.th.png',
        title: 'investor.dtac.co.th',
        subtitle: 'by shareinvestorthailand',
    },
    {
        img: '/images/portfolio/sustainability.ais.co.th.png',
        title: 'sustainability.ais.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://sustainability.ais.co.th',
    },
    {
        img: '/images/portfolio/tnrcondom.com.png',
        title: 'tnrcondom.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.tnrcondom.com',
    },
    {
        img: '/images/portfolio/www.fpcamt.co.th.png',
        title: 'www.fpcamt.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.fpcamt.co.th',
    },
    {
        img: '/images/portfolio/www.shrinkflexthailand.com.png',
        title: 'www.shrinkflexthailand.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.shrinkflexthailand.com',
    },
    {
        img: '/images/portfolio/www.wealthythai.com.png',
        title: 'wealthythai.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.wealthythai.com',
    },
    {
        img: '/images/portfolio/www.ylgbullion.co.th.png',
        title: 'www.ylgbullion.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.ylgbullion.co.th',
    },
    {
        img: '/images/portfolio/www.uac.co.th.png',
        title: 'www.uac.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.uac.co.th',
    },
    {
        img: '/images/portfolio/www.wp-energy.co.th.png',
        title: 'www.wp-energy.co.th',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.wp-energy.co.th',
    },
    {
        img: '/images/portfolio/www.ttwplc.com.png',
        title: 'www.ttwplc.com',
        subtitle: 'by shareinvestorthailand',
        link: 'https://www.ttwplc.com',
    },


    {
        img: '/images/portfolio/lbzero.png',
        title: 'lbzero.co',
        subtitle: 'by thanakorn',
    },
    {
        img: '/images/portfolio/ayothayatileandbrick.png',
        title: 'ayothayatileandbrick.com',
        subtitle: 'by thanakorn',
        link: 'https://www.ayothayatileandbrick.com',
    },
    {
        img: '/images/portfolio/ablockbyayothaya.png',
        title: 'ablockbyayothaya.com',
        subtitle: 'by thanakorn',
        link: 'https://ablockbyayothaya.com',
    },
    {
        img: '/images/portfolio/acemanasia.com.png',
        title: 'acemanasia.com',
        subtitle: 'by thanakorn',
    },
    {
        img: '/images/portfolio/sa-inter.png',
        title: 'sa-inter.com',
        subtitle: 'by thanakorn',
    },
    
];
