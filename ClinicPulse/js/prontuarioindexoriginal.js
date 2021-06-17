
function editarUsuario(idP, nome) {
    $('#hdnProntuarioId').val(idP);
    $("#formProntuario").submit();
}

$('#drpBuscar').change(function () {
    if ($('#drpBuscar').val() == "Cpf") {
        $('#txtBuscar').mask('000.000.000-00');
    } else {
        $('#txtBuscar').unmask();
    }
});

$('#txtBuscar').keyup(function () {
    if ($('#drpBuscar').val() != "") {
        $.ajax({
            url: '/Consulta/ConsultaGrid',
            type: 'POST',
            data: { drop: $('#drpBuscar').val(), text: $('#txtBuscar').val() },
            headers: {
                'VerificationToken': $("#forgeryToken").val()
            },
            success: function (data) {
                $('#divGridProntuario').html(data);
            },
        });
    }
});