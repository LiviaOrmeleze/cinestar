import './Footer.css';

const Footer = (props) => {
  return (
    <footer className="custom-footer">
      <p>Feito com ❤️ por  
        <a href={props.devLink} target="_blank" rel="noopener noreferrer"> 
          {props.devName}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
