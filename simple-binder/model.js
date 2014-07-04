define('model', ['jquery', 'binder'], function ($, Binder) {
	var Model = function (id) {
		var binder = new Binder(id),
			model = {
				attributes: {
					id: id
				},

				set: function (name, value, silent) {
					this.attributes[name] = value;
					if (!silent) {
						binder.trigger(id + ":change", [name, value, this]);
					}
				},

				get: function (name) {
					return this.attributes[name];
				},

				_binder: binder
			};
		binder.on(id + ":change", function (event, name, value, initiator) {
			if (initiator !== model) {
				model.set(name, value, true);
			}
		});

		return model;
	}
	return Model;
});