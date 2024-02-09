import './App.css';
import './index.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {

  return (
    <section className='App'>
    <TwitterFollowCard 
      initialIsFollowing = {true} 
      username='nbuitragob' 
      imageUrl='https://pbs.twimg.com/profile_images/1684363857353998336/bqY9c2xb_400x400.jpg'>
        Nicolas B
    </TwitterFollowCard>
      
  
    <TwitterFollowCard
      isFollowing = {false} 
      username='nbuitragob2'
      name='Nicolas B2'
      imageUrl='https://pbs.twimg.com/profile_images/1684363857353998336/bqY9c2xb_400x400.jpg'>
     Nicolas B2
    </TwitterFollowCard>
    </section>
    
  );
}