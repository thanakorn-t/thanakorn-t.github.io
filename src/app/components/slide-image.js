import Image from 'next/image';
import styles from './slide-image.module.css';

export default function SlideImage(props) {
    return (
        <Image
            src={props.image}
            width="450"
            height="247"
            className={styles.slide__image}
            alt={props.image}
        />
    );
}