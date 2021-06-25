export const Education = () =>{
    const education = [
        ['1992', 'engineer', 'Military Institute of Railway Troops'],
        ['2008', 'economist', 'Ukrainian State University of Railway Transport'],
        ['2020', 'Front end pro', 'Hillel IT School', 'https://certificate.ithillel.ua/view/51707233'],
        ['2020', 'HTML for JS developers', 'ItGid'],
        ['2020', 'JAVASCRIPT V.2.0', 'ItGid','https://itgid.info/img/certificate/01_v32dn62xqa.png'],
        ['2020', 'OOP in JS', 'ItGid', 'https://itgid.info/img/certificate/03_g89zd4u462.png'],
        ['2020', 'NODE.JS /part 1/', 'ItGid', 'https://itgid.info/img/certificate/04_61ttdd1qwn.png'],
        ['2020', 'REACT. LITE LEVEL', 'ItGid', 'https://itgid.info/img/certificate/02_igr1148.png'],
        ['2021', 'JS/FE 2020 Q3 (JAVASCRIPT)', 'RS School ','https://app.rs.school/certificate/qxp4pq6t'],
        ['2021', 'Комплексный курс по React с современными технологиями', 'Lectrum'],
    ]
    const educationJSX = education.map((item, i) => {
        return (
            <div className="school" key={ i }>
                <div className="year">{item[0]}</div>
                <div className="course">
                    {item[3]
                        ? <a
                            href={item[3]}
                            alt="item[1]"
                            target="_blank"
                            rel="noreferrer">
                            {item[1]}</a>
                        : item[1]}
                </div>
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