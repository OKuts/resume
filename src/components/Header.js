import face from '../img/Kuts.jpg'

export const Header = () => (
    <>
        <header className="header">
            <div className="face">
                <img src={face} alt="Oleksandr Kuts"/>
            </div>
            <div>
                <h1>OLEKSANDR KUTS</h1>
                <h2><i>JavaScript (React)</i> developer</h2>
            </div>
        </header>
    </>
)

