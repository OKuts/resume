export const Education = () =>{
    const education = [
        ['1992', 'engineer', 'Military Institute of Railway Troops'],
        ['2008', 'economist', 'Ukrainian State University of Railway Transport'],
        ['2020', 'Front end pro', 'Hillel IT School'],
        ['2020', 'HTML for JS developers', 'ItGid'],
        ['2020', 'JAVASCRIPT V.2.0', 'ItGid'],
        ['2020', 'OOP in JS', 'ItGid'],
        ['2020', 'NODE.JS /part 1/', 'ItGid'],
        ['2020', 'REACT. LITE LEVEL', 'ItGid'],
        ['2021', 'JS/FE 2020 Q3 (JAVASCRIPT)', 'RS School '],
        ['2021', 'Комплексный курс по React с современными технологиями', 'Lectrum'],
    ]
    const educationJSX = education.map((item, i) => {
        return (
            <div className="school" key={ i }>
                <div className="year">{item[0]}</div>
                <div className="course">{item[1]}</div>
                <div className="school-name">{item[2]}</div>

            </div>
        )
    })

    return (
        <section className="education">
            <h3>Education</h3>
            {educationJSX}

        </section>
    )
}