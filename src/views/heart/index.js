import './index.css'

export const Heart = (props) => {
  return (
    <div className='heart-body'>
      <div className='card'>
        <div className='content' >
          <div className='front'>
            <div className='person-head'></div>
            <div className='hexa-parent'>
              <div className='person-avatar hexagon'></div>
            </div>
            <div className='person-message'></div>
          </div>
          <div className='back'>
            <div class="heart red"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
