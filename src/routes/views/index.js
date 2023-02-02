'use strict';

module.exports = function(app) {
	require('./cms')(app);
	require('./web')(app);
};
