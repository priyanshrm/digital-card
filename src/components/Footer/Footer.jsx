import fbIcon from '../../assets/Facebook Icon.png';
import githubIcon from '../../assets/GitHub Icon.png';
import twitterIcon from '../../assets/Twitter Icon.png';
import igIcon from '../../assets/Instagram Icon.png';

export default function Footer(){
    return (
        <footer>
            <img src={twitterIcon}></img>
            <img src={fbIcon}></img>
            <img src={igIcon}></img>
            <img src={githubIcon}></img>
        </footer>
    )
}