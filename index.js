var dereq = require( 'derequire' );

module.exports = derequire;

function derequire ( code, options ) {
	return options.replacements ?
		dereq( code, options.replacements ) :
		dereq( code, options.tokenTo || '_dereq_', options.tokenFrom || 'require' );
}

derequire.defaults = {
	accept: '.js'
};
