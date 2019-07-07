import React from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'
import {Link} from 'react-router-dom'


function PhotoWall(props){
  return <div>

  {/*<button onClick={props.onNavigate} className="addIcon"></button>*/}
  <div className="photoGrid">
  {props.posts.map((post,index)=><Photo key={index} post={post} onRemovePhoto={ props.onRemovePhoto}/>)}
  
  </div>

  <Link to="/AddPhoto">
  <button className="addMorePhotos">Add More Photos</button>
  </Link>
  </div>
}

PhotoWall.propTypes={
  posts:PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}



export default PhotoWall
