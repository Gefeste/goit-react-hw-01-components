// import data from '../data'
import propTypes from 'prop-types'

export const Statistics = ({ stats }) => {
  
    return (

        <section class="statistics">
        <h2 class="title">Upload stats</h2>
      
        <ul class="stat-list">
          {stats.map(el => (
            <li class="item" key={el.id}>
            <span class="label">{el.label}</span>
            <span class="percentage">{el.percentage}%</span>
          </li>
          ))}
          
        </ul>
      </section>
      
    );
};

Statistics.propTypes = {
data: propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired
    })
)
}