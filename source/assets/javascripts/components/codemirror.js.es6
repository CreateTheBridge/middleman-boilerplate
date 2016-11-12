//= require lib/codemirror
//= require mode/htmlmixed/htmlmixed

$(document).ready(() => {
  $("textarea[data-code-mirror]").each(function() {
    var $element = $(this);
    var Mirror = CodeMirror.fromTextArea($element[0], {
      mode: "htmlmixed",
      theme: "solarized dark",
      lineNumbers: true
    });
  })
});
