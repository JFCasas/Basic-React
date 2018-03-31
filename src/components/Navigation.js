import React from 'react'

import MyAppBar from './MyAppBar'

import { connect } from 'react-redux'

import { push } from 'react-router-redux'

class Navigation extends React.Component {

	constructor(props){

		super(props)

		this.goHome = this.goHome.bind(this)

		console.log(this.props.user.email)
	}

	goHome(){

      this.props.dispatch(push('/'))
  	}



	render(){

		return(

			<MyAppBar goHome = {this.goHome} user = {this.props.user}></MyAppBar>

		)
	}
}



function mapStateToProps(state,ownProps){

  return {

    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)
