function editarUsuario(idP) {
    $('#secGrid').hide();
    $('#secConsulta').show();

    $.ajax({
        url: '/Consulta/ConsultaPaciente',
        type: 'POST',
        data: { id: idP },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (data) {
            $('#divConsultaPaciente').html(data);
        },
    });

}

$('#drpBuscar').change(function () {
    if ($('#drpBuscar').val() == "Cpf") {
        $('#txtBuscar').mask('000.000.000-00');
    } else {
        $('#txtBuscar').unmask();
    }
})

$('#txtBuscar').keyup(function () {
    if ($('#drpBuscar').val() != "") {
        $.ajax({
            url: '/Consulta/ConsultaGrid',
            headers: {
                'VerificationToken': $("#forgeryToken").val()
            },
            type: 'POST',
            data: { drop: $('#drpBuscar').val(), text: $('#txtBuscar').val() },
            success: function (data) {
                $('#divGridConsulta').html(data);
            },
        });
    }
})