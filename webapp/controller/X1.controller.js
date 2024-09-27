sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("case41fe.controller.X1", {


		onInit : function () {
			var oData = {
					busy : false
				},
				oModel = new JSONModel(oData);
			this.getView().setModel(oModel, "X1");
		}
	});
});
