import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="custom-footer">
      <p>
        Feito com ❤️ por 
        <a href={props.devLink} target="_blank" rel="noopener noreferrer">
          {props.devName}
        </a>
      </p>
      <p>
        <ion-icon name="heart"></ion-icon> {/* Ícone integrado */}
      </p>
      <nav>
        <a href="/ajuda">Central de Ajuda</a> | 
        <a href="/termos">Termos de Uso</a> | 
        <a href="/contato">Entre em Contato</a>
      </nav>
    </footer>
  );
}

export default Footer;
