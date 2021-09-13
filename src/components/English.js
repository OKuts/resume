import era from '../img/english_era.png';
import prometeus from '../img/english_prometeus.png'

const english = [
  [era,'https://s3-eu-west-1.amazonaws.com/ed-era/downloads/89e5ce273335437ca397a01ca4de5075/Certificate.pdf'],
  [prometeus, 'https://courses.prometheus.org.ua:18090/downloads/efe669548f5244038f7eef7a9996d52d/Certificate.pdf']
];

export const English = () =>{

    return (
        <section>
          <h3>English level</h3>
          <div className="english">
            {english.map(item => (
                <a href={item[1]}
                   target="_blank"
                   rel="noopener noreferrer">
                  <img src={item[0]} alt={item[0]}/>
                </a>
            ))}
          </div>
        </section>
    )
}
