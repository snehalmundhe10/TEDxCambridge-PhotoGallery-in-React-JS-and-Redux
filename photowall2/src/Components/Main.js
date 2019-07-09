import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {removePost} from  '../redux/actions'


class Main extends Component{
  constructor(props){
    super(props);
    console.log('constructor')
     
  }

  // componentDidMount()
  //  {
  //   this.props.removePost(1)
  //
  // }


   render(){

     return (
    <div>
     <Route exact path="/" render={() => (
       <div>
       <Title title={'TEDxCambridge'}/>
       {/*<PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>*/}
       <PhotoWall {...this.props}/>
       </div>
     )}/>

       <Route path= "/AddPhoto" render = {({history}) => (
  <AddPhoto {...this.props} onHistory={history}/>
    )}/>

    </div>
   )
   }
}


export default Main
