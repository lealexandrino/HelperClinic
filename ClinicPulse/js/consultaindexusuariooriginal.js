function editarUsuario(idP) {
    $('#secGrid').hide();
    $('#secConsulta').show();

    $.ajax({
        url: '/ConsultaUsuario/ConsultaUsuario',
        type: 'POST',
        data: { id: idP },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (data) {
            $('#divConsultaUsuario').html(data);
        },
    });

}

$('#txtBuscar').keyup(function () {
    if ($('#drpBuscar').val() != "") {
        $.ajax({
            url: '/ConsultaUsuario/ConsultaGrid',
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