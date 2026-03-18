import styles from './styles.module.css';

export default function Profile({ github, name, desc }) {
    return (
        <a className={styles.profile} href={`https://github.com/${github}`} target='_blank'>
            <img alt={name} src={`https://github.com/${github}.png`} />
            <div>
                <h2>{name}</h2>
                <small title={desc}>{desc}</small>
            </div>
        </a>
    );
}
