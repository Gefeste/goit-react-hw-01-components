import { Layout } from 'components/Profile/Profile.styled';
import propTypes from 'prop-types';
import { Item, List, UserName } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Layout>
      <List className="friend-list">
        {friends.map(el => (
          <Item isOnline={el.isOnline} className="item" key={el.id}>
            <span className="status">{el.isOnline}</span>
            <img
              className="avatar"
              src={el.avatar}
              alt="User avatar"
              width="48"
            />
            <UserName className="name">{el.name}</UserName>
          </Item>
        ))}
      </List>
    </Layout>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};
