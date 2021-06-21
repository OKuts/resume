import face  from "../img/Kuts.jpg";

export const Header = () => {

    return (
        <>
            <header className="header">
                <div className="face">
                    <img src={face} alt="Oleksandr Kuts"/>
                </div>
                <div>
                    <h1>OLEKSANDR KUTS</h1>
                    <h2>... want to become a <br/><i>Javascript (React)</i> developer</h2>
                </div>
            </header>
        </>
    )
}