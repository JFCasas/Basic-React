import React from 'react'

import { connect } from 'react-redux'

import VisitModal from '../components/VisitModal'


class VisitModalContainer extends React.Component {

	

	render(){

		return(

			<VisitModal isOpen = {this.props.isOpen} closeModal = {this.props.closeModal}
							place = {this.props.place}  
							dispatch = {this.props.dispatch}

			>
				

			</VisitModal>
			


		)
	}
}

function mapStateToProps(state,ownProps){

  return {

    visits : state.visits
    
  }
}

export default connect(mapStateToProps)(VisitModalContainer) 