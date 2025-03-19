import styles from './Header.module.css'

const Header = (props) => {
  
  return (
    <header>
        <p className={styles.text}>{props.headerText}</p>
        <img className={styles.perfil} src={props.headerPerfil} alt="" />
    </header>
  )
}

export default Header
