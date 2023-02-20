import { GlobalStyle } from './GlobalStyles';
import data from '../data';
import user from '../user';
import friends from '../friends';
import transactions from '../transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { Information } from './Information/Information';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <div>
        <GlobalStyle />
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
      </div>
      <div>
        <Information stats={user.stats} />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
