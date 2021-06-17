$(document).ready(function () {
    document.body.classList.add("sidebar-collapse");

    $('#txtPaciente').chosen({
        no_results_text: "Paciente não encontrado",
        width: "100%"
    });

    $('#txtMedico').chosen({
        no_results_text: "Paciente não encontrado",
        width: "100%"
    });

    $('#txtMedico').val($('#hdnIdMedico').val());
    $('#txtMedico').trigger("chosen:updated");

    var sourceFullView = { url: '/Agenda/GetDiaryEvents/' };
    var sourceSummaryView = { url: '/Agenda/GetDiarySummary/' };
    var CalLoading = true;

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], buttonText: { prev: '&nbsp;&#9668;&nbsp;', next: '&nbsp;&#9658;&nbsp;', prevYear: '&nbsp;&lt;&lt;&nbsp;', nextYear: '&nbsp;&gt;&gt;&nbsp;', today: 'hoje', month: 'mês', week: 'semana', day: 'dia' }, titleFormat: { month: 'MMMM yyyy', week: "d [ yyyy]{ '&#8212;'[ MMM] d MMM yyyy}", day: 'dddd, d MMM, yyyy' }, columnFormat: { month: 'ddd', week: 'ddd d/M', day: 'dddd d/M' }, allDayText: 'dia todo', axisFormat: 'H:mm', timeFormat: { '': 'H(:mm)', agenda: 'H:mm{ - H:mm}' },
        defaultView: 'month',
        editable: true,
        allDaySlot: false,
        selectable: true,
        slotMinutes: 15,
        events: '/Agenda/GetDiaryEvents/',
        eventClick: function (calEvent, jsEvent, view) {
            $(".divAgendamentoDados").remove();
            $("#lblAgendamento").append("<div class='divAgendamentoDados'>Paciente: " + calEvent.paciente
                + "<br />Médico: " + calEvent.medico
                + "<br /> Titulo do agendamento: " + calEvent.title
                + "<br /> Horario da consulta: " + calEvent.diahorario
                + "<br /> Duração do agendamento: " + calEvent.duracao
                + "<br /> Status do Atendimento: " + (calEvent.statusENUM == 1 ? "Paciente aguardando para ser atendido" : "Paciente ainda não compareceu")
                + "<br />"
                + "<input type='hidden' id='hdnIdModal' value='" + calEvent.id + "'/>"
                + "<input type='hidden' id='hdnStart' value='" + calEvent.start + "'/>"
                + "<input type='hidden' id='hdnDiaHora' value='" + calEvent.diahorario + "'/>"
                + "<input type='hidden' id='hdnPaciente' value='" + calEvent.paciente + "'/>"
                + "<input type='hidden' id='hdnMedico' value='" + calEvent.medico + "'/>"
                + "<input type='hidden' id='hdnPacienteId' value='" + calEvent.idpaciente + "'/>"
                + "<input type='hidden' id='hdnIdLembrete' value='" + calEvent.lembrete + "'/>"
                + "</div>");
            var text = (calEvent.statusENUM == 1 ? "Paciente ainda não compareceu" : "Paciente está Aguardando");
            $("#btnAguardando").text(text);
            $('#hdnProntuarioId').val(calEvent.idpaciente);
            $('#modalAlerta').modal('show');
        },

        eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },
        editable: true,

        eventResize: function (event, dayDelta, minuteDelta, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },

        dayClick: function (date, allDay, jsEvent, view) {
            $('#eventTitle').val("");
            $('#eventDate').val($.fullCalendar.formatDate(date, 'dd/MM/yyyy'));
            $('#eventTime').val($.fullCalendar.formatDate(date, 'HH:mm'));
            ShowEventPopup(date);
        },

        viewRender: function (view, element) {

            if (!CalLoading) {
                if (view.name == 'month') {
                    $('#calendar').fullCalendar('removeEventSource', sourceFullView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceSummaryView);
                }
                else {
                    $('#calendar').fullCalendar('removeEventSource', sourceSummaryView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceFullView);
                }
            }
        }

    });

    CalLoading = true;


});

function eventos() {
    //$('#calendar').hide();
    document.getElementById('calendar').innerHTML = "";

    var sourceFullView = { url: '/Agenda/GetDiaryEvents' };
    var sourceSummaryView = { url: '/Agenda/GetDiarySummary' };
    var CalLoading = true;

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], buttonText: { prev: '&nbsp;&#9668;&nbsp;', next: '&nbsp;&#9658;&nbsp;', prevYear: '&nbsp;&lt;&lt;&nbsp;', nextYear: '&nbsp;&gt;&gt;&nbsp;', today: 'hoje', month: 'mês', week: 'semana', day: 'dia' }, titleFormat: { month: 'MMMM yyyy', week: "d [ yyyy]{ '&#8212;'[ MMM] d MMM yyyy}", day: 'dddd, d MMM, yyyy' }, columnFormat: { month: 'ddd', week: 'ddd d/M', day: 'dddd d/M' }, allDayText: 'dia todo', axisFormat: 'H:mm', timeFormat: { '': 'H(:mm)', agenda: 'H:mm{ - H:mm}' },
        defaultView: 'month',
        editable: true,
        allDaySlot: false,
        selectable: true,
        slotMinutes: 15,
        events: '/Agenda/GetDiaryEvents',
        eventClick: function (calEvent, jsEvent, view) {
            $(".divAgendamentoDados").remove();
            $("#lblAgendamento").append("<div class='divAgendamentoDados'>Paciente: " + calEvent.paciente
                + "<br />Médico: " + calEvent.medico
                + "<br /> Titulo do agendamento: " + calEvent.title
                + "<br /> Horario da consulta: " + calEvent.diahorario
                + "<br /> Duração do agendamento: " + calEvent.duracao
                + "<br /> Status do Atendimento: " + (calEvent.statusENUM == 1 ? "Paciente aguardando para ser atendido" : "Paciente ainda não compareceu")
                + "<br />"
                + "<input type='hidden' id='hdnIdModal' value='" + calEvent.id + "'/>"
                + "<input type='hidden' id='hdnStart' value='" + calEvent.start + "'/>"
                + "<input type='hidden' id='hdnDiaHora' value='" + calEvent.diahorario + "'/>"
                + "<input type='hidden' id='hdnPaciente' value='" + calEvent.paciente + "'/>"
                + "<input type='hidden' id='hdnMedico' value='" + calEvent.medico + "'/>"
                + "<input type='hidden' id='hdnPacienteId' value='" + calEvent.idpaciente + "'/>"
                + "<input type='hidden' id='hdnIdLembrete' value='" + calEvent.lembrete + "'/>"
                + "</div>");
            var text = (calEvent.statusENUM == 1 ? "Paciente ainda não compareceu" : "Paciente está Aguardando");
            $("#btnAguardando").text(text);
            $('#hdnProntuarioId').val(calEvent.idpaciente);
            $('#modalAlerta').modal('show');
        },

        eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },
        editable: true,

        eventResize: function (event, dayDelta, minuteDelta, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },

        dayClick: function (date, allDay, jsEvent, view) {
            $('#eventTitle').val("");
            $('#eventDate').val($.fullCalendar.formatDate(date, 'dd/MM/yyyy'));
            $('#eventTime').val($.fullCalendar.formatDate(date, 'HH:mm'));
            ShowEventPopup(date);
        },

        viewRender: function (view, element) {

            if (!CalLoading) {
                if (view.name == 'month') {
                    $('#calendar').fullCalendar('removeEventSource', sourceFullView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceSummaryView);
                }
                else {
                    $('#calendar').fullCalendar('removeEventSource', sourceSummaryView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceFullView);
                }
            }
        }

    });
};

function eventosmedico(idMedicoescolhido) {
    //$('#calendar').hide();
    document.getElementById('calendar').innerHTML = "";

    var sourceFullView = { url: '/Agenda/GetDiaryEvents?idMedico=' + idMedicoescolhido };
    var sourceSummaryView = { url: '/Agenda/GetDiarySummary?idMedico=' + idMedicoescolhido };
    var CalLoading = true;

    $('#txtMedico').val(idMedicoescolhido);
    $('#txtMedico').trigger("chosen:updated");

    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'], monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'], dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'], dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'], buttonText: { prev: '&nbsp;&#9668;&nbsp;', next: '&nbsp;&#9658;&nbsp;', prevYear: '&nbsp;&lt;&lt;&nbsp;', nextYear: '&nbsp;&gt;&gt;&nbsp;', today: 'hoje', month: 'mês', week: 'semana', day: 'dia' }, titleFormat: { month: 'MMMM yyyy', week: "d [ yyyy]{ '&#8212;'[ MMM] d MMM yyyy}", day: 'dddd, d MMM, yyyy' }, columnFormat: { month: 'ddd', week: 'ddd d/M', day: 'dddd d/M' }, allDayText: 'dia todo', axisFormat: 'H:mm', timeFormat: { '': 'H(:mm)', agenda: 'H:mm{ - H:mm}' },
        defaultView: 'month',
        editable: true,
        allDaySlot: false,
        selectable: true,
        slotMinutes: 15,
        events: '/Agenda/GetDiaryEvents?idMedico=' + idMedicoescolhido,
        eventClick: function (calEvent, jsEvent, view) {
            $(".divAgendamentoDados").remove();
            $("#lblAgendamento").append("<div class='divAgendamentoDados'>Paciente: " + calEvent.paciente
                + "<br />Médico: " + calEvent.medico
                + "<br /> Titulo do agendamento: " + calEvent.title
                + "<br /> Horario da consulta: " + calEvent.diahorario
                + "<br /> Duração do agendamento: " + calEvent.duracao
                + "<br /> Status do Atendimento: " + (calEvent.statusENUM == 1 ? "Paciente aguardando para ser atendido" : "Paciente ainda não compareceu")
                + "<br />"
                + "<input type='hidden' id='hdnIdModal' value='" + calEvent.id + "'/>"
                + "<input type='hidden' id='hdnStart' value='" + calEvent.start + "'/>"
                + "<input type='hidden' id='hdnDiaHora' value='" + calEvent.diahorario + "'/>"
                + "<input type='hidden' id='hdnPaciente' value='" + calEvent.paciente + "'/>"
                + "<input type='hidden' id='hdnMedico' value='" + calEvent.medico + "'/>"
                + "<input type='hidden' id='hdnPacienteId' value='" + calEvent.idpaciente + "'/>"
                + "<input type='hidden' id='hdnIdLembrete' value='" + calEvent.lembrete + "'/>"
                + "</div>");
            var text = (calEvent.statusENUM == 1 ? "Paciente ainda não compareceu" : "Paciente está Aguardando");
            $("#btnAguardando").text(text);
            $('#hdnProntuarioId').val(calEvent.idpaciente);
            $('#modalAlerta').modal('show');
        },

        eventDrop: function (event, dayDelta, minuteDelta, allDay, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },
        editable: true,

        eventResize: function (event, dayDelta, minuteDelta, revertFunc) {
            alertify.set({
                labels: {
                    ok: "Confirmar",
                    cancel: "Deixar como esta"
                }
            });
            if (alertify.confirm("Confirma a troca de horário?", function (e) {
                if (e) {
                    UpdateEvent(event.id, event.start, event.end, event.lembrete);
                }
                else {
                    revertFunc();
                }
            })
            );
        },

        dayClick: function (date, allDay, jsEvent, view) {
            $('#eventTitle').val("");
            $('#eventDate').val($.fullCalendar.formatDate(date, 'dd/MM/yyyy'));
            $('#eventTime').val($.fullCalendar.formatDate(date, 'HH:mm'));
            ShowEventPopup(date);
        },

        viewRender: function (view, element) {

            if (!CalLoading) {
                if (view.name == 'month') {
                    $('#calendar').fullCalendar('removeEventSource', sourceFullView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceSummaryView);
                }
                else {
                    $('#calendar').fullCalendar('removeEventSource', sourceSummaryView);
                    $('#calendar').fullCalendar('removeEvents');
                    $('#calendar').fullCalendar('addEventSource', sourceFullView);
                }
            }
        }

    });
};

$('#btnDeletar').click(function () {
    $.ajax({
        type: 'POST',
        url: "/Agenda/DeletarAgendamento",
        data: { id: $('#hdnIdModal').val(), idlembrete: $('#hdnIdLembrete').val() },
        headers: { 'VerificationToken': $("#forgeryToken").val() },
        success: function (response) {
            if (response == 'True') {
                $('#calendar').fullCalendar('refetchEvents');
                alertify.error("Agendamento deletado :)");
            }
            else {
                alertify.error("Erro ao deletar :(");
            }
        }
    });
});

$('#btnMandarEmail').click(function () {
    $.ajax({
        type: 'POST',
        url: "/Agenda/MandarEmail",
        data: { id: $('#hdnPacienteId').val(), data: $('#hdnDiaHora').val(), paciente: $('#hdnPaciente').val(), medico: $('#hdnMedico').val() },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (response) {
            if (response == 'True') {
                alertify.success("Email enviado com sucesso!");
            }
            else {
                alertify.error("Email não encontrado.");
            }
        }
    });
});

$('#btnAguardando').click(function () {
    $.ajax({
        type: 'POST',
        url: "/Agenda/PacienteAguardando",
        data: { id: $('#hdnIdModal').val() },
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (response) {
            $('#calendar').fullCalendar('refetchEvents');
            alertify.success("Paciente marcado como aguardando!");
        }
    });
});

$('#btnConsulta').click(function () {
    $("#formProntuario").submit();
});

$('#btnVoltar').click(function () {
    ClearPopupFormValues();
    $(".divAgendamentoDados").remove();
});
$('#btnPopupCancel').click(function () {
    ClearPopupFormValues();
});

$('#btnPopupSave').click(function () {
    $('#myModal').modal('show');

    var dataRow = {
        'Title': $('#eventTitle').val(),
        'NewEventDate': $('#eventDate').val(),
        'NewEventTime': $('#eventTime').val(),
        'NewEventDuration': $('#eventDuration').val(),
        'IdPaciente': $('#txtPaciente').val(),
        'IdMedico': $('#txtMedico').val(),
    }

    ClearPopupFormValues();

    $.ajax({
        type: 'POST',
        url: "/Agenda/SaveEvent",
        data: dataRow,
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        success: function (response) {
            if (response == 'True') {
                $('#calendar').fullCalendar('refetchEvents');
                alertify.success("Agendamento salvo");
            }
            else {
                alertify.success("Erro ao salvar, todos os campos são obrigatórios!");
            }
        }
    });
});


function ShowEventPopup(date) {
    ClearPopupFormValues();
    $('#myModal').modal('show');
    $('#eventTitle').focus();
}

function ClearPopupFormValues() {
    $('#eventID').val("");
    $('#eventTitle').val("");
    $('#eventDateTime').val("");
    $('#eventDuration').val("");
}

function UpdateEvent(EventID, EventStart, EventEnd, Lembrete) {
    alertify.success("Pronto, novo horario confirmado.!");
    var dataRow = {
        'ID': EventID,
        'NewEventStart': EventStart,
        'NewEventEnd': EventEnd,
        'lembrete': Lembrete
    }

    $.ajax({
        type: 'POST',
        url: '/Agenda/UpdateEvent',
        headers: {
            'VerificationToken': $("#forgeryToken").val()
        },
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(dataRow)
    });
}
