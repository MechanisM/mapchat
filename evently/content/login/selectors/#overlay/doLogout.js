function() {
  var elem = $(this);
  
  elem.trigger('startload');
  $.couch.logout({
    success : function() {
      // Google analytics
      _gaq.push(['_trackEvent', 'logout', 'succeded']);

      elem.trigger('_init').trigger('endload');
    },
    error: function(status, error, reason) {
      // Google analytics
      _gaq.push(['_trackEvent', 'logout', 'error']);
    
      $.error('Logout', 'Logout failed! Reason:' + reason);
      elem.trigger('endload');
    }
  });
}
