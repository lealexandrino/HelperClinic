
$(document).ready(function () {
    $('#1-lbl').css("font-weight", "Bold");
    $('#txtDataHorario').mask("00/00/0000 00:00", { placeholder: "__/__/____ __:__" });
});

$('#btnAdicionarLembrete').click(function () {
    $.ajax({
        url: '/Painel/AdicionarLembrete',
        type: 'POST',
        data: { Lembrete: $('#txtLembrete').val(), DataHorario: $('#txtDataHorario').val() },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (data) {
            alertify.success("Lembrete salvo com sucesso!");
            setTimeout(function () {
                location.reload(true);
            }, 1000);

        },
    });
});

function atualizarDefinicao(pagina) {
    $.ajax({
        url: '/Painel/LembretesPaginacao',
        type: 'POST',
        data: { Pagina: pagina },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (data) {
            $('#divLembretes').html(data);

            $('#1-lbl').css("font-weight", "Normal");
            $('#' + pagina + '-lbl').css("font-weight", "Bold");
        },
    });
}