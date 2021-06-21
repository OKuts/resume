import logo  from "../img/kuts.svg";

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="img">
                <img src={logo} alt="Oleksandr Kuts"/>
            </div>
            <div className="slogan">
                <p>the more I learn technologies in programming,
                the more clearly I understand that my middle is still far away</p>
            </div>
        </footer>
    )
}