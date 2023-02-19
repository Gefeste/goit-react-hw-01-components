

export const FriendList = ({ friends }) => {
    return (
<ul class="friend-list">
{friends.map(el => (
            <li class="item">
            <span class="status">{el.isOnline}</span>
            <img class="avatar" src={el.avatar} alt="User avatar" width="48" />
            <p class="name">{el.name}</p>
          </li>
          ))}
</ul>
    );
}