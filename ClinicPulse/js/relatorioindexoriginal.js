$(document).ready(function () {

    $('#txtRelatorioInicial').val("");
    $('#txtRelatorioFinal').val("");
    $('#txtRelatorioInicial').mask("00/00/0000");
    $('#txtRelatorioFinal').mask("00/00/0000");

    $("#txtRelatorioFinal").datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR",
    });

    $("#txtRelatorioInicial").datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR",
    });

});