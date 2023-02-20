import { Layout } from 'components/Profile/Profile.styled'
import propTypes from 'prop-types'
import { Item, List, Title } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  
    return (
<Layout>
        <section class="statistics">
          {title.length > 0 && (
            <Title class="title">{title}</Title>
          )}
        
        <List class="stat-list">
            {stats.map(el => (
              <Item class="item" key={el.id}>
              
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
               
          </Item>
          ))}
          
        </List>
      </section>
      </Layout>
    );
};

Statistics.propTypes = {
stats: propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired
    })
)
}