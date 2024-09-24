/*global QUnit*/

sap.ui.define([
	"case3fe/controller/X1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("X1 Controller");

	QUnit.test("I should test the X1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
