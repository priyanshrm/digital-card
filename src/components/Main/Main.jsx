import mailImg from '../../assets/Mail.png'
import linkedinImg from '../../assets/linkedin.png'

export default function Main() {
    const linkedinUrl = 'https://www.linkedin.com/in/priyanshrajmahendra/'
    const emailId = 'priyanshmahendra@gmail.com'

    function linkedinClick(params) {
        window.open(linkedinUrl, '_blank')
    }

    function emailClick(params) {
        window.location.href = `mailto:${emailId}`;
    }


    return (
        <main>
            <h3 className="name">Priyansh Raj Mahendra</h3>
            <h5 className="job">Software Engineer</h5>
            <h6 className="website">(Python, Reactjs, Deep Learning)</h6>
            <div className="buttons">
                <button className='mail-btn' onClick={emailClick}>
                    <img src={mailImg} alt="mail-png"></img>
                    <p>Email</p>
                </button>
                <button className='linkedin-btn' onClick={linkedinClick}>
                    <img src={linkedinImg} alt="linkin-png"></img>
                    <p>LinkedIn</p>
                </button>
            </div>
            <div className='main-txt'>
                <h4>About</h4>
                <p>I am a coder, and I believe that the power to build lies within the lines of code 
                    that I create. With every keystroke, I am able to bring my ideas to life, 
                    to solve complex problems and to make the impossible, possible. </p>
                <h4>Interests</h4>
                <p>Football fan. Music scholar. Internet fanatic. Pop culture ninja. Coffee fanatic. Finance enthusiastic. </p>
            </div>
        </main>
    )
}