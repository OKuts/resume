import momentum from '../img/momentum.png';
import calculator from '../img/calculator.png';
import shelter from '../img/shelter.png';
import virtualKeyboard from '../img/virtual_keyboard.png';
import gemPuzzle from '../img/gem_puzzle.png';
import cssSimulator from '../img/css_simulator.png';
import currencyExchange from '../img/currency_exchange.png';
import minesweeper from '../img/minesweeper.png';

const projects = [
    [ 'Momentum', momentum, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/momentum/" ],
    [ 'Calculator', calculator, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/calculator/" ],
    [ 'Shelter', shelter, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/shelter/" ],
    [ 'Virtual keyboard', virtualKeyboard, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/virtual-keyboard/" ],
    [ 'Gem puzzle', gemPuzzle, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/gem-puzzle/" ],
    [ 'CSS simulator', cssSimulator, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/rs-css/" ],
    [ 'Currency exchange', currencyExchange, "https://kuts-c05da.firebaseapp.com/" ],
    [ 'Minesweeper', minesweeper, "https://okuts.github.io/react-game/" ],
]

const proectsJSX = () => {
    return (
        <div className="projects">
            {projects.map(item => (
                <div key={item[0]}  className="project">
                    <a href={item[2]}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={item[1]} alt="Momentum"/>
                        <span>{item[0]}</span>
                    </a>
                </div>
            ))}
        </div>
    )
}

export const Experience = () =>{
    return (
        <section className="experience">
            <h3>Experience</h3>
            { proectsJSX() }
        </section>
    )
}