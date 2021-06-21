import momentum from '../img/momentum.png';
import calculator from '../img/calculator.png';
import shelter from '../img/shelter.png';
import virtualKeyboard from '../img/virtual_keyboard.png';
import gemPuzzle from '../img/gem_puzzle.png';
import cssSimulator from '../img/css_simulator.png';
import currencyExchange from '../img/currency_exchange.png';
import minesweeper from '../img/minesweeper.png';

export const Experience = () =>{

    return (
        <section className="experience">
            <h3>Experience</h3>
                <div className="projects">
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/momentum/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={momentum} alt="Momentum"/>
                            <span>Momentum</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/calculator/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={calculator} alt="Calculator"/>
                            <span>Calculator</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/shelter/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={shelter} alt="Shelter"/>
                            <span>Shelter</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/virtual-keyboard/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={virtualKeyboard} alt="Virtual Keyboard"/>
                            <span>Virtual Keyboard</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/gem-puzzle/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={gemPuzzle} alt="Gem puzzle"/>
                            <span>Gem puzzle</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://rolling-scopes-school.github.io/okuts-JS2020Q3/rs-css/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={cssSimulator} alt="CSS simulator"/>
                            <span>CSS simulator</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://kuts-c05da.firebaseapp.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={currencyExchange} alt="Currency exchange"/>
                            <span>Currency exchange</span>
                        </a>
                    </div>
                    <div className="project">
                        <a href="https://okuts.github.io/react-game/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={minesweeper} alt="Minesweeper"/>
                            <span>Minesweeper</span>
                        </a>
                    </div>
                </div>
        </section>
    )
}