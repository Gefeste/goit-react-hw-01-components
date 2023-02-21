import { Layout } from 'components/Profile/Profile.styled';
import propTypes from 'prop-types';
import { Item, List } from './Information.styled';

export const Information = ({ stats: { followers, views, likes } }) => {
  return (
    <Layout>
      <List className="stats">
        <Item>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </Item>
        <Item>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </Item>
        <Item>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </Item>
      </List>
    </Layout>
  );
};

Information.propTypes = {
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }),
};
