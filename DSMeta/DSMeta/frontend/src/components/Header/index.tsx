import logo from "../../assets/img/logo.svg"
import "./styles.css"


function Header() {
    return(
        <header>
        <div className="logo-container">
            <img src={logo} alt="Logo DSMeta"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por
                <a href="https://github.com/falcaogodoy">GitHub/falcaogodoy</a>
            </p>
        </div>
    </header>
    ) 
  }
  
  export default Header