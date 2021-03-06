sap.ui.require([
	"sap/m/Shell",
	"sap/m/App",
	"sap/m/Page",
	"sap/ui/core/ComponentContainer"
], function(
	Shell, App, Page, ComponentContainer) {
	"use strict";

	sap.ui.getCore().attachInit(function() {
		new Shell ({
			app : new App ({
				pages : [
					new Page({
						title : "Smart Field - TextInEditModeSource (Experimental)",
						enableScrolling : false,
						content : [
							new ComponentContainer({
								height : "100%", name : "sap.ui.comp.sample.smartfield.TextInEditModeSource",
								settings : {
									id : "sap.ui.comp.sample.smartfield.TextInEditModeSource"
								}
							})
						]
					})
				]
			})
		}).placeAt("content");
	});
});
