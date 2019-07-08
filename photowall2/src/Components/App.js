import Main from './Main'
import {connect} from 'react-redux'
function mapStateToProps(state){
   return {
     posts:state
   }
}
{/*App os the snapshot or copy of the Main component, Main receives the prop-(posts)
  and the connect method actually does not modify the Main component with props
  it just connects the Main component to the connected component created by the redux/generates
  its connected component copy that connects it to the store of the redux-so basically App is the
  clone of the Main component which has assigned the props-but the App is 'connected component'-component of
  redux*/}
const App=connect(mapStateToProps)(Main)
export default App
