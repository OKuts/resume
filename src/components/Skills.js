
export const Skills = (props) =>{
    const skills = [
        ['HTML', 4],
        ['CSS', 4],
        ['JS', 4],
        ['TS', 3],
        ['React', 4],
        ['Next', 2],
        ['NodeJS', 3],
        ['GraphQL', 2],
        // ['MongoDb', 2],
        // ['PostgresDb', 2],
        ['Git', 3],
    ];

    const skillsJSX = skills.map((skille, i) => {
        return (
            <p className="skille" key={i}>
                {'☑'.repeat(skille[1])}
                {'☐'.repeat(5 - skille[1])}
                <span>{skille[0]}</span>
            </p>
        )
    })
    return (
        <section className="skills">
            <h3>Skills</h3>
            <p className='codeWars'>
                <a href='https://www.codewars.com/users/OKuts'>
                    <img src="https://www.codewars.com/users/OKuts/badges/micro" alt="codewars"/>
                </a>
            </p>
            { skillsJSX }
        </section>
    )
}
