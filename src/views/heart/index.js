import { useContext } from 'react'
import './index.css'
import { AuthContext } from '../../providers/use-auth'

export const Heart = (props) => {
  const { user } = useContext(AuthContext)
  let url = ''

  switch (user.username) {
    case 'aiinauu':
      url = process.env.REACT_APP_MEE_AVATAR_URL
      break
    case 'vnanne':
      url = process.env.REACT_APP_VNANNE_AVATAR_URL
      break
    case 'gogi':
      url = process.env.REACT_APP_GOGI_AVATAR_URL
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
