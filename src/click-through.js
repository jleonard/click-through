(function($){ "use strict";

	var ClickThrough = function(el, options){
		this.$el = $(el);
		this.options = options;
	}

	ClickThrough.DEFAULTS = {
    loop: false,
    imgs: []
  }

  ClickThrough.prototype.advance = function(e){

  }

  var old = $.fn.clickthrough;

  $.fn.clickthrough = function(option){
  	return this.each(function(){
  		var $this = $(this);
  		var options = $.extend({}, ClickThrough.DEFAULTS, typeof option == 'object' && option);
  		var ct = new ClickThrough($this,options);
  	});

  	$.fn.clickthrough.Constructor = ClickThrough;
  	
  }

  $.fn.clickthrough.noConflict = function () {
    $.fn.clickthrough = old;
    return this;
  }

})(window.jQuery);