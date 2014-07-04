'use strict';
requirejs.config({
	paths: {
		binder: 'scripts/lib/binder/binder',
		collectionController: 'scripts/lib/binder/collectionController',
		model: 'scripts/lib/binder/model',
		jquery: '../../bower_components/jquery/dist/jquery',
		modernizr: '../../bower_components/modernizr/modernizr'
	}
});

//main
require(['collectionController'], function (CollectionController) {
	$(function () {
		var collection = [{
			url: 'ynet.co.il',
			caption: 'Ynet'
		},{
			url: 'google.co.il',
			caption: 'Google'
		},{
			url: 'facebook.com',
			caption: 'Facebook'
		}];
		var model = {
			property1: 'url',
			property2: 'caption'
		};
		var sites = new CollectionController(collection, model);
		sites[0].set('caption', 'nanana');
	});
});