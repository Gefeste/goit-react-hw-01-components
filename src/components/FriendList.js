import propTypes from 'prop-types'

export const FriendList = ({ friends }) => {
    return (
<ul class="friend-list">
{friends.map(el => (
            <li class="item" key={el.id}>
            <span class="status">{el.isOnline}</span>
            <img class="avatar" src={el.avatar} alt="User avatar" width="48" />
            <p class="name">{el.name}</p>
          </li>
          ))}
</ul>
    );
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            isOnline: propTypes.bool.isRequired,
            avatar: propTypes.string.isRequired,
            name: propTypes.string.isRequired
        })
    )
}