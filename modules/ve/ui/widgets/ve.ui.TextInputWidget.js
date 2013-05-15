/*!
 * VisualEditor UserInterface TextInputWidget class.
 *
 * @copyright 2011-2013 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * Creates an ve.ui.TextInputWidget object.
 *
 * @class
 * @extends ve.ui.InputWidget
 *
 * @constructor
 * @param {Object} [config] Config options
 * @cfg {string} [placeholder] Placeholder text
 */
ve.ui.TextInputWidget = function VeUiTextInputWidget( config ) {
	// Parent constructor
	ve.ui.InputWidget.call( this, config );

	// Initialization
	this.$.addClass( 've-ui-textInputWidget' );
	if ( config.placeholder ) {
		this.$input.attr( 'placeholder', config.placeholder );
	}
};

/* Inheritance */

ve.inheritClass( ve.ui.TextInputWidget, ve.ui.InputWidget );

/* Methods */

/**
 * Get input element.
 *
 * @method
 * @param {Object} [config] Config options
 * @return {jQuery} Input element
 */
ve.ui.TextInputWidget.prototype.getInputElement = function ( config ) {
	return config.multiline ? this.$$( '<textarea>' ) : this.$$( '<input>' ).attr( 'type', 'text' );
};
