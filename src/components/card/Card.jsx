import "./Card.css"

export default function Card() {
    const profileList = [
        {
            className: "location",
            img: "/assets/icon/location.svg",
            title: "Location",
            tag: ["Kerala, India"]
        },
        {
            className: "technical",
            img: "/assets/icon/settings.svg",
            title: "Technical Interest",
            tag: ["Web", "Backend"]
        },
        {
            className: "programing",
            img: "/assets/icon/keyboard.svg",
            title: "Programming Languages",
            tag: [
                {
                    icon: "assets/icon/language/javascript.svg",
                    alt: "Javascript Icon",
                    name: "Javascript"
                },
                {
                    icon: "assets/icon/language/python.svg",
                    alt: "Python Icon",
                    name: "Python"
                },
                {
                    icon: "assets/icon/language/html.svg",
                    alt: "HTML Icon",
                    name: "HTML"
                },
                {
                    icon: "assets/icon/language/css.svg",
                    alt: "CSS Icon",
                    name: "CSS"
                }
            ]
        },
        {
            className: "expertise",
            img: "/assets/icon/bulb.svg",
            title: "Expertise in",
            tag: [
                {
                    icon: "assets/icon/language/react.svg",
                    alt: "React Icon",
                    name: "React"
                },
                {
                    icon: "assets/icon/language/bootstrap.svg",
                    alt: "Bootstrap Icon",
                    name: "Bootstrap"
                },
                {
                    icon: "assets/icon/language/git.svg",
                    alt: "Git Icon",
                    name: "Git"
                },
                {
                    icon: "assets/icon/language/node.svg",
                    alt: "Node js Icon",
                    name: "Node js"
                }
            ]
        },
        {
            className: "university",
            img: "/assets/icon/university.svg",
            title: "University",
            tag: ["Sahrdaya College of Advanced Studies"]
        },
        {
            className: "graduation",
            img: "/assets/icon/medal.svg",
            title: "Graduation",
            tag: ["Bachelor of Computer Application (BCA)"]
        },
    ]

    return (
        <>
            {profileList.map((card, index) => {
                return (
                    <div className="card" key={index}>
                        <div className="profile-info">
                            <div className="profile-bio">
                                <i className={`${card.className} icon`}>
                                    <img src={process.env.PUBLIC_URL + `${card.img}`} className={`${card.className} svg`} alt={card.title} />
                                </i>
                                <h3 className={`${card.className} title`}>{card.title}</h3>
                                <div className="details">
                                    {Array.isArray(card.tag) ? (
                                        card.tag.map((tag, index) => (
                                            <p className={`${card.className} tag`} key={index}>
                                                {typeof tag === 'object' ? (
                                                    <>
                                                        <i className="icon-tag">
                                                            <img src={tag.icon} className={`${card.className} svg-icon`} alt={tag.alt} />
                                                        </i>
                                                        {tag.name}
                                                    </>
                                                ) : (
                                                    tag
                                                )}
                                            </p>
                                        ))
                                    ) : (
                                        <p className={`${card.className} tag`}>{card.tag}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}