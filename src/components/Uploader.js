import React from 'react'

import RaisedButton from 'material-ui/RaisedButton';

export default class Uploader extends React.Component{

	constructor(props){

		super(props)

		this.state = {
  
  			file: {}
		}

		this.openInput = this.openInput.bind(this)
		this.handleFile = this.handleFile.bind(this)

	}

	openInput(){

		this.refs.file.click()
	}

	handleFile(ev){

		let file = ev.target.files[0]
		if (!file) return
		
		//console.log(file)

		this.setState ({

			file: file
		})

		this.props.getFile(file)
	}



	render(){

		return(

			<div>

				<input type="file" ref="file" style={{"display" : "none"}}

					   onChange = {this.handleFile}
				></input>

				<span style={{"marginRight" : ".5em"}}>{this.state.file.name}</span>

				<RaisedButton label={this.props.label} primary={true} 
				            style = {{'marginTop':'2em'}}
				            onClick = {this.openInput}
				/>
				
			</div>
		)
	}
}