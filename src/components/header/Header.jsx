import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header>
        <p className={styles.text}>{props.headerText}</p>
        <a href={props.headerLink}></a>
    </header>
  )
}

export default Header
