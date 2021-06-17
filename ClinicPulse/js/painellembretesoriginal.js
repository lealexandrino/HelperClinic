
$(document).ready(function () {
    $('#1-lbl').css("font-weight", "Bold");
    $('#txtDataHorario').mask("00/00/0000 00:00", { placeholder: "__/__/____ __:__" });

    $('#btnTelaAdicionar').click(function () {
        $('#divListaLembretes').hide();
        $('#divAdicionarLembretes').show();
    });

    $('#btnVoltar').click(function () {
        $('#divListaLembretes').show();
        $('#divAdicionarLembretes').hide();
    });
});

$('#btnEnviarMensagem').click(function () {
    //$.ajax({
    //    url: 'https://whatsappmailing.multidadosti.com.br/api/sendsinglemessage?token=337e73bacc7c4c569fefd7629c25f83051d5fc9fbc8d4715ae8896c773ce4b41&'+
    //        'campanha=Dentista+Leandro&texto=Ola+meu+amigo,+isso+e+u,+teste+do+leandro+&tel=55' + $('#txtDataHorario').val() + '&tipo_campanha=Text',
    //    type: 'GET',
    //    success: function (response) {
    //        alertify.success("Mensagem Enviada com Sucesso!");
    //    },
    //    error: function () {
    //        alertify.alert('Erro', 'Ocorreu um erro ao enviar a mensagem!! Contacte o suporte.');
    //    }
    //});

    location.href="https://whatsappmailing.multidadosti.com.br/api/sendsinglemessage?token=337e73bacc7c4c569fefd7629c25f83051d5fc9fbc8d4715ae8896c773ce4b41&"+
        "campanha=" + $('#txtLembrete').val().split(" ").join("+") +"&texto=Ola+meu+amigo,+isso+e+u,+teste+do+leandro+&tel=55" + $('#txtCelular').val() + "&tipo_campanha=Text";
});

function deletar(id) {
    $.ajax({
        type: 'POST',
        url: "/Painel/Deletar",
        data: { idD: id },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (response) {
            if (response == 'True') {
                alertify.success("Lembrete deletado");
                location.reload(true);
            }
            else {
                alertify.success("Erro ao deletar lembrete");
            }
        }
    });
}