define('collectionController', ['jquery', 'model'], function ($, Model) {
	var CollectionController = function (collection, model) {
		var ID_PREFIX = 'pair';
		var $collection = $('input[class^="' + ID_PREFIX + '"], input[class*=" ' + ID_PREFIX +'"]');
		this.idArray = [];
		var self = this;

		var modelsArray = $collection.map( function () {
			var selector = this.className;
			var id = selector.slice(selector.indexOf(ID_PREFIX + ID_PREFIX.length));
			if (!self.idArray[id]) {
				self.idArray[id] = id;
				var modelInstance = new Model(id);
				modelInstance.set(model.property1, collection[id - 1][model.property1]);
				modelInstance.set(model.property2, collection[id - 1][model.property2]);
			}

			return modelInstance;
		}).get();

		return modelsArray;
	}
	return CollectionController;
});