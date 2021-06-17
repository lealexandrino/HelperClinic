document.body.classList.add("sidebar-collapse");

$('#btnFinalizarConsulta').click(function () {

    alertify.success("Consulta Finalizada!");
    clearTimeout(timex);

    $('#hdnDuracaoConsulta').val($("#hours").text() + $("#mins").text() + $("#seconds").text());
    $('#myForm').submit();
});


$('#btnIniciarConsulta').click(function () {

    alertify.success("Consulta iniciada.");
    $('#divTimer').show();
    $('#divFinalizar').show();
    $('#divIniciar').hide();
    startTimer();

});
var hours = 0;
var mins = 0;
var seconds = 0;

function startTimer() {
    timex = setTimeout(function () {
        seconds++;
        if (seconds > 59) {
            seconds = 0; mins++;
            if (mins > 59) {
                mins = 0; hours++;
                if (hours < 10) { $("#hours").text('0' + hours + ':') } else $("#hours").text(hours + ':');
            }

            if (mins < 10) {
                $("#mins").text('0' + mins + ':');
            }
            else $("#mins").text(mins + ':');
        }
        if (seconds < 10) {
            $("#seconds").text('0' + seconds);
        } else {
            $("#seconds").text(seconds);
        }

        startTimer();
    }, 1000);
}


$('body').css("cursor", "initial");

alertify.success("Não esqueça que o histórico está disponível nas datas abaixo.");