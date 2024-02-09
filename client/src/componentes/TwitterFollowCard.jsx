import {useState} from "react";
import './css/twitterFollowCard.css';
export function TwitterFollowCard({children,formatUserName,userName,  initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
    
 

    const text = isFollowing ? "Siguiendo" : "Seguir"; //Esto es un if else forma ternaria
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button" ;

    const handleClick = ()=>{
        setIsFollowing(!isFollowing);
    }
    return(
        
        <article className="tw-followCard">
            
            <header className="tw-followCard-header">
                <img  className="tw-followCard-avatar" src={`https://unavatar.io/twitter/${userName}`} alt="avatar"></img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                <span className="tw-followCard-text">{text}</span>
                <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}