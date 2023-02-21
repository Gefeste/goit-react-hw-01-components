import propTypes from 'prop-types';
import { About, Avatar, Layout, UserName } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar }) => {
  return (
    <Layout className="profile">
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName className="name">{username}</UserName>
        <About className="tag">@{tag}</About>
        <About className="location">{location}</About>
      </div>
    </Layout>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};
