import styles from './Header.module.css'

const Header = (props) => {
  
  return (
    <header>
        <img className={styles.perfil} src={props.headerPerfil} alt="" />
        {/* <img className="perfil position-absolute d-flex align-items-center" src={props.headerPerfil} alt="" /> */}
    </header>
  )
}

export default Header
