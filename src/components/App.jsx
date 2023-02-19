import data from '../data';
import user from '../user';
import friends from '../friends';
import transactions from '../transactions';
import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import { Information } from "./Information";
import { FriendList } from "./FriendList";
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
return (
  <div>
   <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
   </div>
   <div>
    <Information 
    stats={user.stats}
    />
   </div>
    <div>
      <Statistics 
      title="Upload stats"
      stats={data}
      /> 
    </div>
    <div>
      <FriendList
      friends={friends}
      />
    </div>
    <div>
    <TransactionHistory 
    items={transactions} />
    </div>
  </div>
  );
};
