import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from '../redux/actions'


class Main extends Component{
  constructor(){
    super()
    console.log('constructor')
  }

  componentDidMount(){
    this.props.dispatch(removePost(1))

  }


   render(){

     return (
    <div>
     <Route exact path="/" render={() => (
       <div>
       <Title title={'TEDxCambridge'}/>
       {/*<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>*/}
       <PhotoWall posts={this.props.posts}/>
       </div>
     )}/>

  {/*     <Route path= "/AddPhoto" render = {({history}) => (
  <AddPhoto onAddPhoto={(addedPost) => {
  this.addPhoto(addedPost)
  history.push('/')
  }}/>
)}/>*/}

    </div>
   )
   }
}


export default Main
