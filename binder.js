define('binder', ['jquery'], function ($) {
	//Binder object
	var Binder = function (id) {
		this.eventAggregator = $({});
		var self = this;
		var dataAttribute = "bind-" + id,
			message = id + ":change";

		$(document).on('change', "[data-" + dataAttribute + "]", function (event) {
			var $input = $(this);
			self.eventAggregator.trigger(message, [$input.data(dataAttribute), $input.val()]);
		});
		this.eventAggregator.on(message, function (event, property, value) {
			$("[data-" + dataAttribute + "=" + property + "]" ).each( function() {
				$(this).val(value);
			});
		});
		return this.eventAggregator;
	}

    return Binder;
});