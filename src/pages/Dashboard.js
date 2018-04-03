import React from 'react';

import {Link} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
//import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import PlaceCardDashboard from '../components/PlaceCardDashboard'

import { connect } from 'react-redux'

import * as actions from '../actions/placesActions'

class Dashboard extends React.Component {

  constructor(props){

      super(props)

      this.loadPlaces()

  }

  loadPlaces(){

      this.props.dispatch(actions.loadAll())
  }

  places(){

      return this.props.places.map((place,index)=>{

        return(

          <PlaceCardDashboard place={place} key={index} onRemove={this.hidePlace}></PlaceCardDashboard>
        )

      })
  }

	render(){

		return (

      <div>

        <Link to="/new" >

          <FloatingActionButton secondary = {true} className = "boton-new" >
            <ContentAdd />
          </FloatingActionButton>


        </Link>



        <div className = "Header-background">
          
          <div  className = "container1" style={{ "width":"70%", "margin" : "0 auto"}} >

            
            <div className = "dashboard-buttons" style={{ "width":"25%" }} >

              <FlatButton label="Explorar" />
              <FlatButton label="favoritos" />
              <FlatButton label="Visitas Previas" />

            </div>

            <div className = "dashboard-cards" style={{ "width":"65%" }} >

              {this.places()}
              
              
            </div>
            

            

          </div>
        
        </div>
        

      </div>

      

		)
	}

}


function mapStateToProps(state,ownProps){

  return {

    places: state.places
  }
}

export default connect(mapStateToProps)(Dashboard)


