import "./Profile.css"
import Card from '../card/Card';

export default function Profile() {

    return (
        <>
            {/* Profile */}
            <section id="profile" className="profile-container container">
                <div className="division"></div>
                <div className="content-text">
                    <h2>Profile</h2>
                </div>
                <article className="profile-list">
                    <Card />
                </article>
            </section>
        </>
    )
}