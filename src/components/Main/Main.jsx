import mailImg from '../../assets/Mail.png'
import linkedinImg from '../../assets/linkedin.png'

export default function Main() {
    return (
        <main>
            <h3 className="name">Priyansh Raj Mahendra</h3>
            <h5 className="job">Frontend Developer</h5>
            <h6 className="website">priyansh.website</h6>
            <div className="buttons">
                <button className='mail-btn'>
                    <img src={mailImg} alt="mail-png"></img>
                    <p>Email</p>
                </button>
                <button className='linkedin-btn'>
                    <img src={linkedinImg} alt="linkin-png"></img>
                    <p>LinkedIn</p>
                </button>
            </div>
            <div className='main-txt'>
                <h4>About</h4>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h4>Interests</h4>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}