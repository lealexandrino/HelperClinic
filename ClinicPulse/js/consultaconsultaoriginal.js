
$('#btnVoltarGrid').click(function () {
    $('#secGrid').show();
    $('#secConsulta').hide();
});

$(function () {
    $('#txtCpfCadastro').mask("000.000.000-00");
    $('#txtCelular').mask("(00) 00000-0000");
    $('#txtFixo').mask("(00) 0000-0000");
    $('#txtTelTrabalho').mask("(00) 0000-0000");
    $('#hdnCpf').val($("#txtCpfCadastro").val());
    $('#drpEtnia').val($('#hdnEtnia').val());
    $('#drpPergunta').val($('#hdnPergunta').val());

    $('#txtDataNascimento').mask("00/00/0000");
    $('#txtValidacao').mask("00/00/0000");

    $("#txtValidacao").datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR",
    });

    $("#txtDataNascimento").datepicker({
        format: "dd/mm/yyyy",
        language: "pt-BR",
    });
});

$('#btnVoltarGeral').click(function () {
    $('#secGrid').show();
    $('#secConsulta').hide();
    window.scrollTo(0, 0);
})

$('#btnProximoGeral').click(function () {
    $('#divGeral').hide();
    $('#divComplementares').show();
    window.scrollTo(0, 0);
})

$('#btnProximoComplementares').click(function () {
    $('#divComplementares').hide();
    $('#divConvenios').show();
    window.scrollTo(0, 0);
})

$('#btnVoltarComplementares').click(function () {
    $('#divComplementares').hide();
    $('#divGeral').show();
    window.scrollTo(0, 0);
})

$('#btnVoltarConvenios').click(function () {
    $('#divConvenios').hide();
    $('#divComplementares').show();
    window.scrollTo(0, 0);
})

$('#txtCpfCadastro').keyup(function () {
    if ($('#hdnCpf').val() != $('#txtCpfCadastro').val()) {
        if ($('#txtCpfCadastro').val().length > 13) {
            $.ajax({
                url: '/Cadastro/ValidarCpf',
                type: 'POST',
                data: { cpf: $("#txtCpfCadastro").val() },
                headers: {
                    'VerificationToken': $("#forgeryToken").val()
                },
                success: function (_modelJson) {
                    var conta = _modelJson["conta"];
                    if (conta == 0) {
                        $('#txtCpfCadastro').css("border-color", "green");
                        $('#btnSalvarComplementares').prop("disabled", false);
                        $('#btnSalvarGeral').prop("disabled", false);
                    } else {
                        $('#txtCpfCadastro').css("border-color", "red");
                        $('#btnSalvarComplementares').prop("disabled", true);
                        $('#btnSalvarGeral').prop("disabled", true);
                    }
                }
            });
        }
    } else {
        $('#txtCpfCadastro').css("border-color", "green");
        $('#btnSalvarComplementares').prop("disabled", false);
        $('#btnSalvarGeral').prop("disabled", false);
    }
})

jQuery(function ($) {
    $("#cep").change(function () {
        var cep_code = $(this).val();
        if (cep_code.length <= 0) return;
        $.get("http://apps.widenet.com.br/busca-cep/api/cep.json", { code: cep_code },
           function (result) {
               if (result.status != 1) {
                   alert(result.message || "Houve um erro desconhecido");
                   return;
               }
               $("input#cep").val(result.code);
               $("input#estado").val(result.state);
               $("input#cidade").val(result.city);
               $("input#bairro").val(result.district);
               $("input#endereco").val(result.address);
               $("input#estado").val(result.state);
           });
    });
});