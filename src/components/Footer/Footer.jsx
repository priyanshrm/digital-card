import fbIcon from '../../assets/Facebook Icon.png';
import githubIcon from '../../assets/GitHub Icon.png';
import twitterIcon from '../../assets/Twitter Icon.png';
import igIcon from '../../assets/Instagram Icon.png';

export default function Footer(){
    const twitterUrl = 'https://twitter.com/priyanshrajcode'
    const githubUrl = 'https://github.com/priyanshrm'
    const instagramUrl = 'https://instagram.com/priyanshrajmahendra'
    const facebookUrl = 'https://www.facebook.com/priyanshrajmahendra'
    function twitterClick(params) {
        window.open(twitterUrl, '_blank')
    }
    function githubClick(params) {
        window.open(githubUrl, '_blank')
    }
    function igClick(params) {
        window.open(instagramUrl, '_blank')
    }
    function facebookClick(params) {
        window.open(facebookUrl, '_blank')
    }
    return (
        <footer>
            <img src={twitterIcon} onClick={twitterClick} />
            <img src={fbIcon} onClick={facebookClick} />
            <img src={igIcon} onClick={igClick} />
            <img src={githubIcon} onClick={githubClick} />
        </footer>
    )
}