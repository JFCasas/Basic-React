import React from 'react';

import {Link} from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import data from '../requests/places'
import PlaceCard from '../components/PlaceCard'

export default class Dashboard extends React.Component {

  constructor(props){

      super(props)

      this.state = {

        places:data.places
      
      }
  }

  places(){

      return this.state.places.map((place,index)=>{

        return(

          <PlaceCard place={place} index={index} onRemove={this.hidePlace}></PlaceCard>
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

            <div className = "dashboard-cards" style={{ "width":"65%", "backgroundColor" : "orange", "height" : "10vh" }} >

              {this.places()}
              
              
            </div>
            

            

          </div>
        
        </div>
        

      </div>

      

		)
	}

}


