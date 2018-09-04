import 'bootstrap';

import './scss/index.scss';

$(function () {
    $('[data-toggle="popover"]').popover()
  })
$('.popover-dismiss').popover({
    trigger: 'focus'
  })

 