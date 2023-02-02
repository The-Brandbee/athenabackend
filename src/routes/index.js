'use strict';

module.exports = function(app) {
	require('./max')(app);
	require('./user')(app);
	require('./views')(app);
};
