import propTypes from 'prop-types'

export const Statistics = ({ stats, title }) => {
  
    return (

        <section class="statistics">
          {title.length > 0 && (
            <h2 class="title">{title}</h2>
          )}
        
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
stats: propTypes.arrayOf(
    propTypes.shape({
        label: propTypes.string.isRequired,
        percentage: propTypes.number.isRequired
    })
)
}