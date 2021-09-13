import currencyExchange from '../img/currency_exchange.png';
import minesweeper from '../img/minesweeper.png';
import weather from '../img/weather.png';

const projects = [
    [ 'Currency exchange', currencyExchange, "https://kuts-c05da.firebaseapp.com/" ],
    [ 'Minesweeper', minesweeper, "https://okuts.github.io/react-game/" ],
    [ 'Weather', minesweeper, "https://okuts.github.io/weather/build" ],
]

const proectsJSX = () => {
    return (
        <div className="projects">
            {projects.map(item => (
                <div key={item[0]}  className="project">
                    <a href={item[2]}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={item[1]} alt={item[0]}/>
                        <span>{item[0]}</span>
                    </a>
                </div>
            ))}
        </div>
    )
}

export const ReactProjects = () =>{
    return (
        <section className="experience">
            <h3>Experience: React</h3>
            { proectsJSX() }
        </section>
    )
}
