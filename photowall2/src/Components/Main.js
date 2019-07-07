import React, {Component} from 'react';
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'



class Main extends Component{
  constructor(){
    super()
    this.state={
      posts : [{
       id: "0",
       description: " ",
       imageLink: "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/61f4f84fa3604cd3d321fa15a767696947a496e6_1600x1200.jpg?quality=90&w=260"
       }, {
       id: "1",
       description: " ",
       imageLink: "https://mk0atomicdesign69dg3.kinstacdn.com/wp-content/uploads/2018/04/TEDx-Cambridge-2018_Cirrus_Udon_Fog_a0bb.jpg"
       }, {
       id: "2",
       description: " ",
       imageLink: "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/61f4f84fa3604cd3d321fa15a767696947a496e6_1600x1200.jpg?quality=90&w=260"
     },
     {
    id: "3",
    description: " ",
    imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
    }],
       screen:'photos'
    }
    this.removePhoto=this.removePhoto.bind(this);

    console.log('constructor')
  }
  removePhoto(postRemoved){
    console.log(postRemoved.description)
    this.setState((state)=>(
    {
      posts:state.posts.filter(post => post !== postRemoved)
    }
    ));
  }

addPhoto(postSubmitted){
  this.setState(state => ({
    posts:state.posts.concat([postSubmitted])
  }))

}

componentDidMount() {
}

componentDidUpdate(prevProps, prevState) {
console.log(prevState.posts)
console.log(this.state)
}


   render(){
     console.log('render')
     return (
    <div>
     <Route exact path="/" render={() => (
       <div>
       <Title title={'TEDxCambridge'}/>
       <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>
       </div>
     )}/>

     <Route path= "/AddPhoto" render = {({history}) => (
 <AddPhoto onAddPhoto={(addedPost) => {
 this.addPhoto(addedPost)
 history.push('/')
 }}/>
 )}/>
    </div>
   )
   }
}


export default Main
