export const Contacts = () =>{

    return (
        <section>
            <h3>Contacts</h3>
            <section className="contacts">
                <ul>
                    <li>
                        <i className="fas fa-mobile-alt"></i>
                        <a href="tel:+380679148557">+38 067 9148557</a>
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:kuts.ol.vas@gmail.com">kuts.ol.vas@gmail.com</a>
                    </li>
                    <li>
                        <i class="fab fa-github-square"></i>
                        <a href="https://github.com/OKuts?tab=repositories">OKuts</a>
                    </li>
                    <li>
                        <i class="fab fa-gitlab"></i>
                        <a href="https://gitlab.com/dashboard/projects">O.Kuts</a>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i>
                        Novomoskovsk (Dnipro), Ukraine
                    </li>
                </ul>
            </section>
        </section>

    )
}