import './index.css'

export const Heart = (props) => {
  return (
    <div className='heart-body'>
      <div className='card'>
        <div className='content' >
          <div className='front'>
            <div className='person-head'>Head</div>
            <div className='person-avatar'>Avatar</div>
            <div className='person-message'>Message</div>
          </div>
          <div className='back'>
            <div class="heart red"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
