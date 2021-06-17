$(document).ready(function () {
    $('#divTelefone').mask("(00) 00000-0000");
});

function TermosdeUso() {
    alertify
        .alert("Ao se cadastrar voce tera 30 dias para utilizar o Helper Clinic.<br />" +
            "Após esse período o acesso apenas será possivel caso compre a assinatura.<br />" +
            "Caso não queira continuar, todos os dados que foram imputados no período de teste serão deletados permanentementes. </br>" +
            "Ao se cadastrar voce concorda com os termos de uso", function () {
                alertify.message('Concordo');
            });
}

$('#btnCadastrar').click(function () {
    if ($('#divNome').val() == "") {
        alertify.error('O campo nome é obrigatório');
        return false;
    }
    if ($('#divEmail').val() == "") {
        alertify.error('O campo email é obrigatório');
        return false;
    }
    if ($('#divSenha').val() == "") {
        alertify.error('O campo senha é obrigatório');
        return false;
    }
    if ($('#divConfirmarSenha').val() == "") {
        alertify.error('O campo de confirmação de senha é obrigatório');
        return false;
    }
    if ($('#divSenha').val() != $('#divConfirmarSenha').val()) {
        alertify.error('A senha deve ser iguais nos campos senha e confirmação');
        return false;
    }
    if ($("#divSenha").val().length < 5 || $("#divSenha").val().length > 15) {
        alertify.error('A senha deve mínimo de 6 caracteres e maximo de 15');
        return false;
    }
    if ($('#divTelefone').val() == "") {
        alertify.error('O campo Celular é obrigatório');
        return false;
    }

    if ($('#CheckTermos').iCheck('update')[0].checked == false) {
        alertify.error('Você não concordou com os termos de uso.');
        return false;
    };
});