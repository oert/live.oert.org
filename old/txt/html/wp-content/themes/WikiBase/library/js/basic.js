/*
 * SimpleModal Basic Modal Dialog
 * http://www.ericmmartin.com/projects/simplemodal/
 * http://code.google.com/p/simplemodal/
 *
 * Copyright (c) 2009 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Revision: $Id: basic.js 212 2009-09-03 05:33:44Z emartin24 $
 *
 */
var $s = jQuery.noConflict();
$s(document).ready(function () {
	$s('a.b_sendtofriend').click(function (e) {
		e.preventDefault();
		$s('#basic-modal-content').modal();
	});

	
});