import { Layout } from 'components/Profile/Profile.styled';
import propTypes from 'prop-types';
import { Item, List } from './Information.styled';

export const Information = ({ stats: { followers, views, likes } }) => {
  return (
    <Layout>
      <List class="stats">
        <Item>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </Item>
        <Item>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </Item>
        <Item>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
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
