$( function() {
  $( "#datepicker" ).datepicker();

  $( "#slider1" ).slider({
    range: "min",
    animate: "fast",
    value:1000,
    min: 1000,
    max: 3000000,
    step: 1,
    slide: function( event, ui ) {
      $( "#sum" ).val( "" + ui.value );
    }
  });
  $( "#sum" ).val( "" + $( "#slider1" ).slider( "value" ) );

  $( "#slider2" ).slider({
    range: "min",
    animate: "fast",
    value:1000,
    min: 1000,
    max: 3000000,
    step: 1,
    slide: function( event, ui ) {
      $( "#refill-sum" ).val( "" + ui.value );
    }
  });
  $( "#refill-sum" ).val( "" + $( "#slider2" ).slider( "value" ) );

  $( "#calcButton" ).click(function( event ) {
    event.preventDefault();
  });

  $("#calcButton").click(
    $.post(
      'calc.php',
      {
          date: $('#datepicker').val(), 
          sum: $('#sum').val(),
          period: $('#period').val(),
          refillNo: $('#refill-no').val(),
          refillYes: $('#refill-yes').val(),
          refillSum: $('#refill-sum').val(),
      },
      
      function() { 
          $('#calcForm').hide('slow');
          $('#calcRslt').append("result");
      }
  ));
 
});

