(function($){ "use strict";

	var ClickThrough = function(el, options){
		this.$el = $(el);
		this.options = options;
    this.currentIndex = 0;
    this.$el.css("background-image",'url('+this.options.images[this.currentIndex]+')');
    this.callback = options.callback;
	}

	ClickThrough.DEFAULTS = {
    loop: false,
    images: [],
    callback : function(item,index){}
  }

  ClickThrough.prototype.advance = function(e){
    if(this.currentIndex < this.options.images.length -1){
      this.currentIndex++;
    }else{
      if(this.options.loop){
        this.currentIndex = 0;
      }
    }
    this.$el.css("background-image",'url('+this.options.images[this.currentIndex]+')');
    this.callback(this.options.images[this.currentIndex],this.currentIndex);
  }

  var old = $.fn.clickthrough;

  $.fn.clickthrough = function(option){
  	return this.each(function(){
  		var $this = $(this);
  		var options = $.extend({}, ClickThrough.DEFAULTS, typeof option == 'object' && option);
      var data = $this.data('sim.clickthrough', (data = new ClickThrough(this, options)));
      $this.attr("data-clickthrough",true);
  	});
  }

  $.fn.clickthrough.Constructor = ClickThrough;

  $.fn.clickthrough.noConflict = function () {
    $.fn.clickthrough = old;
    return this;
  }

  $(document).on('click', '[data-clickthrough]', function (e) {
    e.preventDefault();
    $(this).data('sim.clickthrough').advance();
  })

})(window.jQuery);