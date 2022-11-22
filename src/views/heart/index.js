import { useContext } from 'react'
import './index.css'
import { AuthContext } from '../../providers/use-auth'

export const Heart = (props) => {
  const { user } = useContext(AuthContext)
  let url = ''

  switch (user.username) {
    case 'aiinauu':
      url = "/mee-avatar.jpg"
      break
    case 'vnanne':
      url = "/vnanne-avatar.jpg"
      break
    case 'gogi':
      url = "/gogi-avatar.jpg"
      break
  }

  const myStyle = {
    backgroundImage: `url(${url})`,
  }

  return (
    <div className='heart-body'>
      <div className='card'>
        <div className='content' >
          <div className='front'>
            <div className='person-head'></div>
            <div className='hexa-parent'>
              <div className='person-avatar hexagon' style={myStyle}></div>
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
