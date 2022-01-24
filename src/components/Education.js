export const Education = () =>{
    const education = [
        ['1992', 'engineer', 'Military Institute of Railway Troops'],
        ['2008', 'economist', 'Ukrainian State University of Railway Transport'],
        ['2020', 'Front end pro', 'Hillel IT School', 'https://certificate.ithillel.ua/view/51707233'],
        ['2020', 'HTML for JS developers', 'ItGid', 'https://itgid.info/img/certificate/05_reafbd999q.png'],
        ['2020', 'JavaScript V.2.0', 'ItGid','https://itgid.info/img/certificate/01_v32dn62xqa.png'],
        ['2020', 'OOP JavaScript', 'ItGid', 'https://itgid.info/img/certificate/03_g89zd4u462.png'],
        ['2020', 'Node.JS /part 1/', 'ItGid', 'https://itgid.info/img/certificate/04_61ttdd1qwn.png'],
        ['2020', 'React. Lite level', 'ItGid', 'https://itgid.info/img/certificate/02_igr1148.png'],
        ['2021', 'JS/FE 2020 Q3 (JavaScript)', 'RS School','https://app.rs.school/certificate/qxp4pq6t'],
        ['2021', 'ReactJS', 'ItGid', 'https://itgid.info/img/certificate/08_zsn9wmqq61.png'],
        ['2021', 'Комплексный курс по React с современными технологиями', 'Lectrum','https://lectrum.io/certificates/rtx/19-aug-2021/rtx8-oleksandr-kuts.pdf'],
        ['2021', 'JavaScript и TypeScript для продвинутых с современными подходами разработки', 'Lectrum', 'https://lectrum.io/certificates/js2lvl/28-sep-2021/js2lvl3-oleksandr-kuts.pdf'],
        ['2022', 'Продвинутый курс по Next.js v.12: cоздание SPA & SSR-приложений', 'Lectrum'],
        ];

    const schools = {
        'Hillel IT School': 'https://dnipro.ithillel.ua/',
        'ItGid':            'https://itgid.info/',
        'Lectrum':          'https://lectrum.io/',
        'RS School':        'https://rs.school/',
    };

    const schoolName = (school) => {
        if (school in schools) {
            return (
                <a
                    href={schools[school]}
                    alt={school}
                    target="_blank"
                    rel="noreferrer">
                    {school}
                </a>
            );
        };
        return school;
    };

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
                            <span>{item[1]}</span>
                            </a>
                        : item[1]}
                </div>
                <div className="school-name">{schoolName(item[2])}</div>
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
