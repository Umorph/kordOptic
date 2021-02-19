$(function(){
  $('#date').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    timePicker24Hour: true,
    locale: {
      format: 'DD.MM.YYYY HH:mm'
    }
  });
});
