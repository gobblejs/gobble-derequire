module.exports = derequire;

function derequire ( code, options ) {
	var dereq = require( 'derequire' );

	return options.replacements ?
		dereq( code, options.replacements ) :
		dereq( code, options.tokenTo || '_dereq_', options.tokenFrom || 'require' );
}

derequire.defaults = {
	accept: '.js'
};
