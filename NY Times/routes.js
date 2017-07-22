var React = require('react');


var Main = require('../components/Main');
var Home = require('../components/Home');

var Search = require('../components/Search');
import Saved from '../components/Saved';

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute	= Router.IndexRoute

module.exports = (

	<Route path="/" component={Main}>
		<Route path='search/:queryTerm/:startYear/:endYear' component={Search} />
		<Route path='saved' component={Saved} />
		<IndexRoute component={Home} />
	</Route>
);