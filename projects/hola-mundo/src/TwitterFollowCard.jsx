import {useState} from 'react';

export function TwitterFollowCard ({username,children,imageUrl,initialIsFollowing}){
     
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Following' : 'Follow';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return ( <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img src={imageUrl} 
           alt="my photo" 
           className='tw-followCard-avatar'/>
      <div className='tw-followCard-info'>
        <strong className='tw-followCard-name'>{children}</strong>
        <span className='tw-followCard-infoUserName'>@{username}</span>
      </div>
    </header>
    <aside>
      <button className = {buttonClassName} onClick={handleClick}>
        {text}
      </button>
    </aside>

  </article>
    )
}

// https://pbs.twimg.com/profile_images/1684363857353998336/bqY9c2xb_400x400.jpg