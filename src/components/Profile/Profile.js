import propTypes from 'prop-types';
import { About, Avatar, Layout, UserName } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar }) => {
  return (

      <Layout class="profile">
        <div class="description">
          <Avatar
            src={avatar}
           alt="User avatar"
           class="avatar"
           />
            <UserName class="name">{username}</UserName>
            <About class="tag">@{tag}</About>
            <About class="location">{location}</About>
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