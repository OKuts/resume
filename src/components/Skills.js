
export const Skills = (props) =>{
    const skills = [
        ['HTML', 3],
        ['CSS', 3],
        ['JS', 3],
        ['TS', 1],
        ['React', 2],
        ['NodeJS', 1],
        ['Git', 1],
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
            { skillsJSX }
            <img src="https://www.codewars.com/users/OKuts/badges/micro" alt="codewars"/>
        </section>

    )
}