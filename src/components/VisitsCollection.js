import React from 'react'

import VisitCard from './VisitCard'

export default class VisitsCollection extends React.Component{

	visits(){

      return this.props.visits.map((visit,index)=>{

        return(

          <VisitCard visit={visit} key={index} ></VisitCard>
        )

      })
  }


	render(){

		return(

			<div>
				
				 {this.visits()}
			
			</div>

		)
	}
}