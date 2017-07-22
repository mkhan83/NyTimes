import React from 'react';
import Article from '../Article';
import helpers from '../../utils/helpers'



var Results = React.createClass({

	getInitialState: function(){
		return {
			button: this.props.button,
			queryResults: this.props.queryResults
		}
	},

	componentWillReceiveProps: function(nextProps){
		

		this.setState({
			queryResults: nextProps.queryResults
		});	
		
		
	},

	remove: function(val){
		// var searchAndDestroy = this.state.queryResults.find(title);
		// this.state.queryResults.splice(searchAndDestroy, 1);

		
		// this.forceUpdate()
		var destroy = this.state.queryResults;

		var search = destroy.map(function(e) { 
			return e.title; 
		}).indexOf(val);

		destroy.splice(search, 1);
		this.setState({
			queryResults: destroy
		});

	},

	render: function(){

		if(this.state.queryResults) {
			var articles = []



			this.state.queryResults.forEach(function(article){
				
				article.pub_date = new Date(article.pub_date);
				var s = String(article.pub_date);
				article.pub_date = s.substring(0,15);
				
				// article.pub_date = article.pub_date.substring(0, article.pub_date.indexOf('T'));
				
				if(article.headline != undefined) {
					articles.push(<Article button={this.props.button} title={article.headline.main} url={article.web_url} key={article._id} id={article._id} pub_date={article.pub_date}/>)
				} else if (article.title) {
					articles.push(<Article button={this.props.button} title={article.title} url={article.url} key={article._id} id={article._id} pub_date={article.pub_date}remove={this.remove}/>)
				}				
				
			}.bind(this));

			return (
				<div className="main-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="panel panel-primary">
								<div className="panel-body">
									<ul className="list-group">
										{articles}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
});

module.exports = Results;
















