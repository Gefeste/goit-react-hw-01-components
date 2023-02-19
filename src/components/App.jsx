import { Profile } from "./Profile";
import { Statistics } from "./Statistics";
import data from '../data'
import user from '../user'
export const App = () => {
return (
  <div>
   <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
   </div>; 
    <div>
      <Statistics 
      title="Up"
      stats={data}
      /> 
    </div>;
  </div>

  );
};
