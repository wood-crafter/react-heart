import { useContext } from 'react'
import './index.css'
import { AuthContext } from '../../providers/use-auth'

export const Heart = (props) => {
  const { user } = useContext(AuthContext)
  let url = ''
  let personName

  switch (user.username) {
    case 'aiinauu':
      url = process.env.REACT_APP_MEE_AVATAR_URL
      personName = process.env.REACT_APP_MEE_TITLE
      break
    case 'vnanne':
      url = process.env.REACT_APP_VNANNE_AVATAR_URL
      personName = process.env.REACT_APP_VNANNE_TITLE
      break
    case 'gogi':
      url = process.env.REACT_APP_GOGI_AVATAR_URL
      personName = process.env.REACT_APP_GOGI_TITLE
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
            <div className='person-head'>
              <div className='person-name'>{ personName }</div>
            </div>
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
