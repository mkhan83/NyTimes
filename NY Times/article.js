import React from 'react';
import helpers from '../utils/helpers.js';
import Results from './Articles/Results.js';
import Router from 'react-router';

var Article = React.createClass({

	getInitialState: function(){
		return {
			button: this.props.button
		}
	},

	handleClick: function() {
		// debugger;
		if(this.props.button == 'Save'){

			helpers.save(this.props.title, this.props.url, this.props.pub_date).then(function(res){
	    		
	    		this.setState({
	    			button: 'Saved'
	    		});
	    		
    		}.bind(this));
		}else if (this.state.button == 'Remove'){
		
			var id = this.props.id
			helpers.remove(id).then(function(res){
				
			
				this.setState({
					button: 'Deleted'
				});	
    		
    		}.bind(this));

    		var title = this.props.title
			this.props.remove(title);	
		}
   },

	render: function() {

		return (
			<li className="list-item" style={{listStyle:"none", padding:"5px", border:'1px solid #ccc', marginBottom: '2px'}}>
				<a href={this.props.url} target="_blank" style={{textDecoration:"none"}}>
					<h4 style={{textAlign:'center'}}>{this.props.title}</h4>				
				</a>
				<h1 style={{textAlign:'center'}}>Published on: {this.props.pub_date}</h1>				
				<div style={{display:'block', textAlign:'center'}}>				
					<span className="btn">
						<button onClick={this.handleClick}>
							{this.state.button}
						</button>
					</span>					
				</div>									
			</li>
		)
	}
});

module.exports = Article;