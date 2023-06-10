import "./Footer.css"

export default function Footer() {
    const footerIcon = [
        {
            name: "Github",
            src: process.env.PUBLIC_URL + `/assets/icon/social/github-white.svg`,
            href: "https://github.com/iamalbinnj"
        },
        {
            name: "Twitter",
            src: process.env.PUBLIC_URL + `/assets/icon/social/twitter-white.svg`,
            href: "ttps://twitter.com/iamalbinnj"
        },
        {
            name: "Linkedin",
            src: process.env.PUBLIC_URL + `/assets/icon/social/linkedin-white.svg`,
            href: "https://www.linkedin.com/in/albinnj"
        },
        {
            name: "Mail",
            src: process.env.PUBLIC_URL + `/assets/icon/social/mail-white.svg`,
            href: "mailto:iamalbinnj@gmail.com"
        },
    ]

    const year=new Date().getFullYear()
    return (
        <>
            {/* Footer */}
            <footer id="footer">
                <div className="container">
                    {/* Social Link */}
                    <div className="social">
                        {footerIcon.map((footer,index) => {
                            return (
                                <a href={footer.href} target="_blank" rel="noreferrer" key={index}><img src={footer.src} alt={footer.name} /></a>
                            )
                        })}
                    </div>
                    <p>Copyright &copy; Albin N J <span>{year}</span>, All rights reserved</p>
                </div>
            </footer>
        </>
    )
}