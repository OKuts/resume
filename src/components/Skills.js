
export const Skills = (props) =>{
    const skills = [
        ['HTML', 4],
        ['CSS', 4],
        ['JS', 4],
        ['TS', 3],
        ['React', 4],
        ['NodeJS', 3],
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
        <section className="skilles">
            <h3>Skills</h3>
            <div>
                <a href='https://www.codewars.com/users/OKuts'>
                    <img src="https://www.codewars.com/users/OKuts/badges/small" alt="codewars"/>
                </a>
            </div>
            { skillsJSX }
        </section>

    )
}
