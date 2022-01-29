import courses from '../img/courses.png'

const projects = [
    ['Cursus', courses, "oleksandr-kuts-48kc437v9-okuts.vercel.app"],
]

const proectsJSX = () => (
    <div className="projects">
        {projects.map(item => (
            <div key={item[0]} className="project">
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


export const NextProjects = () => (
    <section className="experience">
        <h3>Experience: Next</h3>
        {proectsJSX()}
    </section>
)
