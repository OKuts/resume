import momentum from '../img/momentum.png';
import calculator from '../img/calculator.png';
import shelter from '../img/shelter.png';
import virtualKeyboard from '../img/virtual_keyboard.png';
import gemPuzzle from '../img/gem_puzzle.png';
import cssSimulator from '../img/css_simulator.png';
import pizza from '../img/food.png';
import shop from '../img/shop.png';
import bank from '../img/bank.png';
import travel from '../img/travel.png';

const projects = [
    [ 'Momentum', momentum, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/momentum/" ],
    [ 'Calculator', calculator, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/calculator/" ],
    [ 'Shelter', shelter, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/shelter/" ],
    [ 'Virtual keyboard', virtualKeyboard, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/virtual-keyboard/" ],
    [ 'Gem puzzle', gemPuzzle, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/gem-puzzle/" ],
    [ 'CSS simulator', cssSimulator, "https://rolling-scopes-school.github.io/okuts-JS2020Q3/rs-css/" ],
    [ 'Fast food order', pizza, 'https://okuts.github.io/pizza/build/' ],
    [ 'Internet shop', shop, 'https://okuts.github.io/shop/dist/' ],
    [ 'Iron bank', bank, 'https://okuts.github.io/iron_bank/dist/' ],
    [ 'Travel', travel, 'https://github.com/OKuts/group_project' ],
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

export const JavaScript = () =>{
    return (
        <section className="experience">
            <h3>Experience: JavaScript</h3>
            { proectsJSX() }
        </section>
    )
}