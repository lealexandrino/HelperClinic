﻿$(document).ready(function () {
    // Handler for .ready() called.
    //anchuraValor();
    //Extracao();
});

$("#btnFinalizarConsulta").click(function () {
    $('#hdnExtracao').val($('#d18').val()
        + $('#d17').val()
        + $('#d16').val()
        + $('#d15').val()
        + $('#d14').val()
        + $('#d13').val()
        + $('#d12').val()
        + $('#d11').val()
        + $('#d21').val()
        + $('#d22').val()
        + $('#d23').val()
        + $('#d24').val()
        + $('#d25').val()
        + $('#d26').val()
        + $('#d27').val()
        + $('#d28').val()
        + $('#d48b').val()
        + $('#d47b').val()
        + $('#d46b').val()
        + $('#d45b').val()
        + $('#d44b').val()
        + $('#d43b').val()
        + $('#d42b').val()
        + $('#d41b').val()
        + $('#d31b').val()
        + $('#d32b').val()
        + $('#d33b').val()
        + $('#d34b').val()
        + $('#d35b').val()
        + $('#d36b').val()
        + $('#d37b').val()
        + $('#d38b').val());

    $('#hdnFurca').val($('#f18').val()
        + $('#f17').val()
        + $('#f16').val()
        + $('#d26').val()
        + $('#d27').val()
        + $('#d28').val()
        + $('#f18b-a').val()
        + $('#f18b-b').val()
        + $('#f17b-a').val()
        + $('#f17b-b').val()
        + $('#f16b-a').val()
        + $('#f16b-b').val()
        + $('#f14b-a').val()
        + $('#f14b-b').val()
        + $('#f24b-a').val()
        + $('#f24b-b').val()
        + $('#f26b-a').val()
        + $('#f26b-b').val()
        + $('#f27b-a').val()
        + $('#f27b-b').val()
        + $('#f28b-a').val()
        + $('#f28b-b').val()
        + $('#f48').val()
        + $('#f47').val()
        + $('#f36').val()
        + $('#f37').val()
        + $('#f38').val()
        + $('#f48b').val()
        + $('#f47b').val()
        + $('#f46b').val()
        + $('#f36b').val()
        + $('#f37b').val()
        + $('#f38b').val());
});

$("#odontograma-tab").click(function () {
    Extracao();
    Furca();
});

function Furca() {
    str = $('#hdnFurca').val().split("|");
    //debugger;
    for (var i = 1; i < str.length; i++) {
        str2 = str[i].split(",");

        switch (str2[0]) {
            case "f18":
                if (str2[1] == "0")
                    f18baToggle0();
                else if (str2[1] == "1")
                    f18baToggle1();
                else if (str2[1] == "2")
                    f18Toggle2();
                else if (str2[1] == "3")
                    f18Toggle3();
                break;
            case "f17":
                if (str2[1] == "0")
                    f17Toggle0();
                else if (str2[1] == "1")
                    f17Toggle1();
                else if (str2[1] == "2")
                    f17Toggle2();
                else if (str2[1] == "3")
                    f17Toggle3();
                break;
            case "f16":
                if (str2[1] == "0")
                    f16Toggle0();
                else if (str2[1] == "1")
                    f16Toggle1();
                else if (str2[1] == "2")
                    f16Toggle2();
                else if (str2[1] == "3")
                    f16Toggle3();
                break;
            case "f28":
                if (str2[1] == "0")
                    f28Toggle0();
                else if (str2[1] == "1")
                    f28Toggle1();
                else if (str2[1] == "2")
                    f28Toggle2();
                else if (str2[1] == "3")
                    f28Toggle3();
                break;
            case "f27":
                if (str2[1] == "0")
                    f27Toggle0();
                else if (str2[1] == "1")
                    f27Toggle1();
                else if (str2[1] == "2")
                    f27Toggle2();
                else if (str2[1] == "3")
                    f27Toggle3();
                break;
            case "f26":
                if (str2[1] == "0")
                    f26Toggle0();
                else if (str2[1] == "1")
                    f26Toggle1();
                else if (str2[1] == "2")
                    f26Toggle2();
                else if (str2[1] == "3")
                    f26Toggle3();
                break;
            case "f48":
                if (str2[1] == "0")
                    f48Toggle0();
                else if (str2[1] == "1")
                    f48Toggle1();
                else if (str2[1] == "2")
                    f48Toggle2();
                else if (str2[1] == "3")
                    f48Toggle3();
                break;
            case "f47":
                if (str2[1] == "0")
                    f47Toggle0();
                else if (str2[1] == "1")
                    f47Toggle1();
                else if (str2[1] == "2")
                    f47Toggle2();
                else if (str2[1] == "3")
                    f47Toggle3();
                break;
            case "f38":
                if (str2[1] == "0")
                    f38Toggle0();
                else if (str2[1] == "1")
                    f38Toggle1();
                else if (str2[1] == "2")
                    f38Toggle2();
                else if (str2[1] == "3")
                    f38Toggle3();
                break;
            case "f37":
                if (str2[1] == "0")
                    f37Toggle0();
                else if (str2[1] == "1")
                    f37Toggle1();
                else if (str2[1] == "2")
                    f37Toggle2();
                else if (str2[1] == "3")
                    f37Toggle3();
                break;
            case "f36":
                if (str2[1] == "0")
                    f36Toggle0();
                else if (str2[1] == "1")
                    f36Toggle1();
                else if (str2[1] == "2")
                    f36Toggle2();
                else if (str2[1] == "3")
                    f36Toggle3();
                break;
            case "f46b":
                if (str2[1] == "0")
                    f46bToggle0();
                else if (str2[1] == "1")
                    f46bToggle1();
                else if (str2[1] == "2")
                    f46bToggle2();
                else if (str2[1] == "3")
                    f46bToggle3();
                break;
            case "f48b":
                if (str2[1] == "0")
                    f48bToggle0();
                else if (str2[1] == "1")
                    f48bToggle1();
                else if (str2[1] == "2")
                    f48bToggle2();
                else if (str2[1] == "3")
                    f48bToggle3();
                break;
            case "f47b":
                if (str2[1] == "0")
                    f47bToggle0();
                else if (str2[1] == "1")
                    f47bToggle1();
                else if (str2[1] == "2")
                    f47bToggle2();
                else if (str2[1] == "3")
                    f47bToggle3();
                break;
            case "f38b":
                if (str2[1] == "0")
                    f38bToggle0();
                else if (str2[1] == "1")
                    f38bToggle1();
                else if (str2[1] == "2")
                    f38bToggle2();
                else if (str2[1] == "3")
                    f38bToggle3();
                break;
            case "f37b":
                if (str2[1] == "0")
                    f16Toggle0();
                else if (str2[1] == "1")
                    f16Toggle1();
                else if (str2[1] == "2")
                    f16Toggle2();
                else if (str2[1] == "3")
                    f16Toggle3();
                break;
            case "f36b":
                if (str2[1] == "0")
                    f36bToggle0();
                else if (str2[1] == "1")
                    f36bToggle1();
                else if (str2[1] == "2")
                    f36bToggle2();
                else if (str2[1] == "3")
                    f36bToggle3();
                break;
            case "f14b-a":
                if (str2[1] == "0")
                    f14baToggle0();
                else if (str2[1] == "1")
                    f14baToggle1();
                else if (str2[1] == "2")
                    f14baToggle2();
                else if (str2[1] == "3")
                    f14baToggle3();
                break;
            case "f16b-a":
                if (str2[1] == "0")
                    f16baToggle0();
                else if (str2[1] == "1")
                    f16baToggle1();
                else if (str2[1] == "2")
                    f16baToggle2();
                else if (str2[1] == "3")
                    f16baToggle3();
                break;
            case "f17b-a":
                if (str2[1] == "0")
                    f17baToggle0();
                else if (str2[1] == "1")
                    f17baToggle1();
                else if (str2[1] == "2")
                    f17baToggle2();
                else if (str2[1] == "3")
                    f17baToggle3();
                break;
            case "f18b-a":
                if (str2[1] == "0")
                    f18baToggle0();
                else if (str2[1] == "1")
                    f18baToggle1();
                else if (str2[1] == "2")
                    f18baToggle2();
                else if (str2[1] == "3")
                    f18baToggle3();
                break;
            case "f24b-a":
                if (str2[1] == "0")
                    f24baToggle0();
                else if (str2[1] == "1")
                    f24baToggle1();
                else if (str2[1] == "2")
                    f24baToggle2();
                else if (str2[1] == "3")
                    f24baToggle3();
                break;
            case "f26b-a":
                if (str2[1] == "0")
                    f26baToggle0();
                else if (str2[1] == "1")
                    f26baToggle1();
                else if (str2[1] == "2")
                    f26baToggle2();
                else if (str2[1] == "3")
                    f26baToggle3();
                break;
            case "f27b-a":
                if (str2[1] == "0")
                    f27baToggle0();
                else if (str2[1] == "1")
                    f27baToggle1();
                else if (str2[1] == "2")
                    f27baToggle2();
                else if (str2[1] == "3")
                    f27baToggle3();
                break;
            case "f28b-a":
                if (str2[1] == "0")
                    f28baToggle0();
                else if (str2[1] == "1")
                    f28baToggle1();
                else if (str2[1] == "2")
                    f28baToggle2();
                else if (str2[1] == "3")
                    f28baToggle3();
                break;
            case "f14b-b":
                if (str2[1] == "0")
                    f14bbToggle0();
                else if (str2[1] == "1")
                    f14bbToggle1();
                else if (str2[1] == "2")
                    f14bbToggle2();
                else if (str2[1] == "3")
                    f14bbToggle3();
                break;
            case "f16b-b":
                if (str2[1] == "0")
                    f16bbToggle0();
                else if (str2[1] == "1")
                    f16bbToggle1();
                else if (str2[1] == "2")
                    f16bbToggle2();
                else if (str2[1] == "3")
                    f16bbToggle3();
                break;
            case "f17b-b":
                if (str2[1] == "0")
                    f17bbToggle0();
                else if (str2[1] == "1")
                    f17bbToggle1();
                else if (str2[1] == "2")
                    f17bbToggle2();
                else if (str2[1] == "3")
                    f17bbToggle3();
                break;
            case "f18b-b":
                if (str2[1] == "0")
                    f18bbToggle0();
                else if (str2[1] == "1")
                    f18bbToggle1();
                else if (str2[1] == "2")
                    f18bbToggle2();
                else if (str2[1] == "3")
                    f18bbToggle3();
                break;
            case "f24b-b":
                if (str2[1] == "0")
                    f24bbToggle0();
                else if (str2[1] == "1")
                    f24bbToggle1();
                else if (str2[1] == "2")
                    f24bbToggle2();
                else if (str2[1] == "3")
                    f24bbToggle3();
                break;
            case "f26b-b":
                if (str2[1] == "0")
                    f26bbToggle0();
                else if (str2[1] == "1")
                    f26bbToggle1();
                else if (str2[1] == "2")
                    f26bbToggle2();
                else if (str2[1] == "3")
                    f26bbToggle3();
                break;
            case "f27b-b":
                if (str2[1] == "0")
                    f27bbToggle0();
                else if (str2[1] == "1")
                    f27bbToggle1();
                else if (str2[1] == "2")
                    f27bbToggle2();
                else if (str2[1] == "3")
                    f27bbToggle3();
                break;
            case "f28b-b":
                if (str2[1] == "0")
                    f28bbToggle0();
                else if (str2[1] == "1")
                    f28bbToggle1();
                else if (str2[1] == "2")
                    f28bbToggle2();
                else if (str2[1] == "3")
                    f28bbToggle3();
                break;
 
            default:
                break;
        }
    }
}

function Extracao() {
    str = $('#hdnExtracao').val().split("|");
    //debugger;
    for (var i = 1; i < str.length; i++) {
        str2 = str[i].split(",");

        switch (str2[0]) {
            case "d18":
                if (str2[1] == "1")
                    d18ToggleOUT();
                else
                    d18ToggleON();
                break;
            case "d17":
                if (str2[1] == "1")
                    d17ToggleOUT();
                else
                    d17ToggleON();
                break;
            case "d16":
                if (str2[1] == "1")
                    d16ToggleOUT();
                else
                    d16ToggleON();
                break;
            case "d15":
                if (str2[1] == "1")
                    d15ToggleOUT();
                else
                    d15ToggleON();
                break;
            case "d14":
                if (str2[1] == "1")
                    d14ToggleOUT();
                else
                    d14ToggleON();
                break;
            case "d13":
                if (str2[1] == "1")
                    d13ToggleOUT();
                else
                    d13ToggleON();
                break;
            case "d12":
                if (str2[1] == "1")
                    d12ToggleOUT();
                else
                    d12ToggleON();
                break;
            case "d11":
                if (str2[1] == "1")
                    d11ToggleOUT();
                else
                    d11ToggleON();
                break;
            case "d28":
                if (str2[1] == "1")
                    d28ToggleOUT();
                else
                    d28ToggleON();
                break;
            case "d27":
                if (str2[1] == "1")
                    d27ToggleOUT();
                else
                    d27ToggleON();
                break;
            case "d26":
                if (str2[1] == "1")
                    d26ToggleOUT();
                else
                    d26ToggleON();
                break;
            case "d25":
                if (str2[1] == "1")
                    d25ToggleOUT();
                else
                    d25ToggleON();
                break;
            case "d24":
                if (str2[1] == "1")
                    d24ToggleOUT();
                else
                    d24ToggleON();
                break;
            case "d23":
                if (str2[1] == "1")
                    d23ToggleOUT();
                else
                    d23ToggleON();
                break;
            case "d22":
                if (str2[1] == "1")
                    d22ToggleOUT();
                else
                    d22ToggleON();
                break;
            case "d21":
                if (str2[1] == "1")
                    d21ToggleOUT();
                else
                    d21ToggleON();
                break;
            case "d48b":
                if (str2[1] == "1")
                    d48bToggleOUT();
                else
                    d48bToggleON();
                break;
            case "d47b":
                if (str2[1] == "1")
                    d47bToggleOUT();
                else
                    d47bToggleON();
                break;
            case "d46b":
                if (str2[1] == "1")
                    d46bToggleOUT();
                else
                    d46bToggleON();
                break;
            case "d45b":
                if (str2[1] == "1")
                    d45bToggleOUT();
                else
                    d45bToggleON();
                break;
            case "d44b":
                if (str2[1] == "1")
                    d44bToggleOUT();
                else
                    d44bToggleON();
                break;
            case "d43b":
                if (str2[1] == "1")
                    d43bToggleOUT();
                else
                    d43bToggleON();
                break;
            case "d42b":
                if (str2[1] == "1")
                    d42bToggleOUT();
                else
                    d42bToggleON();
                break;
            case "d41b":
                if (str2[1] == "1")
                    d41bToggleOUT();
                else
                    d41bToggleON();
                break;
            case "d38b":
                if (str2[1] == "1")
                    d38bToggleOUT();
                else
                    d38bToggleON();
                break;
            case "d37b":
                if (str2[1] == "1")
                    d37bToggleOUT();
                else
                    d37bToggleON();
                break;
            case "d36b":
                if (str2[1] == "1")
                    d36bToggleOUT();
                else
                    d36bToggleON();
                break;
            case "d35b":
                if (str2[1] == "1")
                    d35bToggleOUT();
                else
                    d35bToggleON();
                break;
            case "d34b":
                if (str2[1] == "1")
                    d34bToggleOUT();
                else
                    d34bToggleON();
                break;
            case "d33b":
                if (str2[1] == "1")
                    d33bToggleOUT();
                else
                    d33bToggleON();
                break;
            case "d32b":
                if (str2[1] == "1")
                    d32bToggleOUT();
                else
                    d32bToggleON();
                break;
            case "d31b":
                if (str2[1] == "1")
                    d31bToggleOUT();
                else
                    d31bToggleON();
                break;
            default:
                break;
        }
    }
}

function MudaExtracao(Campo) {
    if ($("#hdn" + Campo).val() == 1) {
        $("#" + Campo).css({ "background": "#FA5858" });
    }
    else if ($("#hdn" + Campo).val() == 2) {
        $("#" + Campo).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    }
    else {
        $("#" + Campo).css({ "background": "#FFFFFF" });
    }
}

function getDefectos() {

    var datops18a = document.getElementById('ps18-a').value;
    var datops18b = document.getElementById('ps18-b').value;
    var datops18c = document.getElementById('ps18-c').value;

    var datops17a = document.getElementById('ps17-a').value;
    var datops17b = document.getElementById('ps17-b').value;
    var datops17c = document.getElementById('ps17-c').value;

    var datops16a = document.getElementById('ps16-a').value;
    var datops16b = document.getElementById('ps16-b').value;
    var datops16c = document.getElementById('ps16-c').value;

    var datops15a = document.getElementById('ps15-a').value;
    var datops15b = document.getElementById('ps15-b').value;
    var datops15c = document.getElementById('ps15-c').value;

    var datops14a = document.getElementById('ps14-a').value;
    var datops14b = document.getElementById('ps14-b').value;
    var datops14c = document.getElementById('ps14-c').value;

    var datops13a = document.getElementById('ps13-a').value;
    var datops13b = document.getElementById('ps13-b').value;
    var datops13c = document.getElementById('ps13-c').value;

    var datops12a = document.getElementById('ps12-a').value;
    var datops12b = document.getElementById('ps12-b').value;
    var datops12c = document.getElementById('ps12-c').value;

    var datops11a = document.getElementById('ps11-a').value;
    var datops11b = document.getElementById('ps11-b').value;
    var datops11c = document.getElementById('ps11-c').value;

    var total18 = parseInt(datops18a) + parseInt(datops18b) + parseInt(datops18c) +
        parseInt(datops17a) + parseInt(datops17b) + parseInt(datops17c) +
        parseInt(datops16a) + parseInt(datops16b) + parseInt(datops16c) +
        parseInt(datops15a) + parseInt(datops15b) + parseInt(datops15c) +
        parseInt(datops14a) + parseInt(datops14b) + parseInt(datops14c) +
        parseInt(datops13a) + parseInt(datops13b) + parseInt(datops13c) +
        parseInt(datops12a) + parseInt(datops12b) + parseInt(datops12c) +
        parseInt(datops11a) + parseInt(datops11b) + parseInt(datops11c);

    var datops28a = document.getElementById('ps28-a').value;
    var datops28b = document.getElementById('ps28-b').value;
    var datops28c = document.getElementById('ps28-c').value;

    var datops27a = document.getElementById('ps27-a').value;
    var datops27b = document.getElementById('ps27-b').value;
    var datops27c = document.getElementById('ps27-c').value;

    var datops26a = document.getElementById('ps26-a').value;
    var datops26b = document.getElementById('ps26-b').value;
    var datops26c = document.getElementById('ps26-c').value;

    var datops25a = document.getElementById('ps25-a').value;
    var datops25b = document.getElementById('ps25-b').value;
    var datops25c = document.getElementById('ps25-c').value;

    var datops24a = document.getElementById('ps24-a').value;
    var datops24b = document.getElementById('ps24-b').value;
    var datops24c = document.getElementById('ps24-c').value;

    var datops23a = document.getElementById('ps23-a').value;
    var datops23b = document.getElementById('ps23-b').value;
    var datops23c = document.getElementById('ps23-c').value;

    var datops22a = document.getElementById('ps22-a').value;
    var datops22b = document.getElementById('ps22-b').value;
    var datops22c = document.getElementById('ps22-c').value;

    var datops21a = document.getElementById('ps21-a').value;
    var datops21b = document.getElementById('ps21-b').value;
    var datops21c = document.getElementById('ps21-c').value;

    var total28 = parseInt(datops28a) + parseInt(datops28b) + parseInt(datops28c) +
        parseInt(datops27a) + parseInt(datops27b) + parseInt(datops27c) +
        parseInt(datops26a) + parseInt(datops26b) + parseInt(datops26c) +
        parseInt(datops25a) + parseInt(datops25b) + parseInt(datops25c) +
        parseInt(datops24a) + parseInt(datops24b) + parseInt(datops24c) +
        parseInt(datops23a) + parseInt(datops23b) + parseInt(datops23c) +
        parseInt(datops22a) + parseInt(datops22b) + parseInt(datops22c) +
        parseInt(datops21a) + parseInt(datops21b) + parseInt(datops21c);


    var datops38a = document.getElementById('ps38-a').value;
    var datops38b = document.getElementById('ps38-b').value;
    var datops38c = document.getElementById('ps38-c').value;

    var datops37a = document.getElementById('ps37-a').value;
    var datops37b = document.getElementById('ps37-b').value;
    var datops37c = document.getElementById('ps37-c').value;

    var datops36a = document.getElementById('ps36-a').value;
    var datops36b = document.getElementById('ps36-b').value;
    var datops36c = document.getElementById('ps36-c').value;

    var datops35a = document.getElementById('ps35-a').value;
    var datops35b = document.getElementById('ps35-b').value;
    var datops35c = document.getElementById('ps35-c').value;

    var datops34a = document.getElementById('ps34-a').value;
    var datops34b = document.getElementById('ps34-b').value;
    var datops34c = document.getElementById('ps34-c').value;

    var datops33a = document.getElementById('ps33-a').value;
    var datops33b = document.getElementById('ps33-b').value;
    var datops33c = document.getElementById('ps33-c').value;

    var datops32a = document.getElementById('ps32-a').value;
    var datops32b = document.getElementById('ps32-b').value;
    var datops32c = document.getElementById('ps32-c').value;

    var datops31a = document.getElementById('ps31-a').value;
    var datops31b = document.getElementById('ps31-b').value;
    var datops31c = document.getElementById('ps31-c').value;

    var total38 = parseInt(datops38a) + parseInt(datops38b) + parseInt(datops38c) +
        parseInt(datops37a) + parseInt(datops37b) + parseInt(datops37c) +
        parseInt(datops36a) + parseInt(datops36b) + parseInt(datops36c) +
        parseInt(datops35a) + parseInt(datops35b) + parseInt(datops35c) +
        parseInt(datops34a) + parseInt(datops34b) + parseInt(datops34c) +
        parseInt(datops33a) + parseInt(datops33b) + parseInt(datops33c) +
        parseInt(datops32a) + parseInt(datops32b) + parseInt(datops32c) +
        parseInt(datops31a) + parseInt(datops31b) + parseInt(datops31c);

    var datops48a = document.getElementById('ps48-a').value;
    var datops48b = document.getElementById('ps48-b').value;
    var datops48c = document.getElementById('ps48-c').value;

    var datops47a = document.getElementById('ps47-a').value;
    var datops47b = document.getElementById('ps47-b').value;
    var datops47c = document.getElementById('ps47-c').value;

    var datops46a = document.getElementById('ps46-a').value;
    var datops46b = document.getElementById('ps46-b').value;
    var datops46c = document.getElementById('ps46-c').value;

    var datops45a = document.getElementById('ps45-a').value;
    var datops45b = document.getElementById('ps45-b').value;
    var datops45c = document.getElementById('ps45-c').value;

    var datops44a = document.getElementById('ps44-a').value;
    var datops44b = document.getElementById('ps44-b').value;
    var datops44c = document.getElementById('ps44-c').value;

    var datops43a = document.getElementById('ps43-a').value;
    var datops43b = document.getElementById('ps43-b').value;
    var datops43c = document.getElementById('ps43-c').value;

    var datops42a = document.getElementById('ps42-a').value;
    var datops42b = document.getElementById('ps42-b').value;
    var datops42c = document.getElementById('ps42-c').value;

    var datops41a = document.getElementById('ps41-a').value;
    var datops41b = document.getElementById('ps41-b').value;
    var datops41c = document.getElementById('ps41-c').value;

    var total48 = parseInt(datops48a) + parseInt(datops48b) + parseInt(datops48c) +
        parseInt(datops47a) + parseInt(datops47b) + parseInt(datops47c) +
        parseInt(datops46a) + parseInt(datops46b) + parseInt(datops46c) +
        parseInt(datops45a) + parseInt(datops45b) + parseInt(datops45c) +
        parseInt(datops44a) + parseInt(datops44b) + parseInt(datops44c) +
        parseInt(datops43a) + parseInt(datops43b) + parseInt(datops43c) +
        parseInt(datops42a) + parseInt(datops42b) + parseInt(datops42c) +
        parseInt(datops41a) + parseInt(datops41b) + parseInt(datops41c);

    var datops18ba = document.getElementById('ps18b-a').value;
    var datops18bb = document.getElementById('ps18b-b').value;
    var datops18bc = document.getElementById('ps18b-c').value;

    var datops17ba = document.getElementById('ps17b-a').value;
    var datops17bb = document.getElementById('ps17b-b').value;
    var datops17bc = document.getElementById('ps17b-c').value;

    var datops16ba = document.getElementById('ps16b-a').value;
    var datops16bb = document.getElementById('ps16b-b').value;
    var datops16bc = document.getElementById('ps16b-c').value;

    var datops15ba = document.getElementById('ps15b-a').value;
    var datops15bb = document.getElementById('ps15b-b').value;
    var datops15bc = document.getElementById('ps15b-c').value;

    var datops14ba = document.getElementById('ps14b-a').value;
    var datops14bb = document.getElementById('ps14b-b').value;
    var datops14bc = document.getElementById('ps14b-c').value;

    var datops13ba = document.getElementById('ps13b-a').value;
    var datops13bb = document.getElementById('ps13b-b').value;
    var datops13bc = document.getElementById('ps13b-c').value;

    var datops12ba = document.getElementById('ps12b-a').value;
    var datops12bb = document.getElementById('ps12b-b').value;
    var datops12bc = document.getElementById('ps12b-c').value;

    var datops11ba = document.getElementById('ps11b-a').value;
    var datops11bb = document.getElementById('ps11b-b').value;
    var datops11bc = document.getElementById('ps11b-c').value;

    var total18b = parseInt(datops18ba) + parseInt(datops18bb) + parseInt(datops18bc) +
        parseInt(datops17ba) + parseInt(datops17bb) + parseInt(datops17bc) +
        parseInt(datops16ba) + parseInt(datops16bb) + parseInt(datops16bc) +
        parseInt(datops15ba) + parseInt(datops15bb) + parseInt(datops15bc) +
        parseInt(datops14ba) + parseInt(datops14bb) + parseInt(datops14bc) +
        parseInt(datops13ba) + parseInt(datops13bb) + parseInt(datops13bc) +
        parseInt(datops12ba) + parseInt(datops12bb) + parseInt(datops12bc) +
        parseInt(datops11ba) + parseInt(datops11bb) + parseInt(datops11bc);


    var datops28ba = document.getElementById('ps28b-a').value;
    var datops28bb = document.getElementById('ps28b-b').value;
    var datops28bc = document.getElementById('ps28b-c').value;

    var datops27ba = document.getElementById('ps27b-a').value;
    var datops27bb = document.getElementById('ps27b-b').value;
    var datops27bc = document.getElementById('ps27b-c').value;

    var datops26ba = document.getElementById('ps26b-a').value;
    var datops26bb = document.getElementById('ps26b-b').value;
    var datops26bc = document.getElementById('ps26b-c').value;

    var datops25ba = document.getElementById('ps25b-a').value;
    var datops25bb = document.getElementById('ps25b-b').value;
    var datops25bc = document.getElementById('ps25b-c').value;

    var datops24ba = document.getElementById('ps24b-a').value;
    var datops24bb = document.getElementById('ps24b-b').value;
    var datops24bc = document.getElementById('ps24b-c').value;

    var datops23ba = document.getElementById('ps23b-a').value;
    var datops23bb = document.getElementById('ps23b-b').value;
    var datops23bc = document.getElementById('ps23b-c').value;

    var datops22ba = document.getElementById('ps22b-a').value;
    var datops22bb = document.getElementById('ps22b-b').value;
    var datops22bc = document.getElementById('ps22b-c').value;

    var datops21ba = document.getElementById('ps21b-a').value;
    var datops21bb = document.getElementById('ps21b-b').value;
    var datops21bc = document.getElementById('ps21b-c').value;

    var total28b = parseInt(datops28ba) + parseInt(datops28bb) + parseInt(datops28bc) +
        parseInt(datops27ba) + parseInt(datops27bb) + parseInt(datops27bc) +
        parseInt(datops26ba) + parseInt(datops26bb) + parseInt(datops26bc) +
        parseInt(datops25ba) + parseInt(datops25bb) + parseInt(datops25bc) +
        parseInt(datops24ba) + parseInt(datops24bb) + parseInt(datops24bc) +
        parseInt(datops23ba) + parseInt(datops23bb) + parseInt(datops23bc) +
        parseInt(datops22ba) + parseInt(datops22bb) + parseInt(datops22bc) +
        parseInt(datops21ba) + parseInt(datops21bb) + parseInt(datops21bc);

    var datops38ba = document.getElementById('ps38b-a').value;
    var datops38bb = document.getElementById('ps38b-b').value;
    var datops38bc = document.getElementById('ps38b-c').value;

    var datops37ba = document.getElementById('ps37b-a').value;
    var datops37bb = document.getElementById('ps37b-b').value;
    var datops37bc = document.getElementById('ps37b-c').value;

    var datops36ba = document.getElementById('ps36b-a').value;
    var datops36bb = document.getElementById('ps36b-b').value;
    var datops36bc = document.getElementById('ps36b-c').value;

    var datops35ba = document.getElementById('ps35b-a').value;
    var datops35bb = document.getElementById('ps35b-b').value;
    var datops35bc = document.getElementById('ps35b-c').value;

    var datops34ba = document.getElementById('ps34b-a').value;
    var datops34bb = document.getElementById('ps34b-b').value;
    var datops34bc = document.getElementById('ps34b-c').value;

    var datops33ba = document.getElementById('ps33b-a').value;
    var datops33bb = document.getElementById('ps33b-b').value;
    var datops33bc = document.getElementById('ps33b-c').value;

    var datops32ba = document.getElementById('ps32b-a').value;
    var datops32bb = document.getElementById('ps32b-b').value;
    var datops32bc = document.getElementById('ps32b-c').value;

    var datops31ba = document.getElementById('ps31b-a').value;
    var datops31bb = document.getElementById('ps31b-b').value;
    var datops31bc = document.getElementById('ps31b-c').value;

    var total38b = parseInt(datops38ba) + parseInt(datops38bb) + parseInt(datops38bc) +
        parseInt(datops37ba) + parseInt(datops37bb) + parseInt(datops37bc) +
        parseInt(datops36ba) + parseInt(datops36bb) + parseInt(datops36bc) +
        parseInt(datops35ba) + parseInt(datops35bb) + parseInt(datops35bc) +
        parseInt(datops34ba) + parseInt(datops34bb) + parseInt(datops34bc) +
        parseInt(datops33ba) + parseInt(datops33bb) + parseInt(datops33bc) +
        parseInt(datops32ba) + parseInt(datops32bb) + parseInt(datops32bc) +
        parseInt(datops31ba) + parseInt(datops31bb) + parseInt(datops31bc);

    var datops48ba = document.getElementById('ps48b-a').value;
    var datops48bb = document.getElementById('ps48b-b').value;
    var datops48bc = document.getElementById('ps48b-c').value;

    var datops47ba = document.getElementById('ps47b-a').value;
    var datops47bb = document.getElementById('ps47b-b').value;
    var datops47bc = document.getElementById('ps47b-c').value;

    var datops46ba = document.getElementById('ps46b-a').value;
    var datops46bb = document.getElementById('ps46b-b').value;
    var datops46bc = document.getElementById('ps46b-c').value;

    var datops45ba = document.getElementById('ps45b-a').value;
    var datops45bb = document.getElementById('ps45b-b').value;
    var datops45bc = document.getElementById('ps45b-c').value;

    var datops44ba = document.getElementById('ps44b-a').value;
    var datops44bb = document.getElementById('ps44b-b').value;
    var datops44bc = document.getElementById('ps44b-c').value;

    var datops43ba = document.getElementById('ps43b-a').value;
    var datops43bb = document.getElementById('ps43b-b').value;
    var datops43bc = document.getElementById('ps43b-c').value;

    var datops42ba = document.getElementById('ps42b-a').value;
    var datops42bb = document.getElementById('ps42b-b').value;
    var datops42bc = document.getElementById('ps42b-c').value;

    var datops41ba = document.getElementById('ps41b-a').value;
    var datops41bb = document.getElementById('ps41b-b').value;
    var datops41bc = document.getElementById('ps41b-c').value;

    var total48b = parseInt(datops48ba) + parseInt(datops48bb) + parseInt(datops48bc) +
        parseInt(datops47ba) + parseInt(datops47bb) + parseInt(datops47bc) +
        parseInt(datops46ba) + parseInt(datops46bb) + parseInt(datops46bc) +
        parseInt(datops45ba) + parseInt(datops45bb) + parseInt(datops45bc) +
        parseInt(datops44ba) + parseInt(datops44bb) + parseInt(datops44bc) +
        parseInt(datops43ba) + parseInt(datops43bb) + parseInt(datops43bc) +
        parseInt(datops42ba) + parseInt(datops42bb) + parseInt(datops42bc) +
        parseInt(datops41ba) + parseInt(datops41bb) + parseInt(datops41bc);

    var totalps = total18 + total28 + total38 + total48 + total18b + total28b + total38b + total48b;
    var mediaps = totalps / (totalDientes * 3);
    var redondeado = Math.round(mediaps * Math.pow(10, 2)) / Math.pow(10, 2);

    $("#suma4").text(redondeado);


    var datomg18a = document.getElementById('mg18-a').value;
    var datomg18b = document.getElementById('mg18-b').value;
    var datomg18c = document.getElementById('mg18-c').value;

    var datomg17a = document.getElementById('mg17-a').value;
    var datomg17b = document.getElementById('mg17-b').value;
    var datomg17c = document.getElementById('mg17-c').value;

    var datomg16a = document.getElementById('mg16-a').value;
    var datomg16b = document.getElementById('mg16-b').value;
    var datomg16c = document.getElementById('mg16-c').value;

    var datomg15a = document.getElementById('mg15-a').value;
    var datomg15b = document.getElementById('mg15-b').value;
    var datomg15c = document.getElementById('mg15-c').value;

    var datomg14a = document.getElementById('mg14-a').value;
    var datomg14b = document.getElementById('mg14-b').value;
    var datomg14c = document.getElementById('mg14-c').value;

    var datomg13a = document.getElementById('mg13-a').value;
    var datomg13b = document.getElementById('mg13-b').value;
    var datomg13c = document.getElementById('mg13-c').value;

    var datomg12a = document.getElementById('mg12-a').value;
    var datomg12b = document.getElementById('mg12-b').value;
    var datomg12c = document.getElementById('mg12-c').value;

    var datomg11a = document.getElementById('mg11-a').value;
    var datomg11b = document.getElementById('mg11-b').value;
    var datomg11c = document.getElementById('mg11-c').value;

    var total18m = parseInt(datomg18a) + parseInt(datomg18b) + parseInt(datomg18c) +
        parseInt(datomg17a) + parseInt(datomg17b) + parseInt(datomg17c) +
        parseInt(datomg16a) + parseInt(datomg16b) + parseInt(datomg16c) +
        parseInt(datomg15a) + parseInt(datomg15b) + parseInt(datomg15c) +
        parseInt(datomg14a) + parseInt(datomg14b) + parseInt(datomg14c) +
        parseInt(datomg13a) + parseInt(datomg13b) + parseInt(datomg13c) +
        parseInt(datomg12a) + parseInt(datomg12b) + parseInt(datomg12c) +
        parseInt(datomg11a) + parseInt(datomg11b) + parseInt(datomg11c);

    var datomg28a = document.getElementById('mg28-a').value;
    var datomg28b = document.getElementById('mg28-b').value;
    var datomg28c = document.getElementById('mg28-c').value;

    var datomg27a = document.getElementById('mg27-a').value;
    var datomg27b = document.getElementById('mg27-b').value;
    var datomg27c = document.getElementById('mg27-c').value;

    var datomg26a = document.getElementById('mg26-a').value;
    var datomg26b = document.getElementById('mg26-b').value;
    var datomg26c = document.getElementById('mg26-c').value;

    var datomg25a = document.getElementById('mg25-a').value;
    var datomg25b = document.getElementById('mg25-b').value;
    var datomg25c = document.getElementById('mg25-c').value;

    var datomg24a = document.getElementById('mg24-a').value;
    var datomg24b = document.getElementById('mg24-b').value;
    var datomg24c = document.getElementById('mg24-c').value;

    var datomg23a = document.getElementById('mg23-a').value;
    var datomg23b = document.getElementById('mg23-b').value;
    var datomg23c = document.getElementById('mg23-c').value;

    var datomg22a = document.getElementById('mg22-a').value;
    var datomg22b = document.getElementById('mg22-b').value;
    var datomg22c = document.getElementById('mg22-c').value;

    var datomg21a = document.getElementById('mg21-a').value;
    var datomg21b = document.getElementById('mg21-b').value;
    var datomg21c = document.getElementById('mg21-c').value;

    var total28m = parseInt(datomg28a) + parseInt(datomg28b) + parseInt(datomg28c) +
        parseInt(datomg27a) + parseInt(datomg27b) + parseInt(datomg27c) +
        parseInt(datomg26a) + parseInt(datomg26b) + parseInt(datomg26c) +
        parseInt(datomg25a) + parseInt(datomg25b) + parseInt(datomg25c) +
        parseInt(datomg24a) + parseInt(datomg24b) + parseInt(datomg24c) +
        parseInt(datomg23a) + parseInt(datomg23b) + parseInt(datomg23c) +
        parseInt(datomg22a) + parseInt(datomg22b) + parseInt(datomg22c) +
        parseInt(datomg21a) + parseInt(datomg21b) + parseInt(datomg21c);


    var datomg38a = document.getElementById('mg38-a').value;
    var datomg38b = document.getElementById('mg38-b').value;
    var datomg38c = document.getElementById('mg38-c').value;

    var datomg37a = document.getElementById('mg37-a').value;
    var datomg37b = document.getElementById('mg37-b').value;
    var datomg37c = document.getElementById('mg37-c').value;

    var datomg36a = document.getElementById('mg36-a').value;
    var datomg36b = document.getElementById('mg36-b').value;
    var datomg36c = document.getElementById('mg36-c').value;

    var datomg35a = document.getElementById('mg35-a').value;
    var datomg35b = document.getElementById('mg35-b').value;
    var datomg35c = document.getElementById('mg35-c').value;

    var datomg34a = document.getElementById('mg34-a').value;
    var datomg34b = document.getElementById('mg34-b').value;
    var datomg34c = document.getElementById('mg34-c').value;

    var datomg33a = document.getElementById('mg33-a').value;
    var datomg33b = document.getElementById('mg33-b').value;
    var datomg33c = document.getElementById('mg33-c').value;

    var datomg32a = document.getElementById('mg32-a').value;
    var datomg32b = document.getElementById('mg32-b').value;
    var datomg32c = document.getElementById('mg32-c').value;

    var datomg31a = document.getElementById('mg31-a').value;
    var datomg31b = document.getElementById('mg31-b').value;
    var datomg31c = document.getElementById('mg31-c').value;

    var total38m = parseInt(datomg38a) + parseInt(datomg38b) + parseInt(datomg38c) +
        parseInt(datomg37a) + parseInt(datomg37b) + parseInt(datomg37c) +
        parseInt(datomg36a) + parseInt(datomg36b) + parseInt(datomg36c) +
        parseInt(datomg35a) + parseInt(datomg35b) + parseInt(datomg35c) +
        parseInt(datomg34a) + parseInt(datomg34b) + parseInt(datomg34c) +
        parseInt(datomg33a) + parseInt(datomg33b) + parseInt(datomg33c) +
        parseInt(datomg32a) + parseInt(datomg32b) + parseInt(datomg32c) +
        parseInt(datomg31a) + parseInt(datomg31b) + parseInt(datomg31c);

    var datomg48a = document.getElementById('mg48-a').value;
    var datomg48b = document.getElementById('mg48-b').value;
    var datomg48c = document.getElementById('mg48-c').value;

    var datomg47a = document.getElementById('mg47-a').value;
    var datomg47b = document.getElementById('mg47-b').value;
    var datomg47c = document.getElementById('mg47-c').value;

    var datomg46a = document.getElementById('mg46-a').value;
    var datomg46b = document.getElementById('mg46-b').value;
    var datomg46c = document.getElementById('mg46-c').value;

    var datomg45a = document.getElementById('mg45-a').value;
    var datomg45b = document.getElementById('mg45-b').value;
    var datomg45c = document.getElementById('mg45-c').value;

    var datomg44a = document.getElementById('mg44-a').value;
    var datomg44b = document.getElementById('mg44-b').value;
    var datomg44c = document.getElementById('mg44-c').value;

    var datomg43a = document.getElementById('mg43-a').value;
    var datomg43b = document.getElementById('mg43-b').value;
    var datomg43c = document.getElementById('mg43-c').value;

    var datomg42a = document.getElementById('mg42-a').value;
    var datomg42b = document.getElementById('mg42-b').value;
    var datomg42c = document.getElementById('mg42-c').value;

    var datomg41a = document.getElementById('mg41-a').value;
    var datomg41b = document.getElementById('mg41-b').value;
    var datomg41c = document.getElementById('mg41-c').value;

    var total48m = parseInt(datomg48a) + parseInt(datomg48b) + parseInt(datomg48c) +
        parseInt(datomg47a) + parseInt(datomg47b) + parseInt(datomg47c) +
        parseInt(datomg46a) + parseInt(datomg46b) + parseInt(datomg46c) +
        parseInt(datomg45a) + parseInt(datomg45b) + parseInt(datomg45c) +
        parseInt(datomg44a) + parseInt(datomg44b) + parseInt(datomg44c) +
        parseInt(datomg43a) + parseInt(datomg43b) + parseInt(datomg43c) +
        parseInt(datomg42a) + parseInt(datomg42b) + parseInt(datomg42c) +
        parseInt(datomg41a) + parseInt(datomg41b) + parseInt(datomg41c);

    var datomg18ba = document.getElementById('mg18b-a').value;
    var datomg18bb = document.getElementById('mg18b-b').value;
    var datomg18bc = document.getElementById('mg18b-c').value;

    var datomg17ba = document.getElementById('mg17b-a').value;
    var datomg17bb = document.getElementById('mg17b-b').value;
    var datomg17bc = document.getElementById('mg17b-c').value;

    var datomg16ba = document.getElementById('mg16b-a').value;
    var datomg16bb = document.getElementById('mg16b-b').value;
    var datomg16bc = document.getElementById('mg16b-c').value;

    var datomg15ba = document.getElementById('mg15b-a').value;
    var datomg15bb = document.getElementById('mg15b-b').value;
    var datomg15bc = document.getElementById('mg15b-c').value;

    var datomg14ba = document.getElementById('mg14b-a').value;
    var datomg14bb = document.getElementById('mg14b-b').value;
    var datomg14bc = document.getElementById('mg14b-c').value;

    var datomg13ba = document.getElementById('mg13b-a').value;
    var datomg13bb = document.getElementById('mg13b-b').value;
    var datomg13bc = document.getElementById('mg13b-c').value;

    var datomg12ba = document.getElementById('mg12b-a').value;
    var datomg12bb = document.getElementById('mg12b-b').value;
    var datomg12bc = document.getElementById('mg12b-c').value;

    var datomg11ba = document.getElementById('mg11b-a').value;
    var datomg11bb = document.getElementById('mg11b-b').value;
    var datomg11bc = document.getElementById('mg11b-c').value;

    var total18bm = parseInt(datomg18ba) + parseInt(datomg18bb) + parseInt(datomg18bc) +
        parseInt(datomg17ba) + parseInt(datomg17bb) + parseInt(datomg17bc) +
        parseInt(datomg16ba) + parseInt(datomg16bb) + parseInt(datomg16bc) +
        parseInt(datomg15ba) + parseInt(datomg15bb) + parseInt(datomg15bc) +
        parseInt(datomg14ba) + parseInt(datomg14bb) + parseInt(datomg14bc) +
        parseInt(datomg13ba) + parseInt(datomg13bb) + parseInt(datomg13bc) +
        parseInt(datomg12ba) + parseInt(datomg12bb) + parseInt(datomg12bc) +
        parseInt(datomg11ba) + parseInt(datomg11bb) + parseInt(datomg11bc);


    var datomg28ba = document.getElementById('mg28b-a').value;
    var datomg28bb = document.getElementById('mg28b-b').value;
    var datomg28bc = document.getElementById('mg28b-c').value;

    var datomg27ba = document.getElementById('mg27b-a').value;
    var datomg27bb = document.getElementById('mg27b-b').value;
    var datomg27bc = document.getElementById('mg27b-c').value;

    var datomg26ba = document.getElementById('mg26b-a').value;
    var datomg26bb = document.getElementById('mg26b-b').value;
    var datomg26bc = document.getElementById('mg26b-c').value;

    var datomg25ba = document.getElementById('mg25b-a').value;
    var datomg25bb = document.getElementById('mg25b-b').value;
    var datomg25bc = document.getElementById('mg25b-c').value;

    var datomg24ba = document.getElementById('mg24b-a').value;
    var datomg24bb = document.getElementById('mg24b-b').value;
    var datomg24bc = document.getElementById('mg24b-c').value;

    var datomg23ba = document.getElementById('mg23b-a').value;
    var datomg23bb = document.getElementById('mg23b-b').value;
    var datomg23bc = document.getElementById('mg23b-c').value;

    var datomg22ba = document.getElementById('mg22b-a').value;
    var datomg22bb = document.getElementById('mg22b-b').value;
    var datomg22bc = document.getElementById('mg22b-c').value;

    var datomg21ba = document.getElementById('mg21b-a').value;
    var datomg21bb = document.getElementById('mg21b-b').value;
    var datomg21bc = document.getElementById('mg21b-c').value;

    var total28bm = parseInt(datomg28ba) + parseInt(datomg28bb) + parseInt(datomg28bc) +
        parseInt(datomg27ba) + parseInt(datomg27bb) + parseInt(datomg27bc) +
        parseInt(datomg26ba) + parseInt(datomg26bb) + parseInt(datomg26bc) +
        parseInt(datomg25ba) + parseInt(datomg25bb) + parseInt(datomg25bc) +
        parseInt(datomg24ba) + parseInt(datomg24bb) + parseInt(datomg24bc) +
        parseInt(datomg23ba) + parseInt(datomg23bb) + parseInt(datomg23bc) +
        parseInt(datomg22ba) + parseInt(datomg22bb) + parseInt(datomg22bc) +
        parseInt(datomg21ba) + parseInt(datomg21bb) + parseInt(datomg21bc);

    var datomg38ba = document.getElementById('mg38b-a').value;
    var datomg38bb = document.getElementById('mg38b-b').value;
    var datomg38bc = document.getElementById('mg38b-c').value;

    var datomg37ba = document.getElementById('mg37b-a').value;
    var datomg37bb = document.getElementById('mg37b-b').value;
    var datomg37bc = document.getElementById('mg37b-c').value;

    var datomg36ba = document.getElementById('mg36b-a').value;
    var datomg36bb = document.getElementById('mg36b-b').value;
    var datomg36bc = document.getElementById('mg36b-c').value;

    var datomg35ba = document.getElementById('mg35b-a').value;
    var datomg35bb = document.getElementById('mg35b-b').value;
    var datomg35bc = document.getElementById('mg35b-c').value;

    var datomg34ba = document.getElementById('mg34b-a').value;
    var datomg34bb = document.getElementById('mg34b-b').value;
    var datomg34bc = document.getElementById('mg34b-c').value;

    var datomg33ba = document.getElementById('mg33b-a').value;
    var datomg33bb = document.getElementById('mg33b-b').value;
    var datomg33bc = document.getElementById('mg33b-c').value;

    var datomg32ba = document.getElementById('mg32b-a').value;
    var datomg32bb = document.getElementById('mg32b-b').value;
    var datomg32bc = document.getElementById('mg32b-c').value;

    var datomg31ba = document.getElementById('mg31b-a').value;
    var datomg31bb = document.getElementById('mg31b-b').value;
    var datomg31bc = document.getElementById('mg31b-c').value;

    var total38bm = parseInt(datomg38ba) + parseInt(datomg38bb) + parseInt(datomg38bc) +
        parseInt(datomg37ba) + parseInt(datomg37bb) + parseInt(datomg37bc) +
        parseInt(datomg36ba) + parseInt(datomg36bb) + parseInt(datomg36bc) +
        parseInt(datomg35ba) + parseInt(datomg35bb) + parseInt(datomg35bc) +
        parseInt(datomg34ba) + parseInt(datomg34bb) + parseInt(datomg34bc) +
        parseInt(datomg33ba) + parseInt(datomg33bb) + parseInt(datomg33bc) +
        parseInt(datomg32ba) + parseInt(datomg32bb) + parseInt(datomg32bc) +
        parseInt(datomg31ba) + parseInt(datomg31bb) + parseInt(datomg31bc);

    var datomg48ba = document.getElementById('mg48b-a').value;
    var datomg48bb = document.getElementById('mg48b-b').value;
    var datomg48bc = document.getElementById('mg48b-c').value;

    var datomg47ba = document.getElementById('mg47b-a').value;
    var datomg47bb = document.getElementById('mg47b-b').value;
    var datomg47bc = document.getElementById('mg47b-c').value;

    var datomg46ba = document.getElementById('mg46b-a').value;
    var datomg46bb = document.getElementById('mg46b-b').value;
    var datomg46bc = document.getElementById('mg46b-c').value;

    var datomg45ba = document.getElementById('mg45b-a').value;
    var datomg45bb = document.getElementById('mg45b-b').value;
    var datomg45bc = document.getElementById('mg45b-c').value;

    var datomg44ba = document.getElementById('mg44b-a').value;
    var datomg44bb = document.getElementById('mg44b-b').value;
    var datomg44bc = document.getElementById('mg44b-c').value;

    var datomg43ba = document.getElementById('mg43b-a').value;
    var datomg43bb = document.getElementById('mg43b-b').value;
    var datomg43bc = document.getElementById('mg43b-c').value;

    var datomg42ba = document.getElementById('mg42b-a').value;
    var datomg42bb = document.getElementById('mg42b-b').value;
    var datomg42bc = document.getElementById('mg42b-c').value;

    var datomg41ba = document.getElementById('mg41b-a').value;
    var datomg41bb = document.getElementById('mg41b-b').value;
    var datomg41bc = document.getElementById('mg41b-c').value;

    var total48bm = parseInt(datomg48ba) + parseInt(datomg48bb) + parseInt(datomg48bc) +
        parseInt(datomg47ba) + parseInt(datomg47bb) + parseInt(datomg47bc) +
        parseInt(datomg46ba) + parseInt(datomg46bb) + parseInt(datomg46bc) +
        parseInt(datomg45ba) + parseInt(datomg45bb) + parseInt(datomg45bc) +
        parseInt(datomg44ba) + parseInt(datomg44bb) + parseInt(datomg44bc) +
        parseInt(datomg43ba) + parseInt(datomg43bb) + parseInt(datomg43bc) +
        parseInt(datomg42ba) + parseInt(datomg42bb) + parseInt(datomg42bc) +
        parseInt(datomg41ba) + parseInt(datomg41bb) + parseInt(datomg41bc);

    var totalmg = total18m + total28m + total38m + total48m + total18bm + total28bm + total38bm + total48bm;
    var mediapsmg = (totalps + totalmg) / (totalDientes * 3);
    var redondeadopsmg = Math.round(mediapsmg * Math.pow(10, 2)) / Math.pow(10, 2);

    $("#suma5").text(redondeadopsmg);
}


//FUNCIONES PARA ANCHURA ENCÍA

//FUNCIONES PARA SANGRADO
$('#s11-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
        $("#hdns11-a").val("1");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
        $("#hdns11-a").val("2");
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
        $("#hdns11-a").val("0");
    }
);
$('#s11-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s11-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s12-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s12-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s12-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s13-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s13-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s13-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s16-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s16-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s16-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s17-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s17-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s17-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s18-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s18-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s18-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p18-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p18-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p18-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p17-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p17-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p17-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p16-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p16-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p16-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);




$('#s21-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s21-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s21-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s22-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s22-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s22-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s23-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s23-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s23-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p21-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p21-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p21-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p22-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p22-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p22-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p23-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p23-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p23-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#s18b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s18b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s18b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s17b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s17b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s17b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s16b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s16b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s16b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s15b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s14b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s13b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s13b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s13b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s12b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s12b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s12b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s11b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s11b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s11b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p18b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p18b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p18b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p17b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p17b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p17b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p16b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p16b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p16b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p15b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p14b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p13b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p12b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p11b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);


$('#s21b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s21b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s21b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s22b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s22b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s22b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s23b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s23b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s23b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s24b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s25b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s26b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s27b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s28b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p21b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p21b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p21b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p22b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p22b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p22b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p23b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p23b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p23b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p24b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p25b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p26b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p27b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p28b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

//SEGUNDA PARTE
$('#s48-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s48-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s48-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s47-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s47-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s47-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s46-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s46-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s46-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p48-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p48-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p48-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p47-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p47-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p47-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p46-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p46-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p46-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);


$('#s31-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s31-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s31-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s32-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s32-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s32-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s33-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s33-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s33-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p31-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p31-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p31-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p32-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p32-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p32-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p33-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p33-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p33-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#s48b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s48b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s48b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s47b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s47b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s47b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s46b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s46b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s46b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s45b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s44b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s43b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s42b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s41b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p48b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p48b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p48b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p47b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p47b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p47b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p46b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p46b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p46b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p45b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p44b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p43b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p42b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p41b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);


$('#s31b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s31b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s31b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s32b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s32b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s32b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

$('#s33b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s33b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s33b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s34b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s35b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s36b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s37b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38b-a').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38b-b').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);
$('#s38b-c').toggle(
    function () {
        $(this).css({ "background": "#FA5858" });
        totalSangrado++;
        getSangrado();
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/sangrado-supuracion.png')" });
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalSangrado--;
        getSangrado();
    }
);

//PLACA
$('#p31b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p31b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p31b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p32b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p32b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p32b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);

$('#p33b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p33b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p33b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p34b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p35b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p36b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p37b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38b-a').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38b-b').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);
$('#p38b-c').toggle(
    function () {
        $(this).css({ "background": "#58ACFA" });
        totalPlaca++;
        getPlaca();
    },
    function () {
        $(this).css({ "background": "#FFFFFF" });
        totalPlaca--;
        getPlaca();
    }
);


//Extraidos
function d18ToggleON() {
    $('#d18').val("|d18,0");
    $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-18.png')");
    $('#diente18-a').css("background-position", "0 -2px");
    $('#diente18-a').css("background-repeat", "no-repeat");
    $('#m18').css("display", "none");
    $('#i18').css("display", "none");
    $('#f18').css("display", "none");
    $('#s18-a').css("display", "none");
    $('#s18-b').css("display", "none");
    $('#s18-c').css("display", "none");
    $('#p18-a').css("display", "none");
    $('#p18-b').css("display", "none");
    $('#p18-c').css("display", "none");
    $('#mg18-a').css("display", "none");
    $('#mg18-b').css("display", "none");
    $('#mg18-c').css("display", "none");
    $('#ps18-a').css("display", "none");
    $('#ps18-b').css("display", "none");
    $('#ps18-c').css("display", "none");
    /*$('#furca18').css("background","none");*/
    $('#mg18-a').val('0');
    $('#mg18-b').val('0');
    $('#mg18-c').val('0');
    $('#ps18-a').val('0');
    $('#ps18-b').val('0');
    $('#ps18-c').val('0');

    $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-18b.png')");
    $('#diente18b-a').css("background-position", "0 23px");
    $('#diente18b-a').css("background-repeat", "no-repeat");
    $('#m18b').css("display", "none");
    $('#i18b').css("display", "none");
    $('#f18b-a').css("display", "none");
    $('#f18b-b').css("display", "none");
    $('#s18b-a').css("display", "none");
    $('#s18b-b').css("display", "none");
    $('#s18b-c').css("display", "none");
    $('#p18b-a').css("display", "none");
    $('#p18b-b').css("display", "none");
    $('#p18b-c').css("display", "none");
    $('#mg18b-a').css("display", "none");
    $('#mg18b-b').css("display", "none");
    $('#mg18b-c').css("display", "none");
    $('#ps18b-a').css("display", "none");
    $('#ps18b-b').css("display", "none");
    $('#ps18b-c').css("display", "none");
    $('#mg18b-a').val('0');
    $('#mg18b-b').val('0');
    $('#mg18b-c').val('0');
    $('#ps18b-a').val('0');
    $('#ps18b-b').val('0');
    $('#ps18b-c').val('0');

    $('#furca18').css("display", "none");
    $('#furca18-a').css("display", "none");
    $('#furca18-b').css("display", "none");
    $('#ae18').css("display", "none");
    $('#pi18').css("display", "none");


    //cargar18a();
    //cargar18b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();

}
function d18ToggleOUT() {
    $('#d18').val("|d18,1");
    $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-18.png')");
    $('#diente18-a').css("background-position", "0 -2px");
    $('#diente18-a').css("background-repeat", "no-repeat");
    $('#m18').css("display", "inline");
    $('#i18').css("display", "block");
    $('#f18').css("display", "inline");
    $('#s18-a').css("display", "inline");
    $('#s18-b').css("display", "inline");
    $('#s18-c').css("display", "inline");
    $('#p18-a').css("display", "inline");
    $('#p18-b').css("display", "inline");
    $('#p18-c').css("display", "inline");
    $('#mg18-a').css("display", "inline");
    $('#mg18-b').css("display", "inline");
    $('#mg18-c').css("display", "inline");
    $('#ps18-a').css("display", "inline");
    $('#ps18-b').css("display", "inline");
    $('#ps18-c').css("display", "inline");

    $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-18b.png')");
    $('#diente18b-a').css("background-position", "0 23px");
    $('#diente18b-a').css("background-repeat", "no-repeat");
    $('#m18b').css("display", "inline");
    $('#i18b').css("display", "inline");
    $('#f18b-a').css("display", "inline");
    $('#f18b-b').css("display", "inline");
    $('#s18b-a').css("display", "inline");
    $('#s18b-b').css("display", "inline");
    $('#s18b-c').css("display", "inline");
    $('#p18b-a').css("display", "inline");
    $('#p18b-b').css("display", "inline");
    $('#p18b-c').css("display", "inline");
    $('#mg18b-a').css("display", "inline");
    $('#mg18b-b').css("display", "inline");
    $('#mg18b-c').css("display", "inline");
    $('#ps18b-a').css("display", "inline");
    $('#ps18b-b').css("display", "inline");
    $('#ps18b-c').css("display", "inline");

    $('#furca18').css("display", "block");
    $('#furca18-a').css("display", "block");
    $('#furca18-b').css("display", "block");
    $('#ae18').css("display", "inline");
    $('#pi18').css("display", "inline");

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d18').toggle(
    function () {
        $('#d18').val("|d18,0");
        $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-18.png')");
        $('#diente18-a').css("background-position", "0 -2px");
        $('#diente18-a').css("background-repeat", "no-repeat");
        $('#m18').css("display", "none");
        $('#i18').css("display", "none");
        $('#f18').css("display", "none");
        $('#s18-a').css("display", "none");
        $('#s18-b').css("display", "none");
        $('#s18-c').css("display", "none");
        $('#p18-a').css("display", "none");
        $('#p18-b').css("display", "none");
        $('#p18-c').css("display", "none");
        $('#mg18-a').css("display", "none");
        $('#mg18-b').css("display", "none");
        $('#mg18-c').css("display", "none");
        $('#ps18-a').css("display", "none");
        $('#ps18-b').css("display", "none");
        $('#ps18-c').css("display", "none");
        /*$('#furca18').css("background","none");*/
        $('#mg18-a').val('0');
        $('#mg18-b').val('0');
        $('#mg18-c').val('0');
        $('#ps18-a').val('0');
        $('#ps18-b').val('0');
        $('#ps18-c').val('0');

        $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-18b.png')");
        $('#diente18b-a').css("background-position", "0 23px");
        $('#diente18b-a').css("background-repeat", "no-repeat");
        $('#m18b').css("display", "none");
        $('#i18b').css("display", "none");
        $('#f18b-a').css("display", "none");
        $('#f18b-b').css("display", "none");
        $('#s18b-a').css("display", "none");
        $('#s18b-b').css("display", "none");
        $('#s18b-c').css("display", "none");
        $('#p18b-a').css("display", "none");
        $('#p18b-b').css("display", "none");
        $('#p18b-c').css("display", "none");
        $('#mg18b-a').css("display", "none");
        $('#mg18b-b').css("display", "none");
        $('#mg18b-c').css("display", "none");
        $('#ps18b-a').css("display", "none");
        $('#ps18b-b').css("display", "none");
        $('#ps18b-c').css("display", "none");
        $('#mg18b-a').val('0');
        $('#mg18b-b').val('0');
        $('#mg18b-c').val('0');
        $('#ps18b-a').val('0');
        $('#ps18b-b').val('0');
        $('#ps18b-c').val('0');

        $('#furca18').css("display", "none");
        $('#furca18-a').css("display", "none");
        $('#furca18-b').css("display", "none");
        $('#ae18').css("display", "none");
        $('#pi18').css("display", "none");


        //cargar18a();
        //cargar18b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();

    },
    function () {
        $('#d18').val("|d18,1");
        $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-18.png')");
        $('#diente18-a').css("background-position", "0 -2px");
        $('#diente18-a').css("background-repeat", "no-repeat");
        $('#m18').css("display", "inline");
        $('#i18').css("display", "block");
        $('#f18').css("display", "inline");
        $('#s18-a').css("display", "inline");
        $('#s18-b').css("display", "inline");
        $('#s18-c').css("display", "inline");
        $('#p18-a').css("display", "inline");
        $('#p18-b').css("display", "inline");
        $('#p18-c').css("display", "inline");
        $('#mg18-a').css("display", "inline");
        $('#mg18-b').css("display", "inline");
        $('#mg18-c').css("display", "inline");
        $('#ps18-a').css("display", "inline");
        $('#ps18-b').css("display", "inline");
        $('#ps18-c').css("display", "inline");

        $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-18b.png')");
        $('#diente18b-a').css("background-position", "0 23px");
        $('#diente18b-a').css("background-repeat", "no-repeat");
        $('#m18b').css("display", "inline");
        $('#i18b').css("display", "inline");
        $('#f18b-a').css("display", "inline");
        $('#f18b-b').css("display", "inline");
        $('#s18b-a').css("display", "inline");
        $('#s18b-b').css("display", "inline");
        $('#s18b-c').css("display", "inline");
        $('#p18b-a').css("display", "inline");
        $('#p18b-b').css("display", "inline");
        $('#p18b-c').css("display", "inline");
        $('#mg18b-a').css("display", "inline");
        $('#mg18b-b').css("display", "inline");
        $('#mg18b-c').css("display", "inline");
        $('#ps18b-a').css("display", "inline");
        $('#ps18b-b').css("display", "inline");
        $('#ps18b-c').css("display", "inline");

        $('#furca18').css("display", "block");
        $('#furca18-a').css("display", "block");
        $('#furca18-b').css("display", "block");
        $('#ae18').css("display", "inline");
        $('#pi18').css("display", "inline");

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d17ToggleON() {
    $('#d17').val("|d17,0");
    $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-17.png')");
    /*$('#diente17-a').css("background-position","0 -2px");*/
    $('#diente17-a').css("background-repeat", "no-repeat");
    $('#m17').css("display", "none");
    $('#i17').css("display", "none");
    $('#f17').css("display", "none");
    $('#s17-a').css("display", "none");
    $('#s17-b').css("display", "none");
    $('#s17-c').css("display", "none");
    $('#p17-a').css("display", "none");
    $('#p17-b').css("display", "none");
    $('#p17-c').css("display", "none");
    $('#mg17-a').css("display", "none");
    $('#mg17-b').css("display", "none");
    $('#mg17-c').css("display", "none");
    $('#ps17-a').css("display", "none");
    $('#ps17-b').css("display", "none");
    $('#ps17-c').css("display", "none");
    /*$('#furca17').css("background","none");*/
    $('#mg17-a').val('0');
    $('#mg17-b').val('0');
    $('#mg17-c').val('0');
    $('#ps17-a').val('0');
    $('#ps17-b').val('0');
    $('#ps17-c').val('0');

    $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-17b.png')");
    $('#diente17b-a').css("background-position", "0 24px");
    $('#diente17b-a').css("background-repeat", "no-repeat");
    $('#m17b').css("display", "none");
    $('#i17b').css("display", "none");
    $('#f17b-a').css("display", "none");
    $('#f17b-b').css("display", "none");
    $('#s17b-a').css("display", "none");
    $('#s17b-b').css("display", "none");
    $('#s17b-c').css("display", "none");
    $('#p17b-a').css("display", "none");
    $('#p17b-b').css("display", "none");
    $('#p17b-c').css("display", "none");
    $('#mg17b-a').css("display", "none");
    $('#mg17b-b').css("display", "none");
    $('#mg17b-c').css("display", "none");
    $('#ps17b-a').css("display", "none");
    $('#ps17b-b').css("display", "none");
    $('#ps17b-c').css("display", "none");
    $('#mg17b-a').val('0');
    $('#mg17b-b').val('0');
    $('#mg17b-c').val('0');
    $('#ps17b-a').val('0');
    $('#ps17b-b').val('0');
    $('#ps17b-c').val('0');

    $('#furca17').css("display", "none");
    $('#furca17-a').css("display", "none");
    $('#furca17-b').css("display", "none");
    $('#ae17').css("display", "none");
    $('#pi17').css("display", "none");



    //cargar17a();
    //cargar17b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
    //getSangrado();
    //getPlaca();
}
function d17ToggleOUT() {
    $('#d17').val("|d17,1");
    $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-17.png')");
    $('#diente17-a').css("background-position", "0 -2px");
    $('#diente17-a').css("background-repeat", "no-repeat");
    $('#m17').css("display", "inline");
    $('#i17').css("display", "block");
    $('#f17').css("display", "inline");
    $('#s17-a').css("display", "inline");
    $('#s17-b').css("display", "inline");
    $('#s17-c').css("display", "inline");
    $('#p17-a').css("display", "inline");
    $('#p17-b').css("display", "inline");
    $('#p17-c').css("display", "inline");
    $('#mg17-a').css("display", "inline");
    $('#mg17-b').css("display", "inline");
    $('#mg17-c').css("display", "inline");
    $('#ps17-a').css("display", "inline");
    $('#ps17-b').css("display", "inline");
    $('#ps17-c').css("display", "inline");

    $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-17b.png')");
    $('#diente17b-a').css("background-position", "0 24px");
    $('#diente17b-a').css("background-repeat", "no-repeat");
    $('#m17b').css("display", "inline");
    $('#i17b').css("display", "block");
    $('#f17b-a').css("display", "inline");
    $('#f17b-b').css("display", "inline");
    $('#s17b-a').css("display", "inline");
    $('#s17b-b').css("display", "inline");
    $('#s17b-c').css("display", "inline");
    $('#p17b-a').css("display", "inline");
    $('#p17b-b').css("display", "inline");
    $('#p17b-c').css("display", "inline");
    $('#mg17b-a').css("display", "inline");
    $('#mg17b-b').css("display", "inline");
    $('#mg17b-c').css("display", "inline");
    $('#ps17b-a').css("display", "inline");
    $('#ps17b-b').css("display", "inline");
    $('#ps17b-c').css("display", "inline");
    $('#furca17').css("display", "block");
    $('#furca17-a').css("display", "block");
    $('#furca17-b').css("display", "block");
    $('#ae17').css("display", "inline");
    $('#pi17').css("display", "inline");



    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
    //getSangrado();
    //getPlaca();
}
$('#d17').toggle(
    function () {
        $('#d17').val("|d17,0");
        $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-17.png')");
        /*$('#diente17-a').css("background-position","0 -2px");*/
        $('#diente17-a').css("background-repeat", "no-repeat");
        $('#m17').css("display", "none");
        $('#i17').css("display", "none");
        $('#f17').css("display", "none");
        $('#s17-a').css("display", "none");
        $('#s17-b').css("display", "none");
        $('#s17-c').css("display", "none");
        $('#p17-a').css("display", "none");
        $('#p17-b').css("display", "none");
        $('#p17-c').css("display", "none");
        $('#mg17-a').css("display", "none");
        $('#mg17-b').css("display", "none");
        $('#mg17-c').css("display", "none");
        $('#ps17-a').css("display", "none");
        $('#ps17-b').css("display", "none");
        $('#ps17-c').css("display", "none");
        /*$('#furca17').css("background","none");*/
        $('#mg17-a').val('0');
        $('#mg17-b').val('0');
        $('#mg17-c').val('0');
        $('#ps17-a').val('0');
        $('#ps17-b').val('0');
        $('#ps17-c').val('0');

        $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-17b.png')");
        $('#diente17b-a').css("background-position", "0 24px");
        $('#diente17b-a').css("background-repeat", "no-repeat");
        $('#m17b').css("display", "none");
        $('#i17b').css("display", "none");
        $('#f17b-a').css("display", "none");
        $('#f17b-b').css("display", "none");
        $('#s17b-a').css("display", "none");
        $('#s17b-b').css("display", "none");
        $('#s17b-c').css("display", "none");
        $('#p17b-a').css("display", "none");
        $('#p17b-b').css("display", "none");
        $('#p17b-c').css("display", "none");
        $('#mg17b-a').css("display", "none");
        $('#mg17b-b').css("display", "none");
        $('#mg17b-c').css("display", "none");
        $('#ps17b-a').css("display", "none");
        $('#ps17b-b').css("display", "none");
        $('#ps17b-c').css("display", "none");
        $('#mg17b-a').val('0');
        $('#mg17b-b').val('0');
        $('#mg17b-c').val('0');
        $('#ps17b-a').val('0');
        $('#ps17b-b').val('0');
        $('#ps17b-c').val('0');

        $('#furca17').css("display", "none");
        $('#furca17-a').css("display", "none");
        $('#furca17-b').css("display", "none");
        $('#ae17').css("display", "none");
        $('#pi17').css("display", "none");



        //cargar17a();
        //cargar17b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d17').val("|d17,1");
        $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-17.png')");
        $('#diente17-a').css("background-position", "0 -2px");
        $('#diente17-a').css("background-repeat", "no-repeat");
        $('#m17').css("display", "inline");
        $('#i17').css("display", "block");
        $('#f17').css("display", "inline");
        $('#s17-a').css("display", "inline");
        $('#s17-b').css("display", "inline");
        $('#s17-c').css("display", "inline");
        $('#p17-a').css("display", "inline");
        $('#p17-b').css("display", "inline");
        $('#p17-c').css("display", "inline");
        $('#mg17-a').css("display", "inline");
        $('#mg17-b').css("display", "inline");
        $('#mg17-c').css("display", "inline");
        $('#ps17-a').css("display", "inline");
        $('#ps17-b').css("display", "inline");
        $('#ps17-c').css("display", "inline");

        $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-17b.png')");
        $('#diente17b-a').css("background-position", "0 24px");
        $('#diente17b-a').css("background-repeat", "no-repeat");
        $('#m17b').css("display", "inline");
        $('#i17b').css("display", "block");
        $('#f17b-a').css("display", "inline");
        $('#f17b-b').css("display", "inline");
        $('#s17b-a').css("display", "inline");
        $('#s17b-b').css("display", "inline");
        $('#s17b-c').css("display", "inline");
        $('#p17b-a').css("display", "inline");
        $('#p17b-b').css("display", "inline");
        $('#p17b-c').css("display", "inline");
        $('#mg17b-a').css("display", "inline");
        $('#mg17b-b').css("display", "inline");
        $('#mg17b-c').css("display", "inline");
        $('#ps17b-a').css("display", "inline");
        $('#ps17b-b').css("display", "inline");
        $('#ps17b-c').css("display", "inline");
        $('#furca17').css("display", "block");
        $('#furca17-a').css("display", "block");
        $('#furca17-b').css("display", "block");
        $('#ae17').css("display", "inline");
        $('#pi17').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
        //getSangrado();
        //getPlaca();
    }
);
function d16ToggleON() {
    $('#d16').val("|d16,0");
    $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-16.png')");
    $('#diente16-a').css("background-position", "0 4px");
    $('#diente16-a').css("background-repeat", "no-repeat");
    $('#m16').css("display", "none");
    $('#i16').css("display", "none");
    $('#f16').css("display", "none");
    $('#s16-a').css("display", "none");
    $('#s16-b').css("display", "none");
    $('#s16-c').css("display", "none");
    $('#p16-a').css("display", "none");
    $('#p16-b').css("display", "none");
    $('#p16-c').css("display", "none");
    $('#mg16-a').css("display", "none");
    $('#mg16-b').css("display", "none");
    $('#mg16-c').css("display", "none");
    $('#ps16-a').css("display", "none");
    $('#ps16-b').css("display", "none");
    $('#ps16-c').css("display", "none");
    /*$('#furca16').css("background","none");*/
    $('#mg16-a').val('0');
    $('#mg16-b').val('0');
    $('#mg16-c').val('0');
    $('#ps16-a').val('0');
    $('#ps16-b').val('0');
    $('#ps16-c').val('0');

    $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-16b.png')");
    $('#diente16b-a').css("background-position", "0 22px");
    $('#diente16b-a').css("background-repeat", "no-repeat");
    $('#m16b').css("display", "none");
    $('#i16b').css("display", "none");
    $('#f16b-a').css("display", "none");
    $('#f16b-b').css("display", "none");
    $('#s16b-a').css("display", "none");
    $('#s16b-b').css("display", "none");
    $('#s16b-c').css("display", "none");
    $('#p16b-a').css("display", "none");
    $('#p16b-b').css("display", "none");
    $('#p16b-c').css("display", "none");
    $('#mg16b-a').css("display", "none");
    $('#mg16b-b').css("display", "none");
    $('#mg16b-c').css("display", "none");
    $('#ps16b-a').css("display", "none");
    $('#ps16b-b').css("display", "none");
    $('#ps16b-c').css("display", "none");
    $('#mg16b-a').val('0');
    $('#mg16b-b').val('0');
    $('#mg16b-c').val('0');
    $('#ps16b-a').val('0');
    $('#ps16b-b').val('0');
    $('#ps16b-c').val('0');
    $('#furca16').css("display", "none");
    $('#furca16-a').css("display", "none");
    $('#furca16-b').css("display", "none");
    $('#ae16').css("display", "none");
    $('#pi16').css("display", "none");



    //cargar16a();
    //cargar16b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d16ToggleOUT() {
    $('#d16').val("|d16,1");
    $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-16.png')");
    $('#diente16-a').css("background-position", "0 4px");
    $('#diente16-a').css("background-repeat", "no-repeat");
    $('#m16').css("display", "inline");
    $('#i16').css("display", "block");
    $('#f16').css("display", "inline");
    $('#s16-a').css("display", "inline");
    $('#s16-b').css("display", "inline");
    $('#s16-c').css("display", "inline");
    $('#p16-a').css("display", "inline");
    $('#p16-b').css("display", "inline");
    $('#p16-c').css("display", "inline");
    $('#mg16-a').css("display", "inline");
    $('#mg16-b').css("display", "inline");
    $('#mg16-c').css("display", "inline");
    $('#ps16-a').css("display", "inline");
    $('#ps16-b').css("display", "inline");
    $('#ps16-c').css("display", "inline");

    $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-16b.png')");
    $('#diente16b-a').css("background-position", "0 22px");
    $('#diente16b-a').css("background-repeat", "no-repeat");
    $('#m16b').css("display", "inline");
    $('#i16b').css("display", "block");
    $('#f16b-a').css("display", "inline");
    $('#f16b-b').css("display", "inline");
    $('#s16b-a').css("display", "inline");
    $('#s16b-b').css("display", "inline");
    $('#s16b-c').css("display", "inline");
    $('#p16b-a').css("display", "inline");
    $('#p16b-b').css("display", "inline");
    $('#p16b-c').css("display", "inline");
    $('#mg16b-a').css("display", "inline");
    $('#mg16b-b').css("display", "inline");
    $('#mg16b-c').css("display", "inline");
    $('#ps16b-a').css("display", "inline");
    $('#ps16b-b').css("display", "inline");
    $('#ps16b-c').css("display", "inline");
    $('#furca16').css("display", "block");
    $('#furca16-a').css("display", "block");
    $('#furca16-b').css("display", "block");
    $('#ae16').css("display", "inline");
    $('#pi16').css("display", "inline");



    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d16').toggle(
    function () {
        $('#d16').val("|d16,0");
        $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-16.png')");
        $('#diente16-a').css("background-position", "0 4px");
        $('#diente16-a').css("background-repeat", "no-repeat");
        $('#m16').css("display", "none");
        $('#i16').css("display", "none");
        $('#f16').css("display", "none");
        $('#s16-a').css("display", "none");
        $('#s16-b').css("display", "none");
        $('#s16-c').css("display", "none");
        $('#p16-a').css("display", "none");
        $('#p16-b').css("display", "none");
        $('#p16-c').css("display", "none");
        $('#mg16-a').css("display", "none");
        $('#mg16-b').css("display", "none");
        $('#mg16-c').css("display", "none");
        $('#ps16-a').css("display", "none");
        $('#ps16-b').css("display", "none");
        $('#ps16-c').css("display", "none");
        /*$('#furca16').css("background","none");*/
        $('#mg16-a').val('0');
        $('#mg16-b').val('0');
        $('#mg16-c').val('0');
        $('#ps16-a').val('0');
        $('#ps16-b').val('0');
        $('#ps16-c').val('0');

        $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-16b.png')");
        $('#diente16b-a').css("background-position", "0 22px");
        $('#diente16b-a').css("background-repeat", "no-repeat");
        $('#m16b').css("display", "none");
        $('#i16b').css("display", "none");
        $('#f16b-a').css("display", "none");
        $('#f16b-b').css("display", "none");
        $('#s16b-a').css("display", "none");
        $('#s16b-b').css("display", "none");
        $('#s16b-c').css("display", "none");
        $('#p16b-a').css("display", "none");
        $('#p16b-b').css("display", "none");
        $('#p16b-c').css("display", "none");
        $('#mg16b-a').css("display", "none");
        $('#mg16b-b').css("display", "none");
        $('#mg16b-c').css("display", "none");
        $('#ps16b-a').css("display", "none");
        $('#ps16b-b').css("display", "none");
        $('#ps16b-c').css("display", "none");
        $('#mg16b-a').val('0');
        $('#mg16b-b').val('0');
        $('#mg16b-c').val('0');
        $('#ps16b-a').val('0');
        $('#ps16b-b').val('0');
        $('#ps16b-c').val('0');
        $('#furca16').css("display", "none");
        $('#furca16-a').css("display", "none");
        $('#furca16-b').css("display", "none");
        $('#ae16').css("display", "none");
        $('#pi16').css("display", "none");



        //cargar16a();
        //cargar16b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d16').val("|d16,1");
        $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-16.png')");
        $('#diente16-a').css("background-position", "0 4px");
        $('#diente16-a').css("background-repeat", "no-repeat");
        $('#m16').css("display", "inline");
        $('#i16').css("display", "block");
        $('#f16').css("display", "inline");
        $('#s16-a').css("display", "inline");
        $('#s16-b').css("display", "inline");
        $('#s16-c').css("display", "inline");
        $('#p16-a').css("display", "inline");
        $('#p16-b').css("display", "inline");
        $('#p16-c').css("display", "inline");
        $('#mg16-a').css("display", "inline");
        $('#mg16-b').css("display", "inline");
        $('#mg16-c').css("display", "inline");
        $('#ps16-a').css("display", "inline");
        $('#ps16-b').css("display", "inline");
        $('#ps16-c').css("display", "inline");

        $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-16b.png')");
        $('#diente16b-a').css("background-position", "0 22px");
        $('#diente16b-a').css("background-repeat", "no-repeat");
        $('#m16b').css("display", "inline");
        $('#i16b').css("display", "block");
        $('#f16b-a').css("display", "inline");
        $('#f16b-b').css("display", "inline");
        $('#s16b-a').css("display", "inline");
        $('#s16b-b').css("display", "inline");
        $('#s16b-c').css("display", "inline");
        $('#p16b-a').css("display", "inline");
        $('#p16b-b').css("display", "inline");
        $('#p16b-c').css("display", "inline");
        $('#mg16b-a').css("display", "inline");
        $('#mg16b-b').css("display", "inline");
        $('#mg16b-c').css("display", "inline");
        $('#ps16b-a').css("display", "inline");
        $('#ps16b-b').css("display", "inline");
        $('#ps16b-c').css("display", "inline");
        $('#furca16').css("display", "block");
        $('#furca16-a').css("display", "block");
        $('#furca16-b').css("display", "block");
        $('#ae16').css("display", "inline");
        $('#pi16').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d15ToggleON() {
    $('#d15').val("|d15,0");
    $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-15.png')");
    $('#diente15-a').css("background-position", "0 5px");
    $('#diente15-a').css("background-repeat", "no-repeat");
    $('#m15').css("display", "none");
    $('#i15').css("display", "none");
    $('#f15').css("display", "none");
    $('#s15-a').css("display", "none");
    $('#s15-b').css("display", "none");
    $('#s15-c').css("display", "none");
    $('#p15-a').css("display", "none");
    $('#p15-b').css("display", "none");
    $('#p15-c').css("display", "none");
    $('#mg15-a').css("display", "none");
    $('#mg15-b').css("display", "none");
    $('#mg15-c').css("display", "none");
    $('#ps15-a').css("display", "none");
    $('#ps15-b').css("display", "none");
    $('#ps15-c').css("display", "none");
    $('#mg15-a').val('0');
    $('#mg15-b').val('0');
    $('#mg15-c').val('0');
    $('#ps15-a').val('0');
    $('#ps15-b').val('0');
    $('#ps15-c').val('0');

    $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-15b.png')");
    $('#diente15b-a').css("background-position", "0 17px");
    $('#diente15b-a').css("background-repeat", "no-repeat");
    $('#m15b').css("display", "none");
    $('#i15b').css("display", "none");
    $('#s15b-a').css("display", "none");
    $('#s15b-b').css("display", "none");
    $('#s15b-c').css("display", "none");
    $('#p15b-a').css("display", "none");
    $('#p15b-b').css("display", "none");
    $('#p15b-c').css("display", "none");
    $('#mg15b-a').css("display", "none");
    $('#mg15b-b').css("display", "none");
    $('#mg15b-c').css("display", "none");
    $('#ps15b-a').css("display", "none");
    $('#ps15b-b').css("display", "none");
    $('#ps15b-c').css("display", "none");
    $('#mg15b-a').val('0');
    $('#mg15b-b').val('0');
    $('#mg15b-c').val('0');
    $('#ps15b-a').val('0');
    $('#ps15b-b').val('0');
    $('#ps15b-c').val('0');
    $('#ae15').css("display", "none");
    $('#pi15').css("display", "none");



    //cargar15a();
    //cargar15b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d15ToggleOUT() {
    $('#d15').val("|d15,1");
    $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-15.png')");
    $('#diente15-a').css("background-position", "0 5px");
    $('#diente15-a').css("background-repeat", "no-repeat");
    $('#m15').css("display", "inline");
    $('#i15').css("display", "block");
    $('#f15').css("display", "inline");
    $('#s15-a').css("display", "inline");
    $('#s15-b').css("display", "inline");
    $('#s15-c').css("display", "inline");
    $('#p15-a').css("display", "inline");
    $('#p15-b').css("display", "inline");
    $('#p15-c').css("display", "inline");
    $('#mg15-a').css("display", "inline");
    $('#mg15-b').css("display", "inline");
    $('#mg15-c').css("display", "inline");
    $('#ps15-a').css("display", "inline");
    $('#ps15-b').css("display", "inline");
    $('#ps15-c').css("display", "inline");

    $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-15b.png')");
    $('#diente15b-a').css("background-position", "0 17px");
    $('#diente15b-a').css("background-repeat", "no-repeat");
    $('#m15b').css("display", "inline");
    $('#i15b').css("display", "inline");
    $('#f15b').css("display", "inline");
    $('#s15b-a').css("display", "inline");
    $('#s15b-b').css("display", "inline");
    $('#s15b-c').css("display", "inline");
    $('#p15b-a').css("display", "inline");
    $('#p15b-b').css("display", "inline");
    $('#p15b-c').css("display", "inline");
    $('#mg15b-a').css("display", "inline");
    $('#mg15b-b').css("display", "inline");
    $('#mg15b-c').css("display", "inline");
    $('#ps15b-a').css("display", "inline");
    $('#ps15b-b').css("display", "inline");
    $('#ps15b-c').css("display", "inline");
    $('#ae15').css("display", "inline");
    $('#pi15').css("display", "inline");
}
$('#d15').toggle(
    function () {
        $('#d15').val("|d15,0");
        $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-15.png')");
        $('#diente15-a').css("background-position", "0 5px");
        $('#diente15-a').css("background-repeat", "no-repeat");
        $('#m15').css("display", "none");
        $('#i15').css("display", "none");
        $('#f15').css("display", "none");
        $('#s15-a').css("display", "none");
        $('#s15-b').css("display", "none");
        $('#s15-c').css("display", "none");
        $('#p15-a').css("display", "none");
        $('#p15-b').css("display", "none");
        $('#p15-c').css("display", "none");
        $('#mg15-a').css("display", "none");
        $('#mg15-b').css("display", "none");
        $('#mg15-c').css("display", "none");
        $('#ps15-a').css("display", "none");
        $('#ps15-b').css("display", "none");
        $('#ps15-c').css("display", "none");
        $('#mg15-a').val('0');
        $('#mg15-b').val('0');
        $('#mg15-c').val('0');
        $('#ps15-a').val('0');
        $('#ps15-b').val('0');
        $('#ps15-c').val('0');

        $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-15b.png')");
        $('#diente15b-a').css("background-position", "0 17px");
        $('#diente15b-a').css("background-repeat", "no-repeat");
        $('#m15b').css("display", "none");
        $('#i15b').css("display", "none");
        $('#s15b-a').css("display", "none");
        $('#s15b-b').css("display", "none");
        $('#s15b-c').css("display", "none");
        $('#p15b-a').css("display", "none");
        $('#p15b-b').css("display", "none");
        $('#p15b-c').css("display", "none");
        $('#mg15b-a').css("display", "none");
        $('#mg15b-b').css("display", "none");
        $('#mg15b-c').css("display", "none");
        $('#ps15b-a').css("display", "none");
        $('#ps15b-b').css("display", "none");
        $('#ps15b-c').css("display", "none");
        $('#mg15b-a').val('0');
        $('#mg15b-b').val('0');
        $('#mg15b-c').val('0');
        $('#ps15b-a').val('0');
        $('#ps15b-b').val('0');
        $('#ps15b-c').val('0');
        $('#ae15').css("display", "none");
        $('#pi15').css("display", "none");



        //cargar15a();
        //cargar15b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d15').val("|d15,1");
        $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-15.png')");
        $('#diente15-a').css("background-position", "0 5px");
        $('#diente15-a').css("background-repeat", "no-repeat");
        $('#m15').css("display", "inline");
        $('#i15').css("display", "block");
        $('#f15').css("display", "inline");
        $('#s15-a').css("display", "inline");
        $('#s15-b').css("display", "inline");
        $('#s15-c').css("display", "inline");
        $('#p15-a').css("display", "inline");
        $('#p15-b').css("display", "inline");
        $('#p15-c').css("display", "inline");
        $('#mg15-a').css("display", "inline");
        $('#mg15-b').css("display", "inline");
        $('#mg15-c').css("display", "inline");
        $('#ps15-a').css("display", "inline");
        $('#ps15-b').css("display", "inline");
        $('#ps15-c').css("display", "inline");

        $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-15b.png')");
        $('#diente15b-a').css("background-position", "0 17px");
        $('#diente15b-a').css("background-repeat", "no-repeat");
        $('#m15b').css("display", "inline");
        $('#i15b').css("display", "inline");
        $('#f15b').css("display", "inline");
        $('#s15b-a').css("display", "inline");
        $('#s15b-b').css("display", "inline");
        $('#s15b-c').css("display", "inline");
        $('#p15b-a').css("display", "inline");
        $('#p15b-b').css("display", "inline");
        $('#p15b-c').css("display", "inline");
        $('#mg15b-a').css("display", "inline");
        $('#mg15b-b').css("display", "inline");
        $('#mg15b-c').css("display", "inline");
        $('#ps15b-a').css("display", "inline");
        $('#ps15b-b').css("display", "inline");
        $('#ps15b-c').css("display", "inline");
        $('#ae15').css("display", "inline");
        $('#pi15').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d14ToggleON() {
    $('#d14').val("|d14,0");
    $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-14.png')");
    /*$('#diente14-a').css("background-position","0 -2px");*/
    $('#diente14-a').css("background-repeat", "no-repeat");
    $('#m14').css("display", "none");
    $('#i14').css("display", "none");
    $('#f14').css("display", "none");
    $('#s14-a').css("display", "none");
    $('#s14-b').css("display", "none");
    $('#s14-c').css("display", "none");
    $('#p14-a').css("display", "none");
    $('#p14-b').css("display", "none");
    $('#p14-c').css("display", "none");
    $('#mg14-a').css("display", "none");
    $('#mg14-b').css("display", "none");
    $('#mg14-c').css("display", "none");
    $('#ps14-a').css("display", "none");
    $('#ps14-b').css("display", "none");
    $('#ps14-c').css("display", "none");
    $('#mg14-a').val('0');
    $('#mg14-b').val('0');
    $('#mg14-c').val('0');
    $('#ps14-a').val('0');
    $('#ps14-b').val('0');
    $('#ps14-c').val('0');

    $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-14b.png')");
    $('#diente14b-a').css("background-position", "0 17px");
    $('#diente14b-a').css("background-repeat", "no-repeat");
    $('#m14b').css("display", "none");
    $('#i14b').css("display", "none");
    $('#f14b-a').css("display", "none");
    $('#f14b-b').css("display", "none");
    $('#s14b-a').css("display", "none");
    $('#s14b-b').css("display", "none");
    $('#s14b-c').css("display", "none");
    $('#p14b-a').css("display", "none");
    $('#p14b-b').css("display", "none");
    $('#p14b-c').css("display", "none");
    $('#mg14b-a').css("display", "none");
    $('#mg14b-b').css("display", "none");
    $('#mg14b-c').css("display", "none");
    $('#ps14b-a').css("display", "none");
    $('#ps14b-b').css("display", "none");
    $('#ps14b-c').css("display", "none");
    $('#mg14b-a').val('0');
    $('#mg14b-b').val('0');
    $('#mg14b-c').val('0');
    $('#ps14b-a').val('0');
    $('#ps14b-b').val('0');
    $('#ps14b-c').val('0');
    $('#furca14-a').css("display", "none");
    $('#furca14-b').css("display", "none");
    $('#ae14').css("display", "none");
    $('#pi14').css("display", "none");




    //cargar14a();
    //cargar14b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d14ToggleOUT() {
    $('#d14').val("|d14,1");
    $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-14.png')");
    /*$('#diente14-a').css("background-position","0 -2px");*/
    $('#diente14-a').css("background-repeat", "no-repeat");
    $('#m14').css("display", "inline");
    $('#i14').css("display", "block");
    $('#f14').css("display", "inline");
    $('#s14-a').css("display", "inline");
    $('#s14-b').css("display", "inline");
    $('#s14-c').css("display", "inline");
    $('#p14-a').css("display", "inline");
    $('#p14-b').css("display", "inline");
    $('#p14-c').css("display", "inline");
    $('#mg14-a').css("display", "inline");
    $('#mg14-b').css("display", "inline");
    $('#mg14-c').css("display", "inline");
    $('#ps14-a').css("display", "inline");
    $('#ps14-b').css("display", "inline");
    $('#ps14-c').css("display", "inline");

    $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-14b.png')");
    $('#diente14b-a').css("background-position", "0 17px");
    $('#diente14b-a').css("background-repeat", "no-repeat");
    $('#m14b').css("display", "inline");
    $('#i14b').css("display", "inline");
    $('#f14b-a').css("display", "inline");
    $('#f14b-b').css("display", "inline");
    $('#s14b-a').css("display", "inline");
    $('#s14b-b').css("display", "inline");
    $('#s14b-c').css("display", "inline");
    $('#p14b-a').css("display", "inline");
    $('#p14b-b').css("display", "inline");
    $('#p14b-c').css("display", "inline");
    $('#mg14b-a').css("display", "inline");
    $('#mg14b-b').css("display", "inline");
    $('#mg14b-c').css("display", "inline");
    $('#ps14b-a').css("display", "inline");
    $('#ps14b-b').css("display", "inline");
    $('#ps14b-c').css("display", "inline");
    $('#furca14-a').css("display", "block");
    $('#furca14-b').css("display", "block");
    $('#ae14').css("display", "inline");
    $('#pi14').css("display", "inline");



    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d14').toggle(
    function () {
        $('#d14').val("|d14,0");
        $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-14.png')");
        /*$('#diente14-a').css("background-position","0 -2px");*/
        $('#diente14-a').css("background-repeat", "no-repeat");
        $('#m14').css("display", "none");
        $('#i14').css("display", "none");
        $('#f14').css("display", "none");
        $('#s14-a').css("display", "none");
        $('#s14-b').css("display", "none");
        $('#s14-c').css("display", "none");
        $('#p14-a').css("display", "none");
        $('#p14-b').css("display", "none");
        $('#p14-c').css("display", "none");
        $('#mg14-a').css("display", "none");
        $('#mg14-b').css("display", "none");
        $('#mg14-c').css("display", "none");
        $('#ps14-a').css("display", "none");
        $('#ps14-b').css("display", "none");
        $('#ps14-c').css("display", "none");
        $('#mg14-a').val('0');
        $('#mg14-b').val('0');
        $('#mg14-c').val('0');
        $('#ps14-a').val('0');
        $('#ps14-b').val('0');
        $('#ps14-c').val('0');

        $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-14b.png')");
        $('#diente14b-a').css("background-position", "0 17px");
        $('#diente14b-a').css("background-repeat", "no-repeat");
        $('#m14b').css("display", "none");
        $('#i14b').css("display", "none");
        $('#f14b-a').css("display", "none");
        $('#f14b-b').css("display", "none");
        $('#s14b-a').css("display", "none");
        $('#s14b-b').css("display", "none");
        $('#s14b-c').css("display", "none");
        $('#p14b-a').css("display", "none");
        $('#p14b-b').css("display", "none");
        $('#p14b-c').css("display", "none");
        $('#mg14b-a').css("display", "none");
        $('#mg14b-b').css("display", "none");
        $('#mg14b-c').css("display", "none");
        $('#ps14b-a').css("display", "none");
        $('#ps14b-b').css("display", "none");
        $('#ps14b-c').css("display", "none");
        $('#mg14b-a').val('0');
        $('#mg14b-b').val('0');
        $('#mg14b-c').val('0');
        $('#ps14b-a').val('0');
        $('#ps14b-b').val('0');
        $('#ps14b-c').val('0');
        $('#furca14-a').css("display", "none");
        $('#furca14-b').css("display", "none");
        $('#ae14').css("display", "none");
        $('#pi14').css("display", "none");




        //cargar14a();
        //cargar14b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d14').val("|d14,1");
        $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-14.png')");
        /*$('#diente14-a').css("background-position","0 -2px");*/
        $('#diente14-a').css("background-repeat", "no-repeat");
        $('#m14').css("display", "inline");
        $('#i14').css("display", "block");
        $('#f14').css("display", "inline");
        $('#s14-a').css("display", "inline");
        $('#s14-b').css("display", "inline");
        $('#s14-c').css("display", "inline");
        $('#p14-a').css("display", "inline");
        $('#p14-b').css("display", "inline");
        $('#p14-c').css("display", "inline");
        $('#mg14-a').css("display", "inline");
        $('#mg14-b').css("display", "inline");
        $('#mg14-c').css("display", "inline");
        $('#ps14-a').css("display", "inline");
        $('#ps14-b').css("display", "inline");
        $('#ps14-c').css("display", "inline");

        $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-14b.png')");
        $('#diente14b-a').css("background-position", "0 17px");
        $('#diente14b-a').css("background-repeat", "no-repeat");
        $('#m14b').css("display", "inline");
        $('#i14b').css("display", "inline");
        $('#f14b-a').css("display", "inline");
        $('#f14b-b').css("display", "inline");
        $('#s14b-a').css("display", "inline");
        $('#s14b-b').css("display", "inline");
        $('#s14b-c').css("display", "inline");
        $('#p14b-a').css("display", "inline");
        $('#p14b-b').css("display", "inline");
        $('#p14b-c').css("display", "inline");
        $('#mg14b-a').css("display", "inline");
        $('#mg14b-b').css("display", "inline");
        $('#mg14b-c').css("display", "inline");
        $('#ps14b-a').css("display", "inline");
        $('#ps14b-b').css("display", "inline");
        $('#ps14b-c').css("display", "inline");
        $('#furca14-a').css("display", "block");
        $('#furca14-b').css("display", "block");
        $('#ae14').css("display", "inline");
        $('#pi14').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d13ToggleON() {
    $('#d13').val("|d13,0");
    $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-13.png')");
    $('#diente13-a').css("background-position", "top");
    $('#diente13-a').css("background-repeat", "no-repeat");
    $('#m13').css("display", "none");
    $('#i13').css("display", "none");
    $('#f13').css("display", "none");
    $('#s13-a').css("display", "none");
    $('#s13-b').css("display", "none");
    $('#s13-c').css("display", "none");
    $('#p13-a').css("display", "none");
    $('#p13-b').css("display", "none");
    $('#p13-c').css("display", "none");
    $('#mg13-a').css("display", "none");
    $('#mg13-b').css("display", "none");
    $('#mg13-c').css("display", "none");
    $('#ps13-a').css("display", "none");
    $('#ps13-b').css("display", "none");
    $('#ps13-c').css("display", "none");
    $('#mg13-a').val('0');
    $('#mg13-b').val('0');
    $('#mg13-c').val('0');
    $('#ps13-a').val('0');
    $('#ps13-b').val('0');
    $('#ps13-c').val('0');

    $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-13b.png')");
    $('#diente13b-a').css("background-position", "0 16px");
    $('#diente13b-a').css("background-repeat", "no-repeat");
    $('#m13b').css("display", "none");
    $('#i13b').css("display", "none");
    $('#f13b').css("display", "none");
    $('#s13b-a').css("display", "none");
    $('#s13b-b').css("display", "none");
    $('#s13b-c').css("display", "none");
    $('#p13b-a').css("display", "none");
    $('#p13b-b').css("display", "none");
    $('#p13b-c').css("display", "none");
    $('#mg13b-a').css("display", "none");
    $('#mg13b-b').css("display", "none");
    $('#mg13b-c').css("display", "none");
    $('#ps13b-a').css("display", "none");
    $('#ps13b-b').css("display", "none");
    $('#ps13b-c').css("display", "none");
    $('#mg13b-a').val('0');
    $('#mg13b-b').val('0');
    $('#mg13b-c').val('0');
    $('#ps13b-a').val('0');
    $('#ps13b-b').val('0');
    $('#ps13b-c').val('0');
    $('#ae13').css("display", "none");
    $('#pi13').css("display", "none");



    //cargar13a();
    //cargar13b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d13ToggleOUT() {
    $('#d13').val("|d13,1");
    $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-13.png')");
    $('#diente13-a').css("background-position", "top");
    $('#diente13-a').css("background-repeat", "no-repeat");
    $('#m13').css("display", "inline");
    $('#i13').css("display", "block");
    $('#f13').css("display", "inline");
    $('#s13-a').css("display", "inline");
    $('#s13-b').css("display", "inline");
    $('#s13-c').css("display", "inline");
    $('#p13-a').css("display", "inline");
    $('#p13-b').css("display", "inline");
    $('#p13-c').css("display", "inline");
    $('#mg13-a').css("display", "inline");
    $('#mg13-b').css("display", "inline");
    $('#mg13-c').css("display", "inline");
    $('#ps13-a').css("display", "inline");
    $('#ps13-b').css("display", "inline");
    $('#ps13-c').css("display", "inline");

    $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-13b.png')");
    $('#diente13b-a').css("background-position", "0 16px");
    $('#diente13b-a').css("background-repeat", "no-repeat");
    $('#m13b').css("display", "inline");
    $('#i13b').css("display", "inline");
    $('#f13b').css("display", "inline");
    $('#s13b-a').css("display", "inline");
    $('#s13b-b').css("display", "inline");
    $('#s13b-c').css("display", "inline");
    $('#p13b-a').css("display", "inline");
    $('#p13b-b').css("display", "inline");
    $('#p13b-c').css("display", "inline");
    $('#mg13b-a').css("display", "inline");
    $('#mg13b-b').css("display", "inline");
    $('#mg13b-c').css("display", "inline");
    $('#ps13b-a').css("display", "inline");
    $('#ps13b-b').css("display", "inline");
    $('#ps13b-c').css("display", "inline");
    $('#ae13').css("display", "inline");
    $('#pi13').css("display", "inline");


    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d13').toggle(
    function () {
        $('#d13').val("|d13,0");
        $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-13.png')");
        $('#diente13-a').css("background-position", "top");
        $('#diente13-a').css("background-repeat", "no-repeat");
        $('#m13').css("display", "none");
        $('#i13').css("display", "none");
        $('#f13').css("display", "none");
        $('#s13-a').css("display", "none");
        $('#s13-b').css("display", "none");
        $('#s13-c').css("display", "none");
        $('#p13-a').css("display", "none");
        $('#p13-b').css("display", "none");
        $('#p13-c').css("display", "none");
        $('#mg13-a').css("display", "none");
        $('#mg13-b').css("display", "none");
        $('#mg13-c').css("display", "none");
        $('#ps13-a').css("display", "none");
        $('#ps13-b').css("display", "none");
        $('#ps13-c').css("display", "none");
        $('#mg13-a').val('0');
        $('#mg13-b').val('0');
        $('#mg13-c').val('0');
        $('#ps13-a').val('0');
        $('#ps13-b').val('0');
        $('#ps13-c').val('0');

        $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-13b.png')");
        $('#diente13b-a').css("background-position", "0 16px");
        $('#diente13b-a').css("background-repeat", "no-repeat");
        $('#m13b').css("display", "none");
        $('#i13b').css("display", "none");
        $('#f13b').css("display", "none");
        $('#s13b-a').css("display", "none");
        $('#s13b-b').css("display", "none");
        $('#s13b-c').css("display", "none");
        $('#p13b-a').css("display", "none");
        $('#p13b-b').css("display", "none");
        $('#p13b-c').css("display", "none");
        $('#mg13b-a').css("display", "none");
        $('#mg13b-b').css("display", "none");
        $('#mg13b-c').css("display", "none");
        $('#ps13b-a').css("display", "none");
        $('#ps13b-b').css("display", "none");
        $('#ps13b-c').css("display", "none");
        $('#mg13b-a').val('0');
        $('#mg13b-b').val('0');
        $('#mg13b-c').val('0');
        $('#ps13b-a').val('0');
        $('#ps13b-b').val('0');
        $('#ps13b-c').val('0');
        $('#ae13').css("display", "none");
        $('#pi13').css("display", "none");



        //cargar13a();
        //cargar13b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d13').val("|d13,1");
        $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-13.png')");
        $('#diente13-a').css("background-position", "top");
        $('#diente13-a').css("background-repeat", "no-repeat");
        $('#m13').css("display", "inline");
        $('#i13').css("display", "block");
        $('#f13').css("display", "inline");
        $('#s13-a').css("display", "inline");
        $('#s13-b').css("display", "inline");
        $('#s13-c').css("display", "inline");
        $('#p13-a').css("display", "inline");
        $('#p13-b').css("display", "inline");
        $('#p13-c').css("display", "inline");
        $('#mg13-a').css("display", "inline");
        $('#mg13-b').css("display", "inline");
        $('#mg13-c').css("display", "inline");
        $('#ps13-a').css("display", "inline");
        $('#ps13-b').css("display", "inline");
        $('#ps13-c').css("display", "inline");

        $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-13b.png')");
        $('#diente13b-a').css("background-position", "0 16px");
        $('#diente13b-a').css("background-repeat", "no-repeat");
        $('#m13b').css("display", "inline");
        $('#i13b').css("display", "inline");
        $('#f13b').css("display", "inline");
        $('#s13b-a').css("display", "inline");
        $('#s13b-b').css("display", "inline");
        $('#s13b-c').css("display", "inline");
        $('#p13b-a').css("display", "inline");
        $('#p13b-b').css("display", "inline");
        $('#p13b-c').css("display", "inline");
        $('#mg13b-a').css("display", "inline");
        $('#mg13b-b').css("display", "inline");
        $('#mg13b-c').css("display", "inline");
        $('#ps13b-a').css("display", "inline");
        $('#ps13b-b').css("display", "inline");
        $('#ps13b-c').css("display", "inline");
        $('#ae13').css("display", "inline");
        $('#pi13').css("display", "inline");


        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d12ToggleON() {
    $('#d12').val("|d12,0");
    $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-12.png')");
    $('#diente12-a').css("background-position", "0 6px");
    $('#diente12-a').css("background-repeat", "no-repeat");
    $('#m12').css("display", "none");
    $('#i12').css("display", "none");
    $('#f12').css("display", "none");
    $('#s12-a').css("display", "none");
    $('#s12-b').css("display", "none");
    $('#s12-c').css("display", "none");
    $('#p12-a').css("display", "none");
    $('#p12-b').css("display", "none");
    $('#p12-c').css("display", "none");
    $('#mg12-a').css("display", "none");
    $('#mg12-b').css("display", "none");
    $('#mg12-c').css("display", "none");
    $('#ps12-a').css("display", "none");
    $('#ps12-b').css("display", "none");
    $('#ps12-c').css("display", "none");
    $('#mg12-a').val('0');
    $('#mg12-b').val('0');
    $('#mg12-c').val('0');
    $('#ps12-a').val('0');
    $('#ps12-b').val('0');
    $('#ps12-c').val('0');

    $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-12b.png')");
    $('#diente12b-a').css("background-position", "0 18px");
    $('#diente12b-a').css("background-repeat", "no-repeat");
    $('#m12b').css("display", "none");
    $('#i12b').css("display", "none");
    $('#f12b').css("display", "none");
    $('#s12b-a').css("display", "none");
    $('#s12b-b').css("display", "none");
    $('#s12b-c').css("display", "none");
    $('#p12b-a').css("display", "none");
    $('#p12b-b').css("display", "none");
    $('#p12b-c').css("display", "none");
    $('#mg12b-a').css("display", "none");
    $('#mg12b-b').css("display", "none");
    $('#mg12b-c').css("display", "none");
    $('#ps12b-a').css("display", "none");
    $('#ps12b-b').css("display", "none");
    $('#ps12b-c').css("display", "none");
    $('#mg12b-a').val('0');
    $('#mg12b-b').val('0');
    $('#mg12b-c').val('0');
    $('#ps12b-a').val('0');
    $('#ps12b-b').val('0');
    $('#ps12b-c').val('0');
    $('#ae12').css("display", "none");
    $('#pi12').css("display", "none");



    //cargar12a();
    //cargar12b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d12ToggleOUT() {
    $('#d12').val("|d12,1");
    $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-12.png')");
    $('#diente12-a').css("background-position", "0 6px");
    $('#diente12-a').css("background-repeat", "no-repeat");
    $('#m12').css("display", "inline");
    $('#i12').css("display", "block");
    $('#f12').css("display", "inline");
    $('#s12-a').css("display", "inline");
    $('#s12-b').css("display", "inline");
    $('#s12-c').css("display", "inline");
    $('#p12-a').css("display", "inline");
    $('#p12-b').css("display", "inline");
    $('#p12-c').css("display", "inline");
    $('#mg12-a').css("display", "inline");
    $('#mg12-b').css("display", "inline");
    $('#mg12-c').css("display", "inline");
    $('#ps12-a').css("display", "inline");
    $('#ps12-b').css("display", "inline");
    $('#ps12-c').css("display", "inline");

    $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-12b.png')");
    $('#diente12b-a').css("background-position", "0 18px");
    $('#diente12b-a').css("background-repeat", "no-repeat");
    $('#m12b').css("display", "inline");
    $('#i12b').css("display", "inline");
    $('#f12b').css("display", "inline");
    $('#s12b-a').css("display", "inline");
    $('#s12b-b').css("display", "inline");
    $('#s12b-c').css("display", "inline");
    $('#p12b-a').css("display", "inline");
    $('#p12b-b').css("display", "inline");
    $('#p12b-c').css("display", "inline");
    $('#mg12b-a').css("display", "inline");
    $('#mg12b-b').css("display", "inline");
    $('#mg12b-c').css("display", "inline");
    $('#ps12b-a').css("display", "inline");
    $('#ps12b-b').css("display", "inline");
    $('#ps12b-c').css("display", "inline");
    $('#ae12').css("display", "inline");
    $('#pi12').css("display", "inline");



    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d12').toggle(
    function () {
        $('#d12').val("|d12,0");
        $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-12.png')");
        $('#diente12-a').css("background-position", "0 6px");
        $('#diente12-a').css("background-repeat", "no-repeat");
        $('#m12').css("display", "none");
        $('#i12').css("display", "none");
        $('#f12').css("display", "none");
        $('#s12-a').css("display", "none");
        $('#s12-b').css("display", "none");
        $('#s12-c').css("display", "none");
        $('#p12-a').css("display", "none");
        $('#p12-b').css("display", "none");
        $('#p12-c').css("display", "none");
        $('#mg12-a').css("display", "none");
        $('#mg12-b').css("display", "none");
        $('#mg12-c').css("display", "none");
        $('#ps12-a').css("display", "none");
        $('#ps12-b').css("display", "none");
        $('#ps12-c').css("display", "none");
        $('#mg12-a').val('0');
        $('#mg12-b').val('0');
        $('#mg12-c').val('0');
        $('#ps12-a').val('0');
        $('#ps12-b').val('0');
        $('#ps12-c').val('0');

        $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-12b.png')");
        $('#diente12b-a').css("background-position", "0 18px");
        $('#diente12b-a').css("background-repeat", "no-repeat");
        $('#m12b').css("display", "none");
        $('#i12b').css("display", "none");
        $('#f12b').css("display", "none");
        $('#s12b-a').css("display", "none");
        $('#s12b-b').css("display", "none");
        $('#s12b-c').css("display", "none");
        $('#p12b-a').css("display", "none");
        $('#p12b-b').css("display", "none");
        $('#p12b-c').css("display", "none");
        $('#mg12b-a').css("display", "none");
        $('#mg12b-b').css("display", "none");
        $('#mg12b-c').css("display", "none");
        $('#ps12b-a').css("display", "none");
        $('#ps12b-b').css("display", "none");
        $('#ps12b-c').css("display", "none");
        $('#mg12b-a').val('0');
        $('#mg12b-b').val('0');
        $('#mg12b-c').val('0');
        $('#ps12b-a').val('0');
        $('#ps12b-b').val('0');
        $('#ps12b-c').val('0');
        $('#ae12').css("display", "none");
        $('#pi12').css("display", "none");



        //cargar12a();
        //cargar12b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d12').val("|d12,1");
        $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-12.png')");
        $('#diente12-a').css("background-position", "0 6px");
        $('#diente12-a').css("background-repeat", "no-repeat");
        $('#m12').css("display", "inline");
        $('#i12').css("display", "block");
        $('#f12').css("display", "inline");
        $('#s12-a').css("display", "inline");
        $('#s12-b').css("display", "inline");
        $('#s12-c').css("display", "inline");
        $('#p12-a').css("display", "inline");
        $('#p12-b').css("display", "inline");
        $('#p12-c').css("display", "inline");
        $('#mg12-a').css("display", "inline");
        $('#mg12-b').css("display", "inline");
        $('#mg12-c').css("display", "inline");
        $('#ps12-a').css("display", "inline");
        $('#ps12-b').css("display", "inline");
        $('#ps12-c').css("display", "inline");

        $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-12b.png')");
        $('#diente12b-a').css("background-position", "0 18px");
        $('#diente12b-a').css("background-repeat", "no-repeat");
        $('#m12b').css("display", "inline");
        $('#i12b').css("display", "inline");
        $('#f12b').css("display", "inline");
        $('#s12b-a').css("display", "inline");
        $('#s12b-b').css("display", "inline");
        $('#s12b-c').css("display", "inline");
        $('#p12b-a').css("display", "inline");
        $('#p12b-b').css("display", "inline");
        $('#p12b-c').css("display", "inline");
        $('#mg12b-a').css("display", "inline");
        $('#mg12b-b').css("display", "inline");
        $('#mg12b-c').css("display", "inline");
        $('#ps12b-a').css("display", "inline");
        $('#ps12b-b').css("display", "inline");
        $('#ps12b-c').css("display", "inline");
        $('#ae12').css("display", "inline");
        $('#pi12').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);
function d11ToggleON() {
    $('#d11').val("|d11,0");
    $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-11.png')");
    $('#diente11-a').css("background-position", "bottom");
    $('#diente11-a').css("background-repeat", "no-repeat");
    $('#m11').css("display", "none");
    $('#i11').css("display", "none");
    $('#f11').css("display", "none");
    $('#s11-a').css("display", "none");
    $('#s11-b').css("display", "none");
    $('#s11-c').css("display", "none");
    $('#p11-a').css("display", "none");
    $('#p11-b').css("display", "none");
    $('#p11-c').css("display", "none");
    $('#mg11-a').css("display", "none");
    $('#mg11-b').css("display", "none");
    $('#mg11-c').css("display", "none");
    $('#ps11-a').css("display", "none");
    $('#ps11-b').css("display", "none");
    $('#ps11-c').css("display", "none");
    $('#mg11-a').val('0');
    $('#mg11-b').val('0');
    $('#mg11-c').val('0');
    $('#ps11-a').val('0');
    $('#ps11-b').val('0');
    $('#ps11-c').val('0');

    $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-11b.png')");
    $('#diente11b-a').css("background-position", "0 12px");
    $('#diente11b-a').css("background-repeat", "no-repeat");
    $('#m11b').css("display", "none");
    $('#i11b').css("display", "none");
    $('#f11b').css("display", "none");
    $('#s11b-a').css("display", "none");
    $('#s11b-b').css("display", "none");
    $('#s11b-c').css("display", "none");
    $('#p11b-a').css("display", "none");
    $('#p11b-b').css("display", "none");
    $('#p11b-c').css("display", "none");
    $('#mg11b-a').css("display", "none");
    $('#mg11b-b').css("display", "none");
    $('#mg11b-c').css("display", "none");
    $('#ps11b-a').css("display", "none");
    $('#ps11b-b').css("display", "none");
    $('#ps11b-c').css("display", "none");
    $('#mg11b-a').val('0');
    $('#mg11b-b').val('0');
    $('#mg11b-c').val('0');
    $('#ps11b-a').val('0');
    $('#ps11b-b').val('0');
    $('#ps11b-c').val('0');
    $('#ae11').css("display", "none");
    $('#pi11').css("display", "none");



    //cargar11a();
    //cargar11b();

    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
function d11ToggleOUT() {
    $('#d11').val("|d11,1");
    $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-11.png')");
    $('#diente11-a').css("background-position", "bottom");
    $('#diente11-a').css("background-repeat", "no-repeat");
    $('#m11').css("display", "inline");
    $('#i11').css("display", "block");
    $('#f11').css("display", "inline");
    $('#s11-a').css("display", "inline");
    $('#s11-b').css("display", "inline");
    $('#s11-c').css("display", "inline");
    $('#p11-a').css("display", "inline");
    $('#p11-b').css("display", "inline");
    $('#p11-c').css("display", "inline");
    $('#mg11-a').css("display", "inline");
    $('#mg11-b').css("display", "inline");
    $('#mg11-c').css("display", "inline");
    $('#ps11-a').css("display", "inline");
    $('#ps11-b').css("display", "inline");
    $('#ps11-c').css("display", "inline");

    $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-11b.png')");
    $('#diente11b-a').css("background-position", "0 12px");
    $('#diente11b-a').css("background-repeat", "no-repeat");
    $('#m11b').css("display", "inline");
    $('#i11b').css("display", "inline");
    $('#f11b').css("display", "inline");
    $('#s11b-a').css("display", "inline");
    $('#s11b-b').css("display", "inline");
    $('#s11b-c').css("display", "inline");
    $('#p11b-a').css("display", "inline");
    $('#p11b-b').css("display", "inline");
    $('#p11b-c').css("display", "inline");
    $('#mg11b-a').css("display", "inline");
    $('#mg11b-b').css("display", "inline");
    $('#mg11b-c').css("display", "inline");
    $('#ps11b-a').css("display", "inline");
    $('#ps11b-b').css("display", "inline");
    $('#ps11b-c').css("display", "inline");
    $('#ae11').css("display", "inline");
    $('#pi11').css("display", "inline");



    //cargar17a();
    //cargar16a();
    //cargar15a();
    //cargar14a();
    //cargar13a();
    //cargar12a();
    //cargar11a();;
    //cargar2();
    //cargar3();
    //cargar4();
}
$('#d11').toggle(
    function () {
        $('#d11').val("|d11,0");
        $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/tachados/periodontograma-dientes-arriba-tachados-11.png')");
        $('#diente11-a').css("background-position", "bottom");
        $('#diente11-a').css("background-repeat", "no-repeat");
        $('#m11').css("display", "none");
        $('#i11').css("display", "none");
        $('#f11').css("display", "none");
        $('#s11-a').css("display", "none");
        $('#s11-b').css("display", "none");
        $('#s11-c').css("display", "none");
        $('#p11-a').css("display", "none");
        $('#p11-b').css("display", "none");
        $('#p11-c').css("display", "none");
        $('#mg11-a').css("display", "none");
        $('#mg11-b').css("display", "none");
        $('#mg11-c').css("display", "none");
        $('#ps11-a').css("display", "none");
        $('#ps11-b').css("display", "none");
        $('#ps11-c').css("display", "none");
        $('#mg11-a').val('0');
        $('#mg11-b').val('0');
        $('#mg11-c').val('0');
        $('#ps11-a').val('0');
        $('#ps11-b').val('0');
        $('#ps11-c').val('0');

        $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/tachados/periodontograma-dientes-arriba-tachados-11b.png')");
        $('#diente11b-a').css("background-position", "0 12px");
        $('#diente11b-a').css("background-repeat", "no-repeat");
        $('#m11b').css("display", "none");
        $('#i11b').css("display", "none");
        $('#f11b').css("display", "none");
        $('#s11b-a').css("display", "none");
        $('#s11b-b').css("display", "none");
        $('#s11b-c').css("display", "none");
        $('#p11b-a').css("display", "none");
        $('#p11b-b').css("display", "none");
        $('#p11b-c').css("display", "none");
        $('#mg11b-a').css("display", "none");
        $('#mg11b-b').css("display", "none");
        $('#mg11b-c').css("display", "none");
        $('#ps11b-a').css("display", "none");
        $('#ps11b-b').css("display", "none");
        $('#ps11b-c').css("display", "none");
        $('#mg11b-a').val('0');
        $('#mg11b-b').val('0');
        $('#mg11b-c').val('0');
        $('#ps11b-a').val('0');
        $('#ps11b-b').val('0');
        $('#ps11b-c').val('0');
        $('#ae11').css("display", "none");
        $('#pi11').css("display", "none");



        //cargar11a();
        //cargar11b();

        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    },
    function () {
        $('#d11').val("|d11,1");
        $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-11.png')");
        $('#diente11-a').css("background-position", "bottom");
        $('#diente11-a').css("background-repeat", "no-repeat");
        $('#m11').css("display", "inline");
        $('#i11').css("display", "block");
        $('#f11').css("display", "inline");
        $('#s11-a').css("display", "inline");
        $('#s11-b').css("display", "inline");
        $('#s11-c').css("display", "inline");
        $('#p11-a').css("display", "inline");
        $('#p11-b').css("display", "inline");
        $('#p11-c').css("display", "inline");
        $('#mg11-a').css("display", "inline");
        $('#mg11-b').css("display", "inline");
        $('#mg11-c').css("display", "inline");
        $('#ps11-a').css("display", "inline");
        $('#ps11-b').css("display", "inline");
        $('#ps11-c').css("display", "inline");

        $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-11b.png')");
        $('#diente11b-a').css("background-position", "0 12px");
        $('#diente11b-a').css("background-repeat", "no-repeat");
        $('#m11b').css("display", "inline");
        $('#i11b').css("display", "inline");
        $('#f11b').css("display", "inline");
        $('#s11b-a').css("display", "inline");
        $('#s11b-b').css("display", "inline");
        $('#s11b-c').css("display", "inline");
        $('#p11b-a').css("display", "inline");
        $('#p11b-b').css("display", "inline");
        $('#p11b-c').css("display", "inline");
        $('#mg11b-a').css("display", "inline");
        $('#mg11b-b').css("display", "inline");
        $('#mg11b-c').css("display", "inline");
        $('#ps11b-a').css("display", "inline");
        $('#ps11b-b').css("display", "inline");
        $('#ps11b-c').css("display", "inline");
        $('#ae11').css("display", "inline");
        $('#pi11').css("display", "inline");



        //cargar17a();
        //cargar16a();
        //cargar15a();
        //cargar14a();
        //cargar13a();
        //cargar12a();
        //cargar11a();;
        //cargar2();
        //cargar3();
        //cargar4();
    }
);


//TACHADOS SEGUNDA PARTE

function d48bToggleON() {
    $('#d48b').val("|d48b,0");
    $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-48b.png')");
    $('#diente48b-a').css("background-position", "0 24px");
    $('#diente48b-a').css("background-repeat", "no-repeat");
    $('#m48b').css("display", "none");
    $('#i48b').css("display", "none");
    $('#f48b').css("display", "none");
    $('#s48b-a').css("display", "none");
    $('#s48b-b').css("display", "none");
    $('#s48b-c').css("display", "none");
    $('#p48b-a').css("display", "none");
    $('#p48b-b').css("display", "none");
    $('#p48b-c').css("display", "none");
    $('#mg48b-a').css("display", "none");
    $('#mg48b-b').css("display", "none");
    $('#mg48b-c').css("display", "none");
    $('#ps48b-a').css("display", "none");
    $('#ps48b-b').css("display", "none");
    $('#ps48b-c').css("display", "none");
    /*$('#furca48b').css("background","none");*/
    $('#mg48b-a').val('0');
    $('#mg48b-b').val('0');
    $('#mg48b-c').val('0');
    $('#ps48b-a').val('0');
    $('#ps48b-b').val('0');
    $('#ps48b-c').val('0');

    $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-48.png')");
    $('#diente48-a').css("background-position", "0 -4px");
    $('#diente48-a').css("background-repeat", "no-repeat");
    $('#m48').css("display", "none");
    $('#i48').css("display", "none");
    $('#f48').css("display", "none");
    $('#s48-a').css("display", "none");
    $('#s48-b').css("display", "none");
    $('#s48-c').css("display", "none");
    $('#p48-a').css("display", "none");
    $('#p48-b').css("display", "none");
    $('#p48-c').css("display", "none");
    $('#mg48-a').css("display", "none");
    $('#mg48-b').css("display", "none");
    $('#mg48-c').css("display", "none");
    $('#ps48-a').css("display", "none");
    $('#ps48-b').css("display", "none");
    $('#ps48-c').css("display", "none");
    $('#mg48-a').val('0');
    $('#mg48-b').val('0');
    $('#mg48-c').val('0');
    $('#ps48-a').val('0');
    $('#ps48-b').val('0');
    $('#ps48-c').val('0');
    $('#furca48').css("display", "none");
    $('#furca48b').css("display", "none");
    $('#ae48').css("display", "none");
    $('#pi48').css("display", "none");

}
function d48bToggleOUT() {
    $('#d48b').val("|d48b,1");
    $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-48b.png')");
    $('#diente48b-a').css("background-position", "0 24px");
    $('#diente48b-a').css("background-repeat", "no-repeat");
    $('#m48b').css("display", "inline");
    $('#i48b').css("display", "block");
    $('#f48b').css("display", "inline");
    $('#s48b-a').css("display", "inline");
    $('#s48b-b').css("display", "inline");
    $('#s48b-c').css("display", "inline");
    $('#p48b-a').css("display", "inline");
    $('#p48b-b').css("display", "inline");
    $('#p48b-c').css("display", "inline");
    $('#mg48b-a').css("display", "inline");
    $('#mg48b-b').css("display", "inline");
    $('#mg48b-c').css("display", "inline");
    $('#ps48b-a').css("display", "inline");
    $('#ps48b-b').css("display", "inline");
    $('#ps48b-c').css("display", "inline");

    $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-48.png')");
    $('#diente48-a').css("background-position", "0 -4px");
    $('#diente48-a').css("background-repeat", "no-repeat");
    $('#m48').css("display", "inline");
    $('#i48').css("display", "inline");
    $('#f48').css("display", "inline");
    $('#s48-a').css("display", "inline");
    $('#s48-b').css("display", "inline");
    $('#s48-c').css("display", "inline");
    $('#p48-a').css("display", "inline");
    $('#p48-b').css("display", "inline");
    $('#p48-c').css("display", "inline");
    $('#mg48-a').css("display", "inline");
    $('#mg48-b').css("display", "inline");
    $('#mg48-c').css("display", "inline");
    $('#ps48-a').css("display", "inline");
    $('#ps48-b').css("display", "inline");
    $('#ps48-c').css("display", "inline");
    $('#furca48').css("display", "block");
    $('#furca48b').css("display", "block");
    $('#ae48').css("display", "inline");
    $('#pi48').css("display", "inline");


}

function d47bToggleON() {
    $('#d47b').val("|d47b,0");
    $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-47b.png')");
    $('#diente47b-a').css("background-position", "0 22px");
    $('#diente47b-a').css("background-repeat", "no-repeat");
    $('#m47b').css("display", "none");
    $('#i47b').css("display", "none");
    $('#f47b').css("display", "none");
    $('#s47b-a').css("display", "none");
    $('#s47b-b').css("display", "none");
    $('#s47b-c').css("display", "none");
    $('#p47b-a').css("display", "none");
    $('#p47b-b').css("display", "none");
    $('#p47b-c').css("display", "none");
    $('#mg47b-a').css("display", "none");
    $('#mg47b-b').css("display", "none");
    $('#mg47b-c').css("display", "none");
    $('#ps47b-a').css("display", "none");
    $('#ps47b-b').css("display", "none");
    $('#ps47b-c').css("display", "none");
    /*$('#furca47b').css("background","none");*/
    $('#mg47b-a').val('0');
    $('#mg47b-b').val('0');
    $('#mg47b-c').val('0');
    $('#ps47b-a').val('0');
    $('#ps47b-b').val('0');
    $('#ps47b-c').val('0');

    $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-47.png')");
    $('#diente47-a').css("background-position", "0 -4px");
    $('#diente47-a').css("background-repeat", "no-repeat");
    $('#m47').css("display", "none");
    $('#i47').css("display", "none");
    $('#f47').css("display", "none");
    $('#s47-a').css("display", "none");
    $('#s47-b').css("display", "none");
    $('#s47-c').css("display", "none");
    $('#p47-a').css("display", "none");
    $('#p47-b').css("display", "none");
    $('#p47-c').css("display", "none");
    $('#mg47-a').css("display", "none");
    $('#mg47-b').css("display", "none");
    $('#mg47-c').css("display", "none");
    $('#ps47-a').css("display", "none");
    $('#ps47-b').css("display", "none");
    $('#ps47-c').css("display", "none");
    $('#mg47-a').val('0');
    $('#mg47-b').val('0');
    $('#mg47-c').val('0');
    $('#ps47-a').val('0');
    $('#ps47-b').val('0');
    $('#ps47-c').val('0');
    $('#furca47').css("display", "none");
    $('#furca47b').css("display", "none");
    $('#ae47').css("display", "none");
    $('#pi47').css("display", "none");


}
function d47bToggleOUT() {
    $('#d47b').val("|d47b,1");
    $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-47b.png')");
    $('#diente47b-a').css("background-position", "0 22px");
    $('#diente47b-a').css("background-repeat", "no-repeat");
    $('#m47b').css("display", "inline");
    $('#i47b').css("display", "block");
    $('#f47b').css("display", "inline");
    $('#s47b-a').css("display", "inline");
    $('#s47b-b').css("display", "inline");
    $('#s47b-c').css("display", "inline");
    $('#p47b-a').css("display", "inline");
    $('#p47b-b').css("display", "inline");
    $('#p47b-c').css("display", "inline");
    $('#mg47b-a').css("display", "inline");
    $('#mg47b-b').css("display", "inline");
    $('#mg47b-c').css("display", "inline");
    $('#ps47b-a').css("display", "inline");
    $('#ps47b-b').css("display", "inline");
    $('#ps47b-c').css("display", "inline");

    $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-47.png')");
    $('#diente47-a').css("background-position", "0 -4px");
    $('#diente47-a').css("background-repeat", "no-repeat");
    $('#m47').css("display", "inline");
    $('#i47').css("display", "block");
    $('#f47').css("display", "inline");
    $('#s47-a').css("display", "inline");
    $('#s47-b').css("display", "inline");
    $('#s47-c').css("display", "inline");
    $('#p47-a').css("display", "inline");
    $('#p47-b').css("display", "inline");
    $('#p47-c').css("display", "inline");
    $('#mg47-a').css("display", "inline");
    $('#mg47-b').css("display", "inline");
    $('#mg47-c').css("display", "inline");
    $('#ps47-a').css("display", "inline");
    $('#ps47-b').css("display", "inline");
    $('#ps47-c').css("display", "inline");
    $('#furca47').css("display", "block");
    $('#furca47b').css("display", "block");
    $('#ae47').css("display", "inline");
    $('#pi47').css("display", "inline");

}

function d46bToggleON() {
    $('#d46b').val("|d46b,0");
    $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-46b.png')");
    $('#diente46b-a').css("background-position", "0 23px");
    $('#diente46b-a').css("background-repeat", "no-repeat");
    $('#m46b').css("display", "none");
    $('#i46b').css("display", "none");
    $('#f46b').css("display", "none");
    $('#s46b-a').css("display", "none");
    $('#s46b-b').css("display", "none");
    $('#s46b-c').css("display", "none");
    $('#p46b-a').css("display", "none");
    $('#p46b-b').css("display", "none");
    $('#p46b-c').css("display", "none");
    $('#mg46b-a').css("display", "none");
    $('#mg46b-b').css("display", "none");
    $('#mg46b-c').css("display", "none");
    $('#ps46b-a').css("display", "none");
    $('#ps46b-b').css("display", "none");
    $('#ps46b-c').css("display", "none");
    /*$('#furca46b').css("background","none");*/
    $('#mg46b-a').val('0');
    $('#mg46b-b').val('0');
    $('#mg46b-c').val('0');
    $('#ps46b-a').val('0');
    $('#ps46b-b').val('0');
    $('#ps46b-c').val('0');

    $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-46.png')");
    $('#diente46-a').css("background-position", "0 4px");
    $('#diente46-a').css("background-repeat", "no-repeat");
    $('#m46').css("display", "none");
    $('#i46').css("display", "none");
    $('#f46').css("display", "none");
    $('#s46-a').css("display", "none");
    $('#s46-b').css("display", "none");
    $('#s46-c').css("display", "none");
    $('#p46-a').css("display", "none");
    $('#p46-b').css("display", "none");
    $('#p46-c').css("display", "none");
    $('#mg46-a').css("display", "none");
    $('#mg46-b').css("display", "none");
    $('#mg46-c').css("display", "none");
    $('#ps46-a').css("display", "none");
    $('#ps46-b').css("display", "none");
    $('#ps46-c').css("display", "none");
    $('#mg46-a').val('0');
    $('#mg46-b').val('0');
    $('#mg46-c').val('0');
    $('#ps46-a').val('0');
    $('#ps46-b').val('0');
    $('#ps46-c').val('0');
    $('#furca46').css("display", "none");
    $('#furca46b').css("display", "none");
    $('#ae46').css("display", "none");
    $('#pi46').css("display", "none");

}
function d46bToggleOUT() {
    $('#d46b').val("|d46b,1");
    $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-46b.png')");
    $('#diente46b-a').css("background-position", "0 23px");
    $('#diente46b-a').css("background-repeat", "no-repeat");
    $('#m46b').css("display", "inline");
    $('#i46b').css("display", "block");
    $('#f46b').css("display", "inline");
    $('#s46b-a').css("display", "inline");
    $('#s46b-b').css("display", "inline");
    $('#s46b-c').css("display", "inline");
    $('#p46b-a').css("display", "inline");
    $('#p46b-b').css("display", "inline");
    $('#p46b-c').css("display", "inline");
    $('#mg46b-a').css("display", "inline");
    $('#mg46b-b').css("display", "inline");
    $('#mg46b-c').css("display", "inline");
    $('#ps46b-a').css("display", "inline");
    $('#ps46b-b').css("display", "inline");
    $('#ps46b-c').css("display", "inline");

    $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-46.png')");
    $('#diente46-a').css("background-position", "0 4px");
    $('#diente46-a').css("background-repeat", "no-repeat");
    $('#m46').css("display", "inline");
    $('#i46').css("display", "block");
    $('#f46-a').css("display", "inline");
    $('#f46-b').css("display", "inline");
    $('#s46-a').css("display", "inline");
    $('#s46-b').css("display", "inline");
    $('#s46-c').css("display", "inline");
    $('#p46-a').css("display", "inline");
    $('#p46-b').css("display", "inline");
    $('#p46-c').css("display", "inline");
    $('#mg46-a').css("display", "inline");
    $('#mg46-b').css("display", "inline");
    $('#mg46-c').css("display", "inline");
    $('#ps46-a').css("display", "inline");
    $('#ps46-b').css("display", "inline");
    $('#ps46-c').css("display", "inline");
    $('#furca46').css("display", "block");
    $('#furca46b').css("display", "block");
    $('#ae46').css("display", "inline");
    $('#pi46').css("display", "inline");


}

function d45bToggleON() {
    $('#d45b').val("|d45b,0");
    $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-45b.png')");
    $('#diente45b-a').css("background-position", "0px 20px");
    $('#diente45b-a').css("background-repeat", "no-repeat");
    $('#m45b').css("display", "none");
    $('#i45b').css("display", "none");
    $('#f45b').css("display", "none");
    $('#s45b-a').css("display", "none");
    $('#s45b-b').css("display", "none");
    $('#s45b-c').css("display", "none");
    $('#p45b-a').css("display", "none");
    $('#p45b-b').css("display", "none");
    $('#p45b-c').css("display", "none");
    $('#mg45b-a').css("display", "none");
    $('#mg45b-b').css("display", "none");
    $('#mg45b-c').css("display", "none");
    $('#ps45b-a').css("display", "none");
    $('#ps45b-b').css("display", "none");
    $('#ps45b-c').css("display", "none");
    $('#mg45b-a').val('0');
    $('#mg45b-b').val('0');
    $('#mg45b-c').val('0');
    $('#ps45b-a').val('0');
    $('#ps45b-b').val('0');
    $('#ps45b-c').val('0');

    $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-45.png')");
    $('#diente45-a').css("background-position", "0 1px");
    $('#diente45-a').css("background-repeat", "no-repeat");
    $('#m45').css("display", "none");
    $('#i45').css("display", "none");
    $('#s45-a').css("display", "none");
    $('#s45-b').css("display", "none");
    $('#s45-c').css("display", "none");
    $('#p45-a').css("display", "none");
    $('#p45-b').css("display", "none");
    $('#p45-c').css("display", "none");
    $('#mg45-a').css("display", "none");
    $('#mg45-b').css("display", "none");
    $('#mg45-c').css("display", "none");
    $('#ps45-a').css("display", "none");
    $('#ps45-b').css("display", "none");
    $('#ps45-c').css("display", "none");
    $('#mg45-a').val('0');
    $('#mg45-b').val('0');
    $('#mg45-c').val('0');
    $('#ps45-a').val('0');
    $('#ps45-b').val('0');
    $('#ps45-c').val('0');
    $('#ae45').css("display", "none");
    $('#pi45').css("display", "none");

}
function d45bToggleOUT() {
    $('#d45b').val("|d45b,1");
    $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-45b.png')");
    $('#diente45b-a').css("background-position", "0 20px");
    $('#diente45b-a').css("background-repeat", "no-repeat");
    $('#m45b').css("display", "inline");
    $('#i45b').css("display", "block");
    $('#f45b').css("display", "inline");
    $('#s45b-a').css("display", "inline");
    $('#s45b-b').css("display", "inline");
    $('#s45b-c').css("display", "inline");
    $('#p45b-a').css("display", "inline");
    $('#p45b-b').css("display", "inline");
    $('#p45b-c').css("display", "inline");
    $('#mg45b-a').css("display", "inline");
    $('#mg45b-b').css("display", "inline");
    $('#mg45b-c').css("display", "inline");
    $('#ps45b-a').css("display", "inline");
    $('#ps45b-b').css("display", "inline");
    $('#ps45b-c').css("display", "inline");

    $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-45.png')");
    $('#diente45-a').css("background-position", "0 1px");
    $('#diente45-a').css("background-repeat", "no-repeat");
    $('#m45').css("display", "inline");
    $('#i45').css("display", "inline");
    $('#f45').css("display", "inline");
    $('#s45-a').css("display", "inline");
    $('#s45-b').css("display", "inline");
    $('#s45-c').css("display", "inline");
    $('#p45-a').css("display", "inline");
    $('#p45-b').css("display", "inline");
    $('#p45-c').css("display", "inline");
    $('#mg45-a').css("display", "inline");
    $('#mg45-b').css("display", "inline");
    $('#mg45-c').css("display", "inline");
    $('#ps45-a').css("display", "inline");
    $('#ps45-b').css("display", "inline");
    $('#ps45-c').css("display", "inline");
    $('#ae45').css("display", "inline");
    $('#pi45').css("display", "inline");
}

function d44bToggleON() {
    $('#d44b').val("|d44b,0");
    $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-44b.png')");
    $('#diente44b-a').css("background-position", "0 13px");
    $('#diente44b-a').css("background-repeat", "no-repeat");
    $('#m44b').css("display", "none");
    $('#i44b').css("display", "none");
    $('#f44b').css("display", "none");
    $('#s44b-a').css("display", "none");
    $('#s44b-b').css("display", "none");
    $('#s44b-c').css("display", "none");
    $('#p44b-a').css("display", "none");
    $('#p44b-b').css("display", "none");
    $('#p44b-c').css("display", "none");
    $('#mg44b-a').css("display", "none");
    $('#mg44b-b').css("display", "none");
    $('#mg44b-c').css("display", "none");
    $('#ps44b-a').css("display", "none");
    $('#ps44b-b').css("display", "none");
    $('#ps44b-c').css("display", "none");
    $('#mg44b-a').val('0');
    $('#mg44b-b').val('0');
    $('#mg44b-c').val('0');
    $('#ps44b-a').val('0');
    $('#ps44b-b').val('0');
    $('#ps44b-c').val('0');

    $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-44.png')");
    $('#diente44-a').css("background-position", "0 3px");
    $('#diente44-a').css("background-repeat", "no-repeat");
    $('#m44').css("display", "none");
    $('#i44').css("display", "none");
    $('#f44-a').css("display", "none");
    $('#f44-b').css("display", "none");
    $('#s44-a').css("display", "none");
    $('#s44-b').css("display", "none");
    $('#s44-c').css("display", "none");
    $('#p44-a').css("display", "none");
    $('#p44-b').css("display", "none");
    $('#p44-c').css("display", "none");
    $('#mg44-a').css("display", "none");
    $('#mg44-b').css("display", "none");
    $('#mg44-c').css("display", "none");
    $('#ps44-a').css("display", "none");
    $('#ps44-b').css("display", "none");
    $('#ps44-c').css("display", "none");
    $('#mg44-a').val('0');
    $('#mg44-b').val('0');
    $('#mg44-c').val('0');
    $('#ps44-a').val('0');
    $('#ps44-b').val('0');
    $('#ps44-c').val('0');
    $('#ae44').css("display", "none");
    $('#pi44').css("display", "none");

}
function d44bToggleOUT() {
    $('#d44b').val("|d44b,1");
    $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-44b.png')");
    $('#diente44b-a').css("background-position", "0 13px");
    $('#diente44b-a').css("background-repeat", "no-repeat");
    $('#m44b').css("display", "inline");
    $('#i44b').css("display", "block");
    $('#f44b').css("display", "inline");
    $('#s44b-a').css("display", "inline");
    $('#s44b-b').css("display", "inline");
    $('#s44b-c').css("display", "inline");
    $('#p44b-a').css("display", "inline");
    $('#p44b-b').css("display", "inline");
    $('#p44b-c').css("display", "inline");
    $('#mg44b-a').css("display", "inline");
    $('#mg44b-b').css("display", "inline");
    $('#mg44b-c').css("display", "inline");
    $('#ps44b-a').css("display", "inline");
    $('#ps44b-b').css("display", "inline");
    $('#ps44b-c').css("display", "inline");

    $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-44.png')");
    $('#diente44-a').css("background-position", "0 3px");
    $('#diente44-a').css("background-repeat", "no-repeat");
    $('#m44').css("display", "inline");
    $('#i44').css("display", "inline");
    $('#f44-a').css("display", "inline");
    $('#f44-b').css("display", "inline");
    $('#s44-a').css("display", "inline");
    $('#s44-b').css("display", "inline");
    $('#s44-c').css("display", "inline");
    $('#p44-a').css("display", "inline");
    $('#p44-b').css("display", "inline");
    $('#p44-c').css("display", "inline");
    $('#mg44-a').css("display", "inline");
    $('#mg44-b').css("display", "inline");
    $('#mg44-c').css("display", "inline");
    $('#ps44-a').css("display", "inline");
    $('#ps44-b').css("display", "inline");
    $('#ps44-c').css("display", "inline");
    $('#ae44').css("display", "inline");
    $('#pi44').css("display", "inline");

}

function d43bToggleON() {
    $('#d43b').val("|d43b,0");
    $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-43b.png')");
    $('#diente43b-a').css("background-position", "0 12px");
    $('#diente43b-a').css("background-repeat", "no-repeat");
    $('#m43b').css("display", "none");
    $('#i43b').css("display", "none");
    $('#f43b').css("display", "none");
    $('#s43b-a').css("display", "none");
    $('#s43b-b').css("display", "none");
    $('#s43b-c').css("display", "none");
    $('#p43b-a').css("display", "none");
    $('#p43b-b').css("display", "none");
    $('#p43b-c').css("display", "none");
    $('#mg43b-a').css("display", "none");
    $('#mg43b-b').css("display", "none");
    $('#mg43b-c').css("display", "none");
    $('#ps43b-a').css("display", "none");
    $('#ps43b-b').css("display", "none");
    $('#ps43b-c').css("display", "none");
    $('#mg43b-a').val('0');
    $('#mg43b-b').val('0');
    $('#mg43b-c').val('0');
    $('#ps43b-a').val('0');
    $('#ps43b-b').val('0');
    $('#ps43b-c').val('0');

    $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-43.png')");
    $('#diente43-a').css("background-position", "0 7px");
    $('#diente43-a').css("background-repeat", "no-repeat");
    $('#m43').css("display", "none");
    $('#i43').css("display", "none");
    $('#f43').css("display", "none");
    $('#s43-a').css("display", "none");
    $('#s43-b').css("display", "none");
    $('#s43-c').css("display", "none");
    $('#p43-a').css("display", "none");
    $('#p43-b').css("display", "none");
    $('#p43-c').css("display", "none");
    $('#mg43-a').css("display", "none");
    $('#mg43-b').css("display", "none");
    $('#mg43-c').css("display", "none");
    $('#ps43-a').css("display", "none");
    $('#ps43-b').css("display", "none");
    $('#ps43-c').css("display", "none");
    $('#mg43-a').val('0');
    $('#mg43-b').val('0');
    $('#mg43-c').val('0');
    $('#ps43-a').val('0');
    $('#ps43-b').val('0');
    $('#ps43-c').val('0');
    $('#ae43').css("display", "none");
    $('#pi43').css("display", "none");

}
function d43bToggleOUT() {
    $('#d43b').val("|d43b,1");
    $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-43b.png')");
    $('#diente43b-a').css("background-position", "0 12px");
    $('#diente43b-a').css("background-repeat", "no-repeat");
    $('#m43b').css("display", "inline");
    $('#i43b').css("display", "block");
    $('#f43b').css("display", "inline");
    $('#s43b-a').css("display", "inline");
    $('#s43b-b').css("display", "inline");
    $('#s43b-c').css("display", "inline");
    $('#p43b-a').css("display", "inline");
    $('#p43b-b').css("display", "inline");
    $('#p43b-c').css("display", "inline");
    $('#mg43b-a').css("display", "inline");
    $('#mg43b-b').css("display", "inline");
    $('#mg43b-c').css("display", "inline");
    $('#ps43b-a').css("display", "inline");
    $('#ps43b-b').css("display", "inline");
    $('#ps43b-c').css("display", "inline");

    $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-43.png')");
    $('#diente43-a').css("background-position", "0 7px");
    $('#diente43-a').css("background-repeat", "no-repeat");
    $('#m43').css("display", "inline");
    $('#i43').css("display", "inline");
    $('#f43').css("display", "inline");
    $('#s43-a').css("display", "inline");
    $('#s43-b').css("display", "inline");
    $('#s43-c').css("display", "inline");
    $('#p43-a').css("display", "inline");
    $('#p43-b').css("display", "inline");
    $('#p43-c').css("display", "inline");
    $('#mg43-a').css("display", "inline");
    $('#mg43-b').css("display", "inline");
    $('#mg43-c').css("display", "inline");
    $('#ps43-a').css("display", "inline");
    $('#ps43-b').css("display", "inline");
    $('#ps43-c').css("display", "inline");
    $('#ae43').css("display", "inline");
    $('#pi43').css("display", "inline");

}

function d42bToggleON() {
    $('#d42b').val("|d42b,0");
    $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-42b.png')");
    $('#diente42b-a').css("background-position", "0 15px");
    $('#diente42b-a').css("background-repeat", "no-repeat");
    $('#m42b').css("display", "none");
    $('#i42b').css("display", "none");
    $('#f42b').css("display", "none");
    $('#s42b-a').css("display", "none");
    $('#s42b-b').css("display", "none");
    $('#s42b-c').css("display", "none");
    $('#p42b-a').css("display", "none");
    $('#p42b-b').css("display", "none");
    $('#p42b-c').css("display", "none");
    $('#mg42b-a').css("display", "none");
    $('#mg42b-b').css("display", "none");
    $('#mg42b-c').css("display", "none");
    $('#ps42b-a').css("display", "none");
    $('#ps42b-b').css("display", "none");
    $('#ps42b-c').css("display", "none");
    $('#mg42b-a').val('0');
    $('#mg42b-b').val('0');
    $('#mg42b-c').val('0');
    $('#ps42b-a').val('0');
    $('#ps42b-b').val('0');
    $('#ps42b-c').val('0');

    $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-42.png')");
    $('#diente42-a').css("background-position", "0 3px");
    $('#diente42-a').css("background-repeat", "no-repeat");
    $('#m42').css("display", "none");
    $('#i42').css("display", "none");
    $('#f42').css("display", "none");
    $('#s42-a').css("display", "none");
    $('#s42-b').css("display", "none");
    $('#s42-c').css("display", "none");
    $('#p42-a').css("display", "none");
    $('#p42-b').css("display", "none");
    $('#p42-c').css("display", "none");
    $('#mg42-a').css("display", "none");
    $('#mg42-b').css("display", "none");
    $('#mg42-c').css("display", "none");
    $('#ps42-a').css("display", "none");
    $('#ps42-b').css("display", "none");
    $('#ps42-c').css("display", "none");
    $('#mg42-a').val('0');
    $('#mg42-b').val('0');
    $('#mg42-c').val('0');
    $('#ps42-a').val('0');
    $('#ps42-b').val('0');
    $('#ps42-c').val('0');
    $('#ae42').css("display", "none");
    $('#pi42').css("display", "none");

}
function d42bToggleOUT() {
    $('#d42b').val("|d42b,1");
    $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-42b.png')");
    $('#diente42b-a').css("background-position", "0 15px");
    $('#diente42b-a').css("background-repeat", "no-repeat");
    $('#m42b').css("display", "inline");
    $('#i42b').css("display", "block");
    $('#f42b').css("display", "inline");
    $('#s42b-a').css("display", "inline");
    $('#s42b-b').css("display", "inline");
    $('#s42b-c').css("display", "inline");
    $('#p42b-a').css("display", "inline");
    $('#p42b-b').css("display", "inline");
    $('#p42b-c').css("display", "inline");
    $('#mg42b-a').css("display", "inline");
    $('#mg42b-b').css("display", "inline");
    $('#mg42b-c').css("display", "inline");
    $('#ps42b-a').css("display", "inline");
    $('#ps42b-b').css("display", "inline");
    $('#ps42b-c').css("display", "inline");

    $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-42.png')");
    $('#diente42-a').css("background-position", "0 3px");
    $('#diente42-a').css("background-repeat", "no-repeat");
    $('#m42').css("display", "inline");
    $('#i42').css("display", "inline");
    $('#f42').css("display", "inline");
    $('#s42-a').css("display", "inline");
    $('#s42-b').css("display", "inline");
    $('#s42-c').css("display", "inline");
    $('#p42-a').css("display", "inline");
    $('#p42-b').css("display", "inline");
    $('#p42-c').css("display", "inline");
    $('#mg42-a').css("display", "inline");
    $('#mg42-b').css("display", "inline");
    $('#mg42-c').css("display", "inline");
    $('#ps42-a').css("display", "inline");
    $('#ps42-b').css("display", "inline");
    $('#ps42-c').css("display", "inline");
    $('#ae42').css("display", "inline");
    $('#pi42').css("display", "inline");

}

function d41bToggleON() {
    $('#d41b').val("|d41b,0");
    $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-41b.png')");
    $('#diente41b-a').css("background-position", "0 19px");
    $('#diente41b-a').css("background-repeat", "no-repeat");
    $('#m41b').css("display", "none");
    $('#i41b').css("display", "none");
    $('#f41b').css("display", "none");
    $('#s41b-a').css("display", "none");
    $('#s41b-b').css("display", "none");
    $('#s41b-c').css("display", "none");
    $('#p41b-a').css("display", "none");
    $('#p41b-b').css("display", "none");
    $('#p41b-c').css("display", "none");
    $('#mg41b-a').css("display", "none");
    $('#mg41b-b').css("display", "none");
    $('#mg41b-c').css("display", "none");
    $('#ps41b-a').css("display", "none");
    $('#ps41b-b').css("display", "none");
    $('#ps41b-c').css("display", "none");
    $('#mg41b-a').val('0');
    $('#mg41b-b').val('0');
    $('#mg41b-c').val('0');
    $('#ps41b-a').val('0');
    $('#ps41b-b').val('0');
    $('#ps41b-c').val('0');

    $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-41.png')");
    $('#diente41-a').css("background-position", "0 1px");
    $('#diente41-a').css("background-repeat", "no-repeat");
    $('#m41').css("display", "none");
    $('#i41').css("display", "none");
    $('#f41').css("display", "none");
    $('#s41-a').css("display", "none");
    $('#s41-b').css("display", "none");
    $('#s41-c').css("display", "none");
    $('#p41-a').css("display", "none");
    $('#p41-b').css("display", "none");
    $('#p41-c').css("display", "none");
    $('#mg41-a').css("display", "none");
    $('#mg41-b').css("display", "none");
    $('#mg41-c').css("display", "none");
    $('#ps41-a').css("display", "none");
    $('#ps41-b').css("display", "none");
    $('#ps41-c').css("display", "none");
    $('#mg41-a').val('0');
    $('#mg41-b').val('0');
    $('#mg41-c').val('0');
    $('#ps41-a').val('0');
    $('#ps41-b').val('0');
    $('#ps41-c').val('0');
    $('#ae41').css("display", "none");
    $('#pi41').css("display", "none");
}
function d41bToggleOUT() {
    $('#d41b').val("|d41b,1");
    $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-41b.png')");
    $('#diente41b-a').css("background-position", "0 19px");
    $('#diente41b-a').css("background-repeat", "no-repeat");
    $('#m41b').css("display", "inline");
    $('#i41b').css("display", "block");
    $('#f41b').css("display", "inline");
    $('#s41b-a').css("display", "inline");
    $('#s41b-b').css("display", "inline");
    $('#s41b-c').css("display", "inline");
    $('#p41b-a').css("display", "inline");
    $('#p41b-b').css("display", "inline");
    $('#p41b-c').css("display", "inline");
    $('#mg41b-a').css("display", "inline");
    $('#mg41b-b').css("display", "inline");
    $('#mg41b-c').css("display", "inline");
    $('#ps41b-a').css("display", "inline");
    $('#ps41b-b').css("display", "inline");
    $('#ps41b-c').css("display", "inline");

    $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-41.png')");
    $('#diente41-a').css("background-position", "0 1px");
    $('#diente41-a').css("background-repeat", "no-repeat");
    $('#m41').css("display", "inline");
    $('#i41').css("display", "inline");
    $('#f41').css("display", "inline");
    $('#s41-a').css("display", "inline");
    $('#s41-b').css("display", "inline");
    $('#s41-c').css("display", "inline");
    $('#p41-a').css("display", "inline");
    $('#p41-b').css("display", "inline");
    $('#p41-c').css("display", "inline");
    $('#mg41-a').css("display", "inline");
    $('#mg41-b').css("display", "inline");
    $('#mg41-c').css("display", "inline");
    $('#ps41-a').css("display", "inline");
    $('#ps41-b').css("display", "inline");
    $('#ps41-c').css("display", "inline");
    $('#ae41').css("display", "inline");
    $('#pi41').css("display", "inline");

}

//fim
$('#d48b').toggle(
    function () {
        $('#d48b').val("|d48b,0");
        $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-48b.png')");
        $('#diente48b-a').css("background-position", "0 24px");
        $('#diente48b-a').css("background-repeat", "no-repeat");
        $('#m48b').css("display", "none");
        $('#i48b').css("display", "none");
        $('#f48b').css("display", "none");
        $('#s48b-a').css("display", "none");
        $('#s48b-b').css("display", "none");
        $('#s48b-c').css("display", "none");
        $('#p48b-a').css("display", "none");
        $('#p48b-b').css("display", "none");
        $('#p48b-c').css("display", "none");
        $('#mg48b-a').css("display", "none");
        $('#mg48b-b').css("display", "none");
        $('#mg48b-c').css("display", "none");
        $('#ps48b-a').css("display", "none");
        $('#ps48b-b').css("display", "none");
        $('#ps48b-c').css("display", "none");
        /*$('#furca48b').css("background","none");*/
        $('#mg48b-a').val('0');
        $('#mg48b-b').val('0');
        $('#mg48b-c').val('0');
        $('#ps48b-a').val('0');
        $('#ps48b-b').val('0');
        $('#ps48b-c').val('0');

        $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-48.png')");
        $('#diente48-a').css("background-position", "0 -4px");
        $('#diente48-a').css("background-repeat", "no-repeat");
        $('#m48').css("display", "none");
        $('#i48').css("display", "none");
        $('#f48').css("display", "none");
        $('#s48-a').css("display", "none");
        $('#s48-b').css("display", "none");
        $('#s48-c').css("display", "none");
        $('#p48-a').css("display", "none");
        $('#p48-b').css("display", "none");
        $('#p48-c').css("display", "none");
        $('#mg48-a').css("display", "none");
        $('#mg48-b').css("display", "none");
        $('#mg48-c').css("display", "none");
        $('#ps48-a').css("display", "none");
        $('#ps48-b').css("display", "none");
        $('#ps48-c').css("display", "none");
        $('#mg48-a').val('0');
        $('#mg48-b').val('0');
        $('#mg48-c').val('0');
        $('#ps48-a').val('0');
        $('#ps48-b').val('0');
        $('#ps48-c').val('0');
        $('#furca48').css("display", "none");
        $('#furca48b').css("display", "none");
        $('#ae48').css("display", "none");
        $('#pi48').css("display", "none");

    },
    function () {
        $('#d48b').val("|d48b,1");
        $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-48b.png')");
        $('#diente48b-a').css("background-position", "0 24px");
        $('#diente48b-a').css("background-repeat", "no-repeat");
        $('#m48b').css("display", "inline");
        $('#i48b').css("display", "block");
        $('#f48b').css("display", "inline");
        $('#s48b-a').css("display", "inline");
        $('#s48b-b').css("display", "inline");
        $('#s48b-c').css("display", "inline");
        $('#p48b-a').css("display", "inline");
        $('#p48b-b').css("display", "inline");
        $('#p48b-c').css("display", "inline");
        $('#mg48b-a').css("display", "inline");
        $('#mg48b-b').css("display", "inline");
        $('#mg48b-c').css("display", "inline");
        $('#ps48b-a').css("display", "inline");
        $('#ps48b-b').css("display", "inline");
        $('#ps48b-c').css("display", "inline");

        $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-48.png')");
        $('#diente48-a').css("background-position", "0 -4px");
        $('#diente48-a').css("background-repeat", "no-repeat");
        $('#m48').css("display", "inline");
        $('#i48').css("display", "inline");
        $('#f48').css("display", "inline");
        $('#s48-a').css("display", "inline");
        $('#s48-b').css("display", "inline");
        $('#s48-c').css("display", "inline");
        $('#p48-a').css("display", "inline");
        $('#p48-b').css("display", "inline");
        $('#p48-c').css("display", "inline");
        $('#mg48-a').css("display", "inline");
        $('#mg48-b').css("display", "inline");
        $('#mg48-c').css("display", "inline");
        $('#ps48-a').css("display", "inline");
        $('#ps48-b').css("display", "inline");
        $('#ps48-c').css("display", "inline");
        $('#furca48').css("display", "block");
        $('#furca48b').css("display", "block");
        $('#ae48').css("display", "inline");
        $('#pi48').css("display", "inline");


    }
);
$('#d47b').toggle(
    function () {
        $('#d47b').val("|d47b,0");
        $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-47b.png')");
        $('#diente47b-a').css("background-position", "0 22px");
        $('#diente47b-a').css("background-repeat", "no-repeat");
        $('#m47b').css("display", "none");
        $('#i47b').css("display", "none");
        $('#f47b').css("display", "none");
        $('#s47b-a').css("display", "none");
        $('#s47b-b').css("display", "none");
        $('#s47b-c').css("display", "none");
        $('#p47b-a').css("display", "none");
        $('#p47b-b').css("display", "none");
        $('#p47b-c').css("display", "none");
        $('#mg47b-a').css("display", "none");
        $('#mg47b-b').css("display", "none");
        $('#mg47b-c').css("display", "none");
        $('#ps47b-a').css("display", "none");
        $('#ps47b-b').css("display", "none");
        $('#ps47b-c').css("display", "none");
        /*$('#furca47b').css("background","none");*/
        $('#mg47b-a').val('0');
        $('#mg47b-b').val('0');
        $('#mg47b-c').val('0');
        $('#ps47b-a').val('0');
        $('#ps47b-b').val('0');
        $('#ps47b-c').val('0');

        $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-47.png')");
        $('#diente47-a').css("background-position", "0 -4px");
        $('#diente47-a').css("background-repeat", "no-repeat");
        $('#m47').css("display", "none");
        $('#i47').css("display", "none");
        $('#f47').css("display", "none");
        $('#s47-a').css("display", "none");
        $('#s47-b').css("display", "none");
        $('#s47-c').css("display", "none");
        $('#p47-a').css("display", "none");
        $('#p47-b').css("display", "none");
        $('#p47-c').css("display", "none");
        $('#mg47-a').css("display", "none");
        $('#mg47-b').css("display", "none");
        $('#mg47-c').css("display", "none");
        $('#ps47-a').css("display", "none");
        $('#ps47-b').css("display", "none");
        $('#ps47-c').css("display", "none");
        $('#mg47-a').val('0');
        $('#mg47-b').val('0');
        $('#mg47-c').val('0');
        $('#ps47-a').val('0');
        $('#ps47-b').val('0');
        $('#ps47-c').val('0');
        $('#furca47').css("display", "none");
        $('#furca47b').css("display", "none");
        $('#ae47').css("display", "none");
        $('#pi47').css("display", "none");


    },
    function () {
        $('#d47b').val("|d47b,1");
        $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-47b.png')");
        $('#diente47b-a').css("background-position", "0 22px");
        $('#diente47b-a').css("background-repeat", "no-repeat");
        $('#m47b').css("display", "inline");
        $('#i47b').css("display", "block");
        $('#f47b').css("display", "inline");
        $('#s47b-a').css("display", "inline");
        $('#s47b-b').css("display", "inline");
        $('#s47b-c').css("display", "inline");
        $('#p47b-a').css("display", "inline");
        $('#p47b-b').css("display", "inline");
        $('#p47b-c').css("display", "inline");
        $('#mg47b-a').css("display", "inline");
        $('#mg47b-b').css("display", "inline");
        $('#mg47b-c').css("display", "inline");
        $('#ps47b-a').css("display", "inline");
        $('#ps47b-b').css("display", "inline");
        $('#ps47b-c').css("display", "inline");

        $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-47.png')");
        $('#diente47-a').css("background-position", "0 -4px");
        $('#diente47-a').css("background-repeat", "no-repeat");
        $('#m47').css("display", "inline");
        $('#i47').css("display", "block");
        $('#f47').css("display", "inline");
        $('#s47-a').css("display", "inline");
        $('#s47-b').css("display", "inline");
        $('#s47-c').css("display", "inline");
        $('#p47-a').css("display", "inline");
        $('#p47-b').css("display", "inline");
        $('#p47-c').css("display", "inline");
        $('#mg47-a').css("display", "inline");
        $('#mg47-b').css("display", "inline");
        $('#mg47-c').css("display", "inline");
        $('#ps47-a').css("display", "inline");
        $('#ps47-b').css("display", "inline");
        $('#ps47-c').css("display", "inline");
        $('#furca47').css("display", "block");
        $('#furca47b').css("display", "block");
        $('#ae47').css("display", "inline");
        $('#pi47').css("display", "inline");

    }
);
$('#d46b').toggle(
    function () {
        $('#d46b').val("|d46b,0");
        $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-46b.png')");
        $('#diente46b-a').css("background-position", "0 23px");
        $('#diente46b-a').css("background-repeat", "no-repeat");
        $('#m46b').css("display", "none");
        $('#i46b').css("display", "none");
        $('#f46b').css("display", "none");
        $('#s46b-a').css("display", "none");
        $('#s46b-b').css("display", "none");
        $('#s46b-c').css("display", "none");
        $('#p46b-a').css("display", "none");
        $('#p46b-b').css("display", "none");
        $('#p46b-c').css("display", "none");
        $('#mg46b-a').css("display", "none");
        $('#mg46b-b').css("display", "none");
        $('#mg46b-c').css("display", "none");
        $('#ps46b-a').css("display", "none");
        $('#ps46b-b').css("display", "none");
        $('#ps46b-c').css("display", "none");
        /*$('#furca46b').css("background","none");*/
        $('#mg46b-a').val('0');
        $('#mg46b-b').val('0');
        $('#mg46b-c').val('0');
        $('#ps46b-a').val('0');
        $('#ps46b-b').val('0');
        $('#ps46b-c').val('0');

        $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-46.png')");
        $('#diente46-a').css("background-position", "0 4px");
        $('#diente46-a').css("background-repeat", "no-repeat");
        $('#m46').css("display", "none");
        $('#i46').css("display", "none");
        $('#f46').css("display", "none");
        $('#s46-a').css("display", "none");
        $('#s46-b').css("display", "none");
        $('#s46-c').css("display", "none");
        $('#p46-a').css("display", "none");
        $('#p46-b').css("display", "none");
        $('#p46-c').css("display", "none");
        $('#mg46-a').css("display", "none");
        $('#mg46-b').css("display", "none");
        $('#mg46-c').css("display", "none");
        $('#ps46-a').css("display", "none");
        $('#ps46-b').css("display", "none");
        $('#ps46-c').css("display", "none");
        $('#mg46-a').val('0');
        $('#mg46-b').val('0');
        $('#mg46-c').val('0');
        $('#ps46-a').val('0');
        $('#ps46-b').val('0');
        $('#ps46-c').val('0');
        $('#furca46').css("display", "none");
        $('#furca46b').css("display", "none");
        $('#ae46').css("display", "none");
        $('#pi46').css("display", "none");

    },
    function () {
        $('#d46b').val("|d46b,1");
        $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-46b.png')");
        $('#diente46b-a').css("background-position", "0 23px");
        $('#diente46b-a').css("background-repeat", "no-repeat");
        $('#m46b').css("display", "inline");
        $('#i46b').css("display", "block");
        $('#f46b').css("display", "inline");
        $('#s46b-a').css("display", "inline");
        $('#s46b-b').css("display", "inline");
        $('#s46b-c').css("display", "inline");
        $('#p46b-a').css("display", "inline");
        $('#p46b-b').css("display", "inline");
        $('#p46b-c').css("display", "inline");
        $('#mg46b-a').css("display", "inline");
        $('#mg46b-b').css("display", "inline");
        $('#mg46b-c').css("display", "inline");
        $('#ps46b-a').css("display", "inline");
        $('#ps46b-b').css("display", "inline");
        $('#ps46b-c').css("display", "inline");

        $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-46.png')");
        $('#diente46-a').css("background-position", "0 4px");
        $('#diente46-a').css("background-repeat", "no-repeat");
        $('#m46').css("display", "inline");
        $('#i46').css("display", "block");
        $('#f46-a').css("display", "inline");
        $('#f46-b').css("display", "inline");
        $('#s46-a').css("display", "inline");
        $('#s46-b').css("display", "inline");
        $('#s46-c').css("display", "inline");
        $('#p46-a').css("display", "inline");
        $('#p46-b').css("display", "inline");
        $('#p46-c').css("display", "inline");
        $('#mg46-a').css("display", "inline");
        $('#mg46-b').css("display", "inline");
        $('#mg46-c').css("display", "inline");
        $('#ps46-a').css("display", "inline");
        $('#ps46-b').css("display", "inline");
        $('#ps46-c').css("display", "inline");
        $('#furca46').css("display", "block");
        $('#furca46b').css("display", "block");
        $('#ae46').css("display", "inline");
        $('#pi46').css("display", "inline");


    }
);
$('#d45b').toggle(
    function () {
        $('#d45b').val("|d45b,0");
        $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-45b.png')");
        $('#diente45b-a').css("background-position", "0px 20px");
        $('#diente45b-a').css("background-repeat", "no-repeat");
        $('#m45b').css("display", "none");
        $('#i45b').css("display", "none");
        $('#f45b').css("display", "none");
        $('#s45b-a').css("display", "none");
        $('#s45b-b').css("display", "none");
        $('#s45b-c').css("display", "none");
        $('#p45b-a').css("display", "none");
        $('#p45b-b').css("display", "none");
        $('#p45b-c').css("display", "none");
        $('#mg45b-a').css("display", "none");
        $('#mg45b-b').css("display", "none");
        $('#mg45b-c').css("display", "none");
        $('#ps45b-a').css("display", "none");
        $('#ps45b-b').css("display", "none");
        $('#ps45b-c').css("display", "none");
        $('#mg45b-a').val('0');
        $('#mg45b-b').val('0');
        $('#mg45b-c').val('0');
        $('#ps45b-a').val('0');
        $('#ps45b-b').val('0');
        $('#ps45b-c').val('0');

        $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-45.png')");
        $('#diente45-a').css("background-position", "0 1px");
        $('#diente45-a').css("background-repeat", "no-repeat");
        $('#m45').css("display", "none");
        $('#i45').css("display", "none");
        $('#s45-a').css("display", "none");
        $('#s45-b').css("display", "none");
        $('#s45-c').css("display", "none");
        $('#p45-a').css("display", "none");
        $('#p45-b').css("display", "none");
        $('#p45-c').css("display", "none");
        $('#mg45-a').css("display", "none");
        $('#mg45-b').css("display", "none");
        $('#mg45-c').css("display", "none");
        $('#ps45-a').css("display", "none");
        $('#ps45-b').css("display", "none");
        $('#ps45-c').css("display", "none");
        $('#mg45-a').val('0');
        $('#mg45-b').val('0');
        $('#mg45-c').val('0');
        $('#ps45-a').val('0');
        $('#ps45-b').val('0');
        $('#ps45-c').val('0');
        $('#ae45').css("display", "none");
        $('#pi45').css("display", "none");

    },
    function () {
        $('#d45b').val("|d45b,1");
        $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-45b.png')");
        $('#diente45b-a').css("background-position", "0 20px");
        $('#diente45b-a').css("background-repeat", "no-repeat");
        $('#m45b').css("display", "inline");
        $('#i45b').css("display", "block");
        $('#f45b').css("display", "inline");
        $('#s45b-a').css("display", "inline");
        $('#s45b-b').css("display", "inline");
        $('#s45b-c').css("display", "inline");
        $('#p45b-a').css("display", "inline");
        $('#p45b-b').css("display", "inline");
        $('#p45b-c').css("display", "inline");
        $('#mg45b-a').css("display", "inline");
        $('#mg45b-b').css("display", "inline");
        $('#mg45b-c').css("display", "inline");
        $('#ps45b-a').css("display", "inline");
        $('#ps45b-b').css("display", "inline");
        $('#ps45b-c').css("display", "inline");

        $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-45.png')");
        $('#diente45-a').css("background-position", "0 1px");
        $('#diente45-a').css("background-repeat", "no-repeat");
        $('#m45').css("display", "inline");
        $('#i45').css("display", "inline");
        $('#f45').css("display", "inline");
        $('#s45-a').css("display", "inline");
        $('#s45-b').css("display", "inline");
        $('#s45-c').css("display", "inline");
        $('#p45-a').css("display", "inline");
        $('#p45-b').css("display", "inline");
        $('#p45-c').css("display", "inline");
        $('#mg45-a').css("display", "inline");
        $('#mg45-b').css("display", "inline");
        $('#mg45-c').css("display", "inline");
        $('#ps45-a').css("display", "inline");
        $('#ps45-b').css("display", "inline");
        $('#ps45-c').css("display", "inline");
        $('#ae45').css("display", "inline");
        $('#pi45').css("display", "inline");
    }
);
$('#d44b').toggle(
    function () {
        $('#d44b').val("|d44b,0");
        $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-44b.png')");
        $('#diente44b-a').css("background-position", "0 13px");
        $('#diente44b-a').css("background-repeat", "no-repeat");
        $('#m44b').css("display", "none");
        $('#i44b').css("display", "none");
        $('#f44b').css("display", "none");
        $('#s44b-a').css("display", "none");
        $('#s44b-b').css("display", "none");
        $('#s44b-c').css("display", "none");
        $('#p44b-a').css("display", "none");
        $('#p44b-b').css("display", "none");
        $('#p44b-c').css("display", "none");
        $('#mg44b-a').css("display", "none");
        $('#mg44b-b').css("display", "none");
        $('#mg44b-c').css("display", "none");
        $('#ps44b-a').css("display", "none");
        $('#ps44b-b').css("display", "none");
        $('#ps44b-c').css("display", "none");
        $('#mg44b-a').val('0');
        $('#mg44b-b').val('0');
        $('#mg44b-c').val('0');
        $('#ps44b-a').val('0');
        $('#ps44b-b').val('0');
        $('#ps44b-c').val('0');

        $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-44.png')");
        $('#diente44-a').css("background-position", "0 3px");
        $('#diente44-a').css("background-repeat", "no-repeat");
        $('#m44').css("display", "none");
        $('#i44').css("display", "none");
        $('#f44-a').css("display", "none");
        $('#f44-b').css("display", "none");
        $('#s44-a').css("display", "none");
        $('#s44-b').css("display", "none");
        $('#s44-c').css("display", "none");
        $('#p44-a').css("display", "none");
        $('#p44-b').css("display", "none");
        $('#p44-c').css("display", "none");
        $('#mg44-a').css("display", "none");
        $('#mg44-b').css("display", "none");
        $('#mg44-c').css("display", "none");
        $('#ps44-a').css("display", "none");
        $('#ps44-b').css("display", "none");
        $('#ps44-c').css("display", "none");
        $('#mg44-a').val('0');
        $('#mg44-b').val('0');
        $('#mg44-c').val('0');
        $('#ps44-a').val('0');
        $('#ps44-b').val('0');
        $('#ps44-c').val('0');
        $('#ae44').css("display", "none");
        $('#pi44').css("display", "none");

    },
    function () {
        $('#d44b').val("|d44b,1");
        $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-44b.png')");
        $('#diente44b-a').css("background-position", "0 13px");
        $('#diente44b-a').css("background-repeat", "no-repeat");
        $('#m44b').css("display", "inline");
        $('#i44b').css("display", "block");
        $('#f44b').css("display", "inline");
        $('#s44b-a').css("display", "inline");
        $('#s44b-b').css("display", "inline");
        $('#s44b-c').css("display", "inline");
        $('#p44b-a').css("display", "inline");
        $('#p44b-b').css("display", "inline");
        $('#p44b-c').css("display", "inline");
        $('#mg44b-a').css("display", "inline");
        $('#mg44b-b').css("display", "inline");
        $('#mg44b-c').css("display", "inline");
        $('#ps44b-a').css("display", "inline");
        $('#ps44b-b').css("display", "inline");
        $('#ps44b-c').css("display", "inline");

        $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-44.png')");
        $('#diente44-a').css("background-position", "0 3px");
        $('#diente44-a').css("background-repeat", "no-repeat");
        $('#m44').css("display", "inline");
        $('#i44').css("display", "inline");
        $('#f44-a').css("display", "inline");
        $('#f44-b').css("display", "inline");
        $('#s44-a').css("display", "inline");
        $('#s44-b').css("display", "inline");
        $('#s44-c').css("display", "inline");
        $('#p44-a').css("display", "inline");
        $('#p44-b').css("display", "inline");
        $('#p44-c').css("display", "inline");
        $('#mg44-a').css("display", "inline");
        $('#mg44-b').css("display", "inline");
        $('#mg44-c').css("display", "inline");
        $('#ps44-a').css("display", "inline");
        $('#ps44-b').css("display", "inline");
        $('#ps44-c').css("display", "inline");
        $('#ae44').css("display", "inline");
        $('#pi44').css("display", "inline");

    }
);
$('#d43b').toggle(
    function () {
        $('#d43b').val("|d43b,0");
        $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-43b.png')");
        $('#diente43b-a').css("background-position", "0 12px");
        $('#diente43b-a').css("background-repeat", "no-repeat");
        $('#m43b').css("display", "none");
        $('#i43b').css("display", "none");
        $('#f43b').css("display", "none");
        $('#s43b-a').css("display", "none");
        $('#s43b-b').css("display", "none");
        $('#s43b-c').css("display", "none");
        $('#p43b-a').css("display", "none");
        $('#p43b-b').css("display", "none");
        $('#p43b-c').css("display", "none");
        $('#mg43b-a').css("display", "none");
        $('#mg43b-b').css("display", "none");
        $('#mg43b-c').css("display", "none");
        $('#ps43b-a').css("display", "none");
        $('#ps43b-b').css("display", "none");
        $('#ps43b-c').css("display", "none");
        $('#mg43b-a').val('0');
        $('#mg43b-b').val('0');
        $('#mg43b-c').val('0');
        $('#ps43b-a').val('0');
        $('#ps43b-b').val('0');
        $('#ps43b-c').val('0');

        $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-43.png')");
        $('#diente43-a').css("background-position", "0 7px");
        $('#diente43-a').css("background-repeat", "no-repeat");
        $('#m43').css("display", "none");
        $('#i43').css("display", "none");
        $('#f43').css("display", "none");
        $('#s43-a').css("display", "none");
        $('#s43-b').css("display", "none");
        $('#s43-c').css("display", "none");
        $('#p43-a').css("display", "none");
        $('#p43-b').css("display", "none");
        $('#p43-c').css("display", "none");
        $('#mg43-a').css("display", "none");
        $('#mg43-b').css("display", "none");
        $('#mg43-c').css("display", "none");
        $('#ps43-a').css("display", "none");
        $('#ps43-b').css("display", "none");
        $('#ps43-c').css("display", "none");
        $('#mg43-a').val('0');
        $('#mg43-b').val('0');
        $('#mg43-c').val('0');
        $('#ps43-a').val('0');
        $('#ps43-b').val('0');
        $('#ps43-c').val('0');
        $('#ae43').css("display", "none");
        $('#pi43').css("display", "none");

    },
    function () {
        $('#d43b').val("|d43b,1");
        $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-43b.png')");
        $('#diente43b-a').css("background-position", "0 12px");
        $('#diente43b-a').css("background-repeat", "no-repeat");
        $('#m43b').css("display", "inline");
        $('#i43b').css("display", "block");
        $('#f43b').css("display", "inline");
        $('#s43b-a').css("display", "inline");
        $('#s43b-b').css("display", "inline");
        $('#s43b-c').css("display", "inline");
        $('#p43b-a').css("display", "inline");
        $('#p43b-b').css("display", "inline");
        $('#p43b-c').css("display", "inline");
        $('#mg43b-a').css("display", "inline");
        $('#mg43b-b').css("display", "inline");
        $('#mg43b-c').css("display", "inline");
        $('#ps43b-a').css("display", "inline");
        $('#ps43b-b').css("display", "inline");
        $('#ps43b-c').css("display", "inline");

        $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-43.png')");
        $('#diente43-a').css("background-position", "0 7px");
        $('#diente43-a').css("background-repeat", "no-repeat");
        $('#m43').css("display", "inline");
        $('#i43').css("display", "inline");
        $('#f43').css("display", "inline");
        $('#s43-a').css("display", "inline");
        $('#s43-b').css("display", "inline");
        $('#s43-c').css("display", "inline");
        $('#p43-a').css("display", "inline");
        $('#p43-b').css("display", "inline");
        $('#p43-c').css("display", "inline");
        $('#mg43-a').css("display", "inline");
        $('#mg43-b').css("display", "inline");
        $('#mg43-c').css("display", "inline");
        $('#ps43-a').css("display", "inline");
        $('#ps43-b').css("display", "inline");
        $('#ps43-c').css("display", "inline");
        $('#ae43').css("display", "inline");
        $('#pi43').css("display", "inline");

    }
);
$('#d42b').toggle(
    function () {
        $('#d42b').val("|d42b,0");
        $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-42b.png')");
        $('#diente42b-a').css("background-position", "0 15px");
        $('#diente42b-a').css("background-repeat", "no-repeat");
        $('#m42b').css("display", "none");
        $('#i42b').css("display", "none");
        $('#f42b').css("display", "none");
        $('#s42b-a').css("display", "none");
        $('#s42b-b').css("display", "none");
        $('#s42b-c').css("display", "none");
        $('#p42b-a').css("display", "none");
        $('#p42b-b').css("display", "none");
        $('#p42b-c').css("display", "none");
        $('#mg42b-a').css("display", "none");
        $('#mg42b-b').css("display", "none");
        $('#mg42b-c').css("display", "none");
        $('#ps42b-a').css("display", "none");
        $('#ps42b-b').css("display", "none");
        $('#ps42b-c').css("display", "none");
        $('#mg42b-a').val('0');
        $('#mg42b-b').val('0');
        $('#mg42b-c').val('0');
        $('#ps42b-a').val('0');
        $('#ps42b-b').val('0');
        $('#ps42b-c').val('0');

        $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-42.png')");
        $('#diente42-a').css("background-position", "0 3px");
        $('#diente42-a').css("background-repeat", "no-repeat");
        $('#m42').css("display", "none");
        $('#i42').css("display", "none");
        $('#f42').css("display", "none");
        $('#s42-a').css("display", "none");
        $('#s42-b').css("display", "none");
        $('#s42-c').css("display", "none");
        $('#p42-a').css("display", "none");
        $('#p42-b').css("display", "none");
        $('#p42-c').css("display", "none");
        $('#mg42-a').css("display", "none");
        $('#mg42-b').css("display", "none");
        $('#mg42-c').css("display", "none");
        $('#ps42-a').css("display", "none");
        $('#ps42-b').css("display", "none");
        $('#ps42-c').css("display", "none");
        $('#mg42-a').val('0');
        $('#mg42-b').val('0');
        $('#mg42-c').val('0');
        $('#ps42-a').val('0');
        $('#ps42-b').val('0');
        $('#ps42-c').val('0');
        $('#ae42').css("display", "none");
        $('#pi42').css("display", "none");

    },
    function () {
        $('#d42b').val("|d42b,1");
        $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-42b.png')");
        $('#diente42b-a').css("background-position", "0 15px");
        $('#diente42b-a').css("background-repeat", "no-repeat");
        $('#m42b').css("display", "inline");
        $('#i42b').css("display", "block");
        $('#f42b').css("display", "inline");
        $('#s42b-a').css("display", "inline");
        $('#s42b-b').css("display", "inline");
        $('#s42b-c').css("display", "inline");
        $('#p42b-a').css("display", "inline");
        $('#p42b-b').css("display", "inline");
        $('#p42b-c').css("display", "inline");
        $('#mg42b-a').css("display", "inline");
        $('#mg42b-b').css("display", "inline");
        $('#mg42b-c').css("display", "inline");
        $('#ps42b-a').css("display", "inline");
        $('#ps42b-b').css("display", "inline");
        $('#ps42b-c').css("display", "inline");

        $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-42.png')");
        $('#diente42-a').css("background-position", "0 3px");
        $('#diente42-a').css("background-repeat", "no-repeat");
        $('#m42').css("display", "inline");
        $('#i42').css("display", "inline");
        $('#f42').css("display", "inline");
        $('#s42-a').css("display", "inline");
        $('#s42-b').css("display", "inline");
        $('#s42-c').css("display", "inline");
        $('#p42-a').css("display", "inline");
        $('#p42-b').css("display", "inline");
        $('#p42-c').css("display", "inline");
        $('#mg42-a').css("display", "inline");
        $('#mg42-b').css("display", "inline");
        $('#mg42-c').css("display", "inline");
        $('#ps42-a').css("display", "inline");
        $('#ps42-b').css("display", "inline");
        $('#ps42-c').css("display", "inline");
        $('#ae42').css("display", "inline");
        $('#pi42').css("display", "inline");

    }
);
$('#d41b').toggle(
    function () {
        $('#d41b').val("|d41b,0");
        $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/tachados/periodontograma-dientes-abajo-tachados-41b.png')");
        $('#diente41b-a').css("background-position", "0 19px");
        $('#diente41b-a').css("background-repeat", "no-repeat");
        $('#m41b').css("display", "none");
        $('#i41b').css("display", "none");
        $('#f41b').css("display", "none");
        $('#s41b-a').css("display", "none");
        $('#s41b-b').css("display", "none");
        $('#s41b-c').css("display", "none");
        $('#p41b-a').css("display", "none");
        $('#p41b-b').css("display", "none");
        $('#p41b-c').css("display", "none");
        $('#mg41b-a').css("display", "none");
        $('#mg41b-b').css("display", "none");
        $('#mg41b-c').css("display", "none");
        $('#ps41b-a').css("display", "none");
        $('#ps41b-b').css("display", "none");
        $('#ps41b-c').css("display", "none");
        $('#mg41b-a').val('0');
        $('#mg41b-b').val('0');
        $('#mg41b-c').val('0');
        $('#ps41b-a').val('0');
        $('#ps41b-b').val('0');
        $('#ps41b-c').val('0');

        $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/tachados/periodontograma-dientes-abajo-tachados-41.png')");
        $('#diente41-a').css("background-position", "0 1px");
        $('#diente41-a').css("background-repeat", "no-repeat");
        $('#m41').css("display", "none");
        $('#i41').css("display", "none");
        $('#f41').css("display", "none");
        $('#s41-a').css("display", "none");
        $('#s41-b').css("display", "none");
        $('#s41-c').css("display", "none");
        $('#p41-a').css("display", "none");
        $('#p41-b').css("display", "none");
        $('#p41-c').css("display", "none");
        $('#mg41-a').css("display", "none");
        $('#mg41-b').css("display", "none");
        $('#mg41-c').css("display", "none");
        $('#ps41-a').css("display", "none");
        $('#ps41-b').css("display", "none");
        $('#ps41-c').css("display", "none");
        $('#mg41-a').val('0');
        $('#mg41-b').val('0');
        $('#mg41-c').val('0');
        $('#ps41-a').val('0');
        $('#ps41-b').val('0');
        $('#ps41-c').val('0');
        $('#ae41').css("display", "none");
        $('#pi41').css("display", "none");
    },
    function () {
        $('#d41b').val("|d41b,1");
        $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-41b.png')");
        $('#diente41b-a').css("background-position", "0 19px");
        $('#diente41b-a').css("background-repeat", "no-repeat");
        $('#m41b').css("display", "inline");
        $('#i41b').css("display", "block");
        $('#f41b').css("display", "inline");
        $('#s41b-a').css("display", "inline");
        $('#s41b-b').css("display", "inline");
        $('#s41b-c').css("display", "inline");
        $('#p41b-a').css("display", "inline");
        $('#p41b-b').css("display", "inline");
        $('#p41b-c').css("display", "inline");
        $('#mg41b-a').css("display", "inline");
        $('#mg41b-b').css("display", "inline");
        $('#mg41b-c').css("display", "inline");
        $('#ps41b-a').css("display", "inline");
        $('#ps41b-b').css("display", "inline");
        $('#ps41b-c').css("display", "inline");

        $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-41.png')");
        $('#diente41-a').css("background-position", "0 1px");
        $('#diente41-a').css("background-repeat", "no-repeat");
        $('#m41').css("display", "inline");
        $('#i41').css("display", "inline");
        $('#f41').css("display", "inline");
        $('#s41-a').css("display", "inline");
        $('#s41-b').css("display", "inline");
        $('#s41-c').css("display", "inline");
        $('#p41-a').css("display", "inline");
        $('#p41-b').css("display", "inline");
        $('#p41-c').css("display", "inline");
        $('#mg41-a').css("display", "inline");
        $('#mg41-b').css("display", "inline");
        $('#mg41-c').css("display", "inline");
        $('#ps41-a').css("display", "inline");
        $('#ps41-b').css("display", "inline");
        $('#ps41-c').css("display", "inline");
        $('#ae41').css("display", "inline");
        $('#pi41').css("display", "inline");

    }
);
//IMPLANTES
$('#i18').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f18').css({ "background": "#FFFFFF" });
        $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-18.png')");
        $('#diente18-a').css("background-position", "0 -2px");
        $('#diente18-a').css("background-repeat", "no-repeat");

        $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-18b.png')");
        $('#diente18b-a').css("background-position", "0 23px");
        $('#diente18b-a').css("background-repeat", "no-repeat");

        $('#furca18').css("background", "none");
        $('#furca18-a').css("background", "none");
        $('#furca18-b').css("background", "none");
        $('#f18').css("background", "none");
        $('#f18b-a').css("background", "none");
        $('#f18b-b').css("background", "none");

        $("#f18").attr("id", "f18desact");
        $("#f18b-a").attr("id", "f18b-adesact");
        $("#f18b-b").attr("id", "f18b-bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente18-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-18.png')");
        $('#diente18-a').css("background-position", "0 -2px");
        $('#diente18-a').css("background-repeat", "no-repeat");

        $('#diente18b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-18b.png')");
        $('#diente18b-a').css("background-position", "0 23px");
        $('#diente18b-a').css("background-repeat", "no-repeat");

        $('#f18').css("background", "#FFFFFF");
        $('#f18b-a').css("background", "#FFFFFF");
        $('#f18b-b').css("background", "#FFFFFF");

        $("#f18desact").attr("id", "f18");
        $("#f18b-adesact").attr("id", "f18b-a");
        $("#f18b-bdesact").attr("id", "f18b-b");
    }
);

$('#i17').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f17').css({ "background": "#FFFFFF" });
        $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-17.png')");
        $('#diente17-a').css("background-position", "0 -1px");
        $('#diente17-a').css("background-repeat", "no-repeat");

        $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-17b.png')");
        $('#diente17b-a').css("background-position", "0 24px");
        $('#diente17b-a').css("background-repeat", "no-repeat");

        $('#furca17').css("background", "none");
        $('#furca17-a').css("background", "none");
        $('#furca17-b').css("background", "none");
        $('#f17').css("background", "none");
        $('#f17b-a').css("background", "none");
        $('#f17b-b').css("background", "none");

        $("#f17").attr("id", "f17desact");
        $("#f17b-a").attr("id", "f17b-adesact");
        $("#f17b-b").attr("id", "f17b-bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente17-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-17.png')");
        $('#diente17-a').css("background-repeat", "no-repeat");

        $('#diente17b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-17b.png')");
        $('#diente17b-a').css("background-position", "0 24px");
        $('#diente17b-a').css("background-repeat", "no-repeat");

        $('#f17').css("background", "#FFFFFF");
        $('#f17b-a').css("background", "#FFFFFF");
        $('#f17b-b').css("background", "#FFFFFF");

        $("#f17desact").attr("id", "f17");
        $("#f17b-adesact").attr("id", "f17b-a");
        $("#f17b-bdesact").attr("id", "f17b-b");

    }
);

$('#i16').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f16').css({ "background": "#FFFFFF" });
        $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-16.png')");
        $('#diente16-a').css("background-position", "0 4px");
        $('#diente16-a').css("background-repeat", "no-repeat");

        $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-16b.png')");
        $('#diente16b-a').css("background-position", "0 22px");
        $('#diente16b-a').css("background-repeat", "no-repeat");

        $('#furca16').css("background", "none");
        $('#furca16-a').css("background", "none");
        $('#furca16-b').css("background", "none");
        $('#f16').css("background", "none");
        $('#f16b-a').css("background", "none");
        $('#f16b-b').css("background", "none");

        $("#f16").attr("id", "f16desact");
        $("#f16b-a").attr("id", "f16b-adesact");
        $("#f16b-b").attr("id", "f16b-bdesact");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente16-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-16.png')");
        $('#diente16-a').css("background-position", "0 4px");
        $('#diente16-a').css("background-repeat", "no-repeat");

        $('#diente16b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-16b.png')");
        $('#diente16b-a').css("background-position", "0 22px");
        $('#diente16b-a').css("background-repeat", "no-repeat");

        $('#f16').css("background", "#FFFFFF");
        $('#f16b-a').css("background", "#FFFFFF");
        $('#f16b-b').css("background", "#FFFFFF");

        $("#f16desact").attr("id", "f16");
        $("#f16b-adesact").attr("id", "f16b-a");
        $("#f16b-bdesact").attr("id", "f16b-b");
    }
);

$('#i15').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-15.png')");
        $('#diente15-a').css("background-position", "0 4px");
        $('#diente15-a').css("background-repeat", "no-repeat");

        $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-15b.png')");
        $('#diente15b-a').css("background-position", "0 17px");
        $('#diente15b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente15-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-15.png')");
        $('#diente15-a').css("background-position", "0 5px");
        $('#diente15-a').css("background-repeat", "no-repeat");

        $('#diente15b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-15b.png')");
        $('#diente15b-a').css("background-position", "0 17px");
        $('#diente15b-a').css("background-repeat", "no-repeat");
    }
);

$('#i14').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-14.png')");
        $('#diente14-a').css("background-repeat", "no-repeat");

        $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-14b.png')");
        $('#diente14b-a').css("background-position", "0 17px");
        $('#diente14b-a').css("background-repeat", "no-repeat");

        $('#furca14-a').css("background", "none");
        $('#furca14-b').css("background", "none");
        $('#f14b-a').css("background", "none");
        $('#f14b-b').css("background", "none");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente14-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-14.png')");
        $('#diente14-a').css("background-repeat", "no-repeat");

        $('#diente14b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-14b.png')");
        $('#diente14b-a').css("background-position", "0 17px");
        $('#diente14b-a').css("background-repeat", "no-repeat");

        $('#f14b-a').css("background", "#FFFFFF");
        $('#f14b-b').css("background", "#FFFFFF");
    }
);


$('#i13').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-13.png')");
        $('#diente13-a').css("background-position", "0 2px");
        $('#diente13-a').css("background-repeat", "no-repeat");

        $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-13b.png')");
        $('#diente13b-a').css("background-position", "0 16px");
        $('#diente13b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente13-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-13.png')");
        $('#diente13-a').css("background-position", "0 2px");
        $('#diente13-a').css("background-repeat", "no-repeat");

        $('#diente13b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-13b.png')");
        $('#diente13b-a').css("background-position", "0 16px");
        $('#diente13b-a').css("background-repeat", "no-repeat");
    }
);

$('#i12').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-12.png')");
        $('#diente12-a').css("background-position", "0 4px");
        $('#diente12-a').css("background-repeat", "no-repeat");

        $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-12b.png')");
        $('#diente12b-a').css("background-position", "0 18px");
        $('#diente12b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente12-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-12.png')");
        $('#diente12-a').css("background-position", "0 6px");
        $('#diente12-a').css("background-repeat", "no-repeat");

        $('#diente12b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-12b.png')");
        $('#diente12b-a').css("background-position", "0 18px");
        $('#diente12b-a').css("background-repeat", "no-repeat");
    }
);

$('#i11').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/implantes/periodontograma-dientes-arriba-tornillo-11.png')");
        $('#diente11-a').css("background-position", "bottom");
        $('#diente11-a').css("background-repeat", "no-repeat");

        $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/implantes/periodontograma-dientes-arriba-tornillo-11b.png')");
        $('#diente11b-a').css("background-position", "0 12px");
        $('#diente11b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente11-a').css("background", "url('/Content/images/dentista/tabla1/periodontograma-dientes-arriba-11.png')");
        $('#diente11-a').css("background-position", "bottom");
        $('#diente11-a').css("background-repeat", "no-repeat");

        $('#diente11b-a').css("background", "url('/Content/images/dentista/tabla3/periodontograma-dientes-arriba-11b.png')");
        $('#diente11b-a').css("background-position", "0 12px");
        $('#diente11b-a').css("background-repeat", "no-repeat");
    }
);

//FURCA
function f18Toggle0() {
    $('#f18').val("|f18,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i18').css({ "background": "#FFFFFF" });
    $('#furca18').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f18Toggle1() {
    $('#f18').val("|f18,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca18').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f18Toggle2() {
    $('#f18').val("|f18,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca18').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f18Toggle3() {
    $('#f18').val("|f18,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca18').css("background", "none");
}
$('#f18').toggle(
    function () {
        $('#f18').val("|f18,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i18').css({ "background": "#FFFFFF" });
        $('#furca18').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f18').val("|f18,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca18').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f18').val("|f18,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca18').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f18').val("|f18,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca18').css("background", "none");
    }
);

function f17Toggle0() {
    $('#f17').val("|f17,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i17').css({ "background": "#FFFFFF" });
    $('#furca17').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f17Toggle1() {
    $('#f17').val("|f17,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca17').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f17Toggle2() {
    $('#f17').val("|f17,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca17').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f17Toggle3() {
    $('#f17').val("|f17,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca17').css("background", "none");
}
$('#f17').toggle(
    function () {
        $('#f17').val("|f17,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i17').css({ "background": "#FFFFFF" });
        $('#furca17').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f17').val("|f17,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca17').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f17').val("|f17,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca17').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f17').val("|f17,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca17').css("background", "none");
    }
);

function f16Toggle0() {
    $('#f16').val("|f16,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i16').css({ "background": "#FFFFFF" });
    $('#furca16').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f16Toggle1() {
    $('#f16').val("|f16,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca16').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f16Toggle2() {
    $('#f16').val("|f16,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca16').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f16Toggle3() {
    $('#f16').val("|f16,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca16').css("background", "none");
}
$('#f16').toggle(
    function () {
        $('#f16').val("|f16,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i16').css({ "background": "#FFFFFF" });
        $('#furca16').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f16').val("|f16,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca16').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f16').val("|f16,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca16').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f16').val("|f16,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca16').css("background", "none");
    }
);

//TABLA 2
//TACHADOS
function d21ToggleON() {
    $('#d21').val("|d21,0");
    $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-21.png')");
    $('#diente21-a').css("background-position", "bottom");
    $('#diente21-a').css("background-repeat", "no-repeat");
    $('#m21').css("display", "none");
    $('#i21').css("display", "none");
    $('#f21').css("display", "none");
    $('#s21-a').css("display", "none");
    $('#s21-b').css("display", "none");
    $('#s21-c').css("display", "none");
    $('#p21-a').css("display", "none");
    $('#p21-b').css("display", "none");
    $('#p21-c').css("display", "none");
    $('#mg21-a').css("display", "none");
    $('#mg21-b').css("display", "none");
    $('#mg21-c').css("display", "none");
    $('#ps21-a').css("display", "none");
    $('#ps21-b').css("display", "none");
    $('#ps21-c').css("display", "none");
    $('#mg21-a').val('0');
    $('#mg21-b').val('0');
    $('#mg21-c').val('0');
    $('#ps21-a').val('0');
    $('#ps21-b').val('0');
    $('#ps21-c').val('0');

    $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-21b.png')");
    $('#diente21b-a').css("background-position", "0 11px");
    $('#diente21b-a').css("background-repeat", "no-repeat");
    $('#m21b').css("display", "none");
    $('#i21b').css("display", "none");
    $('#f21b').css("display", "none");
    $('#s21b-a').css("display", "none");
    $('#s21b-b').css("display", "none");
    $('#s21b-c').css("display", "none");
    $('#p21b-a').css("display", "none");
    $('#p21b-b').css("display", "none");
    $('#p21b-c').css("display", "none");
    $('#mg21b-a').css("display", "none");
    $('#mg21b-b').css("display", "none");
    $('#mg21b-c').css("display", "none");
    $('#ps21b-a').css("display", "none");
    $('#ps21b-b').css("display", "none");
    $('#ps21b-c').css("display", "none");
    $('#mg21b-a').val('0');
    $('#mg21b-b').val('0');
    $('#mg21b-c').val('0');
    $('#ps21b-a').val('0');
    $('#ps21b-b').val('0');
    $('#ps21b-c').val('0');
    $('#ae21').css("display", "none");
    $('#pi21').css("display", "none");



    //cargar21a();
    //cargar21b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d21ToggleOUT() {
    $('#d21').val("|d21,1");
    $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-21.png')");
    $('#diente21-a').css("background-position", "bottom");
    $('#diente21-a').css("background-repeat", "no-repeat");
    $('#m21').css("display", "inline");
    $('#i21').css("display", "block");
    $('#f21').css("display", "inline");
    $('#s21-a').css("display", "inline");
    $('#s21-b').css("display", "inline");
    $('#s21-c').css("display", "inline");
    $('#p21-a').css("display", "inline");
    $('#p21-b').css("display", "inline");
    $('#p21-c').css("display", "inline");
    $('#mg21-a').css("display", "inline");
    $('#mg21-b').css("display", "inline");
    $('#mg21-c').css("display", "inline");
    $('#ps21-a').css("display", "inline");
    $('#ps21-b').css("display", "inline");
    $('#ps21-c').css("display", "inline");

    $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-21b.png')");
    $('#diente21b-a').css("background-position", "0 11px");
    $('#diente21b-a').css("background-repeat", "no-repeat");
    $('#m21b').css("display", "inline");
    $('#i21b').css("display", "inline");
    $('#f21b').css("display", "inline");
    $('#s21b-a').css("display", "inline");
    $('#s21b-b').css("display", "inline");
    $('#s21b-c').css("display", "inline");
    $('#p21b-a').css("display", "inline");
    $('#p21b-b').css("display", "inline");
    $('#p21b-c').css("display", "inline");
    $('#mg21b-a').css("display", "inline");
    $('#mg21b-b').css("display", "inline");
    $('#mg21b-c').css("display", "inline");
    $('#ps21b-a').css("display", "inline");
    $('#ps21b-b').css("display", "inline");
    $('#ps21b-c').css("display", "inline");
    $('#ae21').css("display", "inline");
    $('#pi21').css("display", "inline");


    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d21').toggle(
    function () {
        $('#d21').val("|d21,0");
        $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-21.png')");
        $('#diente21-a').css("background-position", "bottom");
        $('#diente21-a').css("background-repeat", "no-repeat");
        $('#m21').css("display", "none");
        $('#i21').css("display", "none");
        $('#f21').css("display", "none");
        $('#s21-a').css("display", "none");
        $('#s21-b').css("display", "none");
        $('#s21-c').css("display", "none");
        $('#p21-a').css("display", "none");
        $('#p21-b').css("display", "none");
        $('#p21-c').css("display", "none");
        $('#mg21-a').css("display", "none");
        $('#mg21-b').css("display", "none");
        $('#mg21-c').css("display", "none");
        $('#ps21-a').css("display", "none");
        $('#ps21-b').css("display", "none");
        $('#ps21-c').css("display", "none");
        $('#mg21-a').val('0');
        $('#mg21-b').val('0');
        $('#mg21-c').val('0');
        $('#ps21-a').val('0');
        $('#ps21-b').val('0');
        $('#ps21-c').val('0');

        $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-21b.png')");
        $('#diente21b-a').css("background-position", "0 11px");
        $('#diente21b-a').css("background-repeat", "no-repeat");
        $('#m21b').css("display", "none");
        $('#i21b').css("display", "none");
        $('#f21b').css("display", "none");
        $('#s21b-a').css("display", "none");
        $('#s21b-b').css("display", "none");
        $('#s21b-c').css("display", "none");
        $('#p21b-a').css("display", "none");
        $('#p21b-b').css("display", "none");
        $('#p21b-c').css("display", "none");
        $('#mg21b-a').css("display", "none");
        $('#mg21b-b').css("display", "none");
        $('#mg21b-c').css("display", "none");
        $('#ps21b-a').css("display", "none");
        $('#ps21b-b').css("display", "none");
        $('#ps21b-c').css("display", "none");
        $('#mg21b-a').val('0');
        $('#mg21b-b').val('0');
        $('#mg21b-c').val('0');
        $('#ps21b-a').val('0');
        $('#ps21b-b').val('0');
        $('#ps21b-c').val('0');
        $('#ae21').css("display", "none");
        $('#pi21').css("display", "none");



        //cargar21a();
        //cargar21b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d21').val("|d21,1");
        $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-21.png')");
        $('#diente21-a').css("background-position", "bottom");
        $('#diente21-a').css("background-repeat", "no-repeat");
        $('#m21').css("display", "inline");
        $('#i21').css("display", "block");
        $('#f21').css("display", "inline");
        $('#s21-a').css("display", "inline");
        $('#s21-b').css("display", "inline");
        $('#s21-c').css("display", "inline");
        $('#p21-a').css("display", "inline");
        $('#p21-b').css("display", "inline");
        $('#p21-c').css("display", "inline");
        $('#mg21-a').css("display", "inline");
        $('#mg21-b').css("display", "inline");
        $('#mg21-c').css("display", "inline");
        $('#ps21-a').css("display", "inline");
        $('#ps21-b').css("display", "inline");
        $('#ps21-c').css("display", "inline");

        $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-21b.png')");
        $('#diente21b-a').css("background-position", "0 11px");
        $('#diente21b-a').css("background-repeat", "no-repeat");
        $('#m21b').css("display", "inline");
        $('#i21b').css("display", "inline");
        $('#f21b').css("display", "inline");
        $('#s21b-a').css("display", "inline");
        $('#s21b-b').css("display", "inline");
        $('#s21b-c').css("display", "inline");
        $('#p21b-a').css("display", "inline");
        $('#p21b-b').css("display", "inline");
        $('#p21b-c').css("display", "inline");
        $('#mg21b-a').css("display", "inline");
        $('#mg21b-b').css("display", "inline");
        $('#mg21b-c').css("display", "inline");
        $('#ps21b-a').css("display", "inline");
        $('#ps21b-b').css("display", "inline");
        $('#ps21b-c').css("display", "inline");
        $('#ae21').css("display", "inline");
        $('#pi21').css("display", "inline");


        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d22ToggleON() {
    $('#d22').val("|d22,0");
    $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-22.png')");
    $('#diente22-a').css("background-position", "0px 6px");
    $('#diente22-a').css("background-repeat", "no-repeat");
    $('#m22').css("display", "none");
    $('#i22').css("display", "none");
    $('#f22').css("display", "none");
    $('#s22-a').css("display", "none");
    $('#s22-b').css("display", "none");
    $('#s22-c').css("display", "none");
    $('#p22-a').css("display", "none");
    $('#p22-b').css("display", "none");
    $('#p22-c').css("display", "none");
    $('#mg22-a').css("display", "none");
    $('#mg22-b').css("display", "none");
    $('#mg22-c').css("display", "none");
    $('#ps22-a').css("display", "none");
    $('#ps22-b').css("display", "none");
    $('#ps22-c').css("display", "none");
    $('#mg22-a').val('0');
    $('#mg22-b').val('0');
    $('#mg22-c').val('0');
    $('#ps22-a').val('0');
    $('#ps22-b').val('0');
    $('#ps22-c').val('0');

    $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-22b.png')");
    $('#diente22b-a').css("background-position", "0px 17px");
    $('#diente22b-a').css("background-repeat", "no-repeat");
    $('#m22b').css("display", "none");
    $('#i22b').css("display", "none");
    $('#f22b').css("display", "none");
    $('#s22b-a').css("display", "none");
    $('#s22b-b').css("display", "none");
    $('#s22b-c').css("display", "none");
    $('#p22b-a').css("display", "none");
    $('#p22b-b').css("display", "none");
    $('#p22b-c').css("display", "none");
    $('#mg22b-a').css("display", "none");
    $('#mg22b-b').css("display", "none");
    $('#mg22b-c').css("display", "none");
    $('#ps22b-a').css("display", "none");
    $('#ps22b-b').css("display", "none");
    $('#ps22b-c').css("display", "none");
    $('#mg22b-a').val('0');
    $('#mg22b-b').val('0');
    $('#mg22b-c').val('0');
    $('#ps22b-a').val('0');
    $('#ps22b-b').val('0');
    $('#ps22b-c').val('0');
    $('#ae22').css("display", "none");
    $('#pi22').css("display", "none");



    //cargar22a();
    //cargar22b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d22ToggleOUT() {
    $('#d22').val("|d22,1");
    $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-22.png')");
    $('#diente22-a').css("background-position", "0px 6px");
    $('#diente22-a').css("background-repeat", "no-repeat");
    $('#m22').css("display", "inline");
    $('#i22').css("display", "block");
    $('#f22').css("display", "inline");
    $('#s22-a').css("display", "inline");
    $('#s22-b').css("display", "inline");
    $('#s22-c').css("display", "inline");
    $('#p22-a').css("display", "inline");
    $('#p22-b').css("display", "inline");
    $('#p22-c').css("display", "inline");
    $('#mg22-a').css("display", "inline");
    $('#mg22-b').css("display", "inline");
    $('#mg22-c').css("display", "inline");
    $('#ps22-a').css("display", "inline");
    $('#ps22-b').css("display", "inline");
    $('#ps22-c').css("display", "inline");

    $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-22b.png')");
    $('#diente22b-a').css("background-position", "0px 17px");
    $('#diente22b-a').css("background-repeat", "no-repeat");
    $('#m22b').css("display", "inline");
    $('#i22b').css("display", "inline");
    $('#f22b').css("display", "inline");
    $('#s22b-a').css("display", "inline");
    $('#s22b-b').css("display", "inline");
    $('#s22b-c').css("display", "inline");
    $('#p22b-a').css("display", "inline");
    $('#p22b-b').css("display", "inline");
    $('#p22b-c').css("display", "inline");
    $('#mg22b-a').css("display", "inline");
    $('#mg22b-b').css("display", "inline");
    $('#mg22b-c').css("display", "inline");
    $('#ps22b-a').css("display", "inline");
    $('#ps22b-b').css("display", "inline");
    $('#ps22b-c').css("display", "inline");
    $('#ae22').css("display", "inline");
    $('#pi22').css("display", "inline");


    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d22').toggle(
    function () {
        $('#d22').val("|d22,0");
        $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-22.png')");
        $('#diente22-a').css("background-position", "0px 6px");
        $('#diente22-a').css("background-repeat", "no-repeat");
        $('#m22').css("display", "none");
        $('#i22').css("display", "none");
        $('#f22').css("display", "none");
        $('#s22-a').css("display", "none");
        $('#s22-b').css("display", "none");
        $('#s22-c').css("display", "none");
        $('#p22-a').css("display", "none");
        $('#p22-b').css("display", "none");
        $('#p22-c').css("display", "none");
        $('#mg22-a').css("display", "none");
        $('#mg22-b').css("display", "none");
        $('#mg22-c').css("display", "none");
        $('#ps22-a').css("display", "none");
        $('#ps22-b').css("display", "none");
        $('#ps22-c').css("display", "none");
        $('#mg22-a').val('0');
        $('#mg22-b').val('0');
        $('#mg22-c').val('0');
        $('#ps22-a').val('0');
        $('#ps22-b').val('0');
        $('#ps22-c').val('0');

        $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-22b.png')");
        $('#diente22b-a').css("background-position", "0px 17px");
        $('#diente22b-a').css("background-repeat", "no-repeat");
        $('#m22b').css("display", "none");
        $('#i22b').css("display", "none");
        $('#f22b').css("display", "none");
        $('#s22b-a').css("display", "none");
        $('#s22b-b').css("display", "none");
        $('#s22b-c').css("display", "none");
        $('#p22b-a').css("display", "none");
        $('#p22b-b').css("display", "none");
        $('#p22b-c').css("display", "none");
        $('#mg22b-a').css("display", "none");
        $('#mg22b-b').css("display", "none");
        $('#mg22b-c').css("display", "none");
        $('#ps22b-a').css("display", "none");
        $('#ps22b-b').css("display", "none");
        $('#ps22b-c').css("display", "none");
        $('#mg22b-a').val('0');
        $('#mg22b-b').val('0');
        $('#mg22b-c').val('0');
        $('#ps22b-a').val('0');
        $('#ps22b-b').val('0');
        $('#ps22b-c').val('0');
        $('#ae22').css("display", "none");
        $('#pi22').css("display", "none");



        //cargar22a();
        //cargar22b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d22').val("|d22,1");
        $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-22.png')");
        $('#diente22-a').css("background-position", "0px 6px");
        $('#diente22-a').css("background-repeat", "no-repeat");
        $('#m22').css("display", "inline");
        $('#i22').css("display", "block");
        $('#f22').css("display", "inline");
        $('#s22-a').css("display", "inline");
        $('#s22-b').css("display", "inline");
        $('#s22-c').css("display", "inline");
        $('#p22-a').css("display", "inline");
        $('#p22-b').css("display", "inline");
        $('#p22-c').css("display", "inline");
        $('#mg22-a').css("display", "inline");
        $('#mg22-b').css("display", "inline");
        $('#mg22-c').css("display", "inline");
        $('#ps22-a').css("display", "inline");
        $('#ps22-b').css("display", "inline");
        $('#ps22-c').css("display", "inline");

        $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-22b.png')");
        $('#diente22b-a').css("background-position", "0px 17px");
        $('#diente22b-a').css("background-repeat", "no-repeat");
        $('#m22b').css("display", "inline");
        $('#i22b').css("display", "inline");
        $('#f22b').css("display", "inline");
        $('#s22b-a').css("display", "inline");
        $('#s22b-b').css("display", "inline");
        $('#s22b-c').css("display", "inline");
        $('#p22b-a').css("display", "inline");
        $('#p22b-b').css("display", "inline");
        $('#p22b-c').css("display", "inline");
        $('#mg22b-a').css("display", "inline");
        $('#mg22b-b').css("display", "inline");
        $('#mg22b-c').css("display", "inline");
        $('#ps22b-a').css("display", "inline");
        $('#ps22b-b').css("display", "inline");
        $('#ps22b-c').css("display", "inline");
        $('#ae22').css("display", "inline");
        $('#pi22').css("display", "inline");


        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d23ToggleON() {
    $('#d23').val("|d23,0");
    $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-23.png')");
    $('#diente23-a').css("background-position", "top");
    $('#diente23-a').css("background-repeat", "no-repeat");
    $('#m23').css("display", "none");
    $('#i23').css("display", "none");
    $('#f23').css("display", "none");
    $('#s23-a').css("display", "none");
    $('#s23-b').css("display", "none");
    $('#s23-c').css("display", "none");
    $('#p23-a').css("display", "none");
    $('#p23-b').css("display", "none");
    $('#p23-c').css("display", "none");
    $('#mg23-a').css("display", "none");
    $('#mg23-b').css("display", "none");
    $('#mg23-c').css("display", "none");
    $('#ps23-a').css("display", "none");
    $('#ps23-b').css("display", "none");
    $('#ps23-c').css("display", "none");
    $('#mg23-a').val('0');
    $('#mg23-b').val('0');
    $('#mg23-c').val('0');
    $('#ps23-a').val('0');
    $('#ps23-b').val('0');
    $('#ps23-c').val('0');

    $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-23b.png')");
    $('#diente23b-a').css("background-position", "0 15px");
    $('#diente23b-a').css("background-repeat", "no-repeat");
    $('#m23b').css("display", "none");
    $('#i23b').css("display", "none");
    $('#f23b').css("display", "none");
    $('#s23b-a').css("display", "none");
    $('#s23b-b').css("display", "none");
    $('#s23b-c').css("display", "none");
    $('#p23b-a').css("display", "none");
    $('#p23b-b').css("display", "none");
    $('#p23b-c').css("display", "none");
    $('#mg23b-a').css("display", "none");
    $('#mg23b-b').css("display", "none");
    $('#mg23b-c').css("display", "none");
    $('#ps23b-a').css("display", "none");
    $('#ps23b-b').css("display", "none");
    $('#ps23b-c').css("display", "none");
    $('#mg23b-a').val('0');
    $('#mg23b-b').val('0');
    $('#mg23b-c').val('0');
    $('#ps23b-a').val('0');
    $('#ps23b-b').val('0');
    $('#ps23b-c').val('0');
    $('#ae23').css("display", "none");
    $('#pi23').css("display", "none");



    //cargar23a();
    //cargar23b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d23ToggleOUT() {
    $('#d23').val("|d23,1");
    $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-23.png')");
    $('#diente23-a').css("background-position", "top");
    $('#diente23-a').css("background-repeat", "no-repeat");
    $('#m23').css("display", "inline");
    $('#i23').css("display", "block");
    $('#f23').css("display", "inline");
    $('#s23-a').css("display", "inline");
    $('#s23-b').css("display", "inline");
    $('#s23-c').css("display", "inline");
    $('#p23-a').css("display", "inline");
    $('#p23-b').css("display", "inline");
    $('#p23-c').css("display", "inline");
    $('#mg23-a').css("display", "inline");
    $('#mg23-b').css("display", "inline");
    $('#mg23-c').css("display", "inline");
    $('#ps23-a').css("display", "inline");
    $('#ps23-b').css("display", "inline");
    $('#ps23-c').css("display", "inline");

    $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-23b.png')");
    $('#diente23b-a').css("background-position", "0 15px");
    $('#diente23b-a').css("background-repeat", "no-repeat");
    $('#m23b').css("display", "inline");
    $('#i23b').css("display", "inline");
    $('#f23b').css("display", "inline");
    $('#s23b-a').css("display", "inline");
    $('#s23b-b').css("display", "inline");
    $('#s23b-c').css("display", "inline");
    $('#p23b-a').css("display", "inline");
    $('#p23b-b').css("display", "inline");
    $('#p23b-c').css("display", "inline");
    $('#mg23b-a').css("display", "inline");
    $('#mg23b-b').css("display", "inline");
    $('#mg23b-c').css("display", "inline");
    $('#ps23b-a').css("display", "inline");
    $('#ps23b-b').css("display", "inline");
    $('#ps23b-c').css("display", "inline");
    $('#ae23').css("display", "inline");
    $('#pi23').css("display", "inline");

    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d23').toggle(
    function () {
        $('#d23').val("|d23,0");
        $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-23.png')");
        $('#diente23-a').css("background-position", "top");
        $('#diente23-a').css("background-repeat", "no-repeat");
        $('#m23').css("display", "none");
        $('#i23').css("display", "none");
        $('#f23').css("display", "none");
        $('#s23-a').css("display", "none");
        $('#s23-b').css("display", "none");
        $('#s23-c').css("display", "none");
        $('#p23-a').css("display", "none");
        $('#p23-b').css("display", "none");
        $('#p23-c').css("display", "none");
        $('#mg23-a').css("display", "none");
        $('#mg23-b').css("display", "none");
        $('#mg23-c').css("display", "none");
        $('#ps23-a').css("display", "none");
        $('#ps23-b').css("display", "none");
        $('#ps23-c').css("display", "none");
        $('#mg23-a').val('0');
        $('#mg23-b').val('0');
        $('#mg23-c').val('0');
        $('#ps23-a').val('0');
        $('#ps23-b').val('0');
        $('#ps23-c').val('0');

        $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-23b.png')");
        $('#diente23b-a').css("background-position", "0 15px");
        $('#diente23b-a').css("background-repeat", "no-repeat");
        $('#m23b').css("display", "none");
        $('#i23b').css("display", "none");
        $('#f23b').css("display", "none");
        $('#s23b-a').css("display", "none");
        $('#s23b-b').css("display", "none");
        $('#s23b-c').css("display", "none");
        $('#p23b-a').css("display", "none");
        $('#p23b-b').css("display", "none");
        $('#p23b-c').css("display", "none");
        $('#mg23b-a').css("display", "none");
        $('#mg23b-b').css("display", "none");
        $('#mg23b-c').css("display", "none");
        $('#ps23b-a').css("display", "none");
        $('#ps23b-b').css("display", "none");
        $('#ps23b-c').css("display", "none");
        $('#mg23b-a').val('0');
        $('#mg23b-b').val('0');
        $('#mg23b-c').val('0');
        $('#ps23b-a').val('0');
        $('#ps23b-b').val('0');
        $('#ps23b-c').val('0');
        $('#ae23').css("display", "none");
        $('#pi23').css("display", "none");



        //cargar23a();
        //cargar23b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d23').val("|d23,1");
        $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-23.png')");
        $('#diente23-a').css("background-position", "top");
        $('#diente23-a').css("background-repeat", "no-repeat");
        $('#m23').css("display", "inline");
        $('#i23').css("display", "block");
        $('#f23').css("display", "inline");
        $('#s23-a').css("display", "inline");
        $('#s23-b').css("display", "inline");
        $('#s23-c').css("display", "inline");
        $('#p23-a').css("display", "inline");
        $('#p23-b').css("display", "inline");
        $('#p23-c').css("display", "inline");
        $('#mg23-a').css("display", "inline");
        $('#mg23-b').css("display", "inline");
        $('#mg23-c').css("display", "inline");
        $('#ps23-a').css("display", "inline");
        $('#ps23-b').css("display", "inline");
        $('#ps23-c').css("display", "inline");

        $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-23b.png')");
        $('#diente23b-a').css("background-position", "0 15px");
        $('#diente23b-a').css("background-repeat", "no-repeat");
        $('#m23b').css("display", "inline");
        $('#i23b').css("display", "inline");
        $('#f23b').css("display", "inline");
        $('#s23b-a').css("display", "inline");
        $('#s23b-b').css("display", "inline");
        $('#s23b-c').css("display", "inline");
        $('#p23b-a').css("display", "inline");
        $('#p23b-b').css("display", "inline");
        $('#p23b-c').css("display", "inline");
        $('#mg23b-a').css("display", "inline");
        $('#mg23b-b').css("display", "inline");
        $('#mg23b-c').css("display", "inline");
        $('#ps23b-a').css("display", "inline");
        $('#ps23b-b').css("display", "inline");
        $('#ps23b-c').css("display", "inline");
        $('#ae23').css("display", "inline");
        $('#pi23').css("display", "inline");

        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d24ToggleON() {
    $('#d24').val("|d24,0");
    $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-24.png')");
    /*$('#diente24-a').css("background-position","0");*/
    $('#diente24-a').css("background-repeat", "no-repeat");
    $('#m24').css("display", "none");
    $('#i24').css("display", "none");
    $('#f24').css("display", "none");
    $('#s24-a').css("display", "none");
    $('#s24-b').css("display", "none");
    $('#s24-c').css("display", "none");
    $('#p24-a').css("display", "none");
    $('#p24-b').css("display", "none");
    $('#p24-c').css("display", "none");
    $('#mg24-a').css("display", "none");
    $('#mg24-b').css("display", "none");
    $('#mg24-c').css("display", "none");
    $('#ps24-a').css("display", "none");
    $('#ps24-b').css("display", "none");
    $('#ps24-c').css("display", "none");
    $('#mg24-a').val('0');
    $('#mg24-b').val('0');
    $('#mg24-c').val('0');
    $('#ps24-a').val('0');
    $('#ps24-b').val('0');
    $('#ps24-c').val('0');

    $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-24b.png')");
    $('#diente24b-a').css("background-position", "0 16px");
    $('#diente24b-a').css("background-repeat", "no-repeat");
    $('#m24b').css("display", "none");
    $('#i24b').css("display", "none");
    $('#f24b').css("display", "none");
    $('#s24b-a').css("display", "none");
    $('#s24b-b').css("display", "none");
    $('#s24b-c').css("display", "none");
    $('#p24b-a').css("display", "none");
    $('#p24b-b').css("display", "none");
    $('#p24b-c').css("display", "none");
    $('#mg24b-a').css("display", "none");
    $('#mg24b-b').css("display", "none");
    $('#mg24b-c').css("display", "none");
    $('#ps24b-a').css("display", "none");
    $('#ps24b-b').css("display", "none");
    $('#ps24b-c').css("display", "none");
    $('#mg24b-a').val('0');
    $('#mg24b-b').val('0');
    $('#mg24b-c').val('0');
    $('#ps24b-a').val('0');
    $('#ps24b-b').val('0');
    $('#ps24b-c').val('0');
    $('#furca24-a').css("display", "none");
    $('#furca24-b').css("display", "none");
    $('#f24b-a').css("display", "none");
    $('#f24b-b').css("display", "none");
    $('#ae24').css("display", "none");
    $('#pi24').css("display", "none");


    //cargar24a();
    //cargar24b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d24ToggleOUT() {
    $('#d24').val("|d24,1");
    $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-24.png')");
    $('#diente24-a').css("background-position", "0");
    $('#diente24-a').css("background-repeat", "no-repeat");
    $('#m24').css("display", "inline");
    $('#i24').css("display", "block");
    $('#f24').css("display", "inline");
    $('#s24-a').css("display", "inline");
    $('#s24-b').css("display", "inline");
    $('#s24-c').css("display", "inline");
    $('#p24-a').css("display", "inline");
    $('#p24-b').css("display", "inline");
    $('#p24-c').css("display", "inline");
    $('#mg24-a').css("display", "inline");
    $('#mg24-b').css("display", "inline");
    $('#mg24-c').css("display", "inline");
    $('#ps24-a').css("display", "inline");
    $('#ps24-b').css("display", "inline");
    $('#ps24-c').css("display", "inline");

    $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-24b.png')");
    $('#diente24b-a').css("background-position", "0 16px");
    $('#diente24b-a').css("background-repeat", "no-repeat");
    $('#m24b').css("display", "inline");
    $('#i24b').css("display", "inline");
    $('#f24b').css("display", "inline");
    $('#s24b-a').css("display", "inline");
    $('#s24b-b').css("display", "inline");
    $('#s24b-c').css("display", "inline");
    $('#p24b-a').css("display", "inline");
    $('#p24b-b').css("display", "inline");
    $('#p24b-c').css("display", "inline");
    $('#mg24b-a').css("display", "inline");
    $('#mg24b-b').css("display", "inline");
    $('#mg24b-c').css("display", "inline");
    $('#ps24b-a').css("display", "inline");
    $('#ps24b-b').css("display", "inline");
    $('#ps24b-c').css("display", "inline");
    $('#furca24-b').css("display", "block");
    $('#furca24-a').css("display", "block");
    $('#f24b-a').css("display", "inline");
    $('#f24b-b').css("display", "inline");
    $('#ae24').css("display", "inline");
    $('#pi24').css("display", "inline");

    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d24').toggle(
    function () {
        $('#d24').val("|d24,0");
        $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-24.png')");
        /*$('#diente24-a').css("background-position","0");*/
        $('#diente24-a').css("background-repeat", "no-repeat");
        $('#m24').css("display", "none");
        $('#i24').css("display", "none");
        $('#f24').css("display", "none");
        $('#s24-a').css("display", "none");
        $('#s24-b').css("display", "none");
        $('#s24-c').css("display", "none");
        $('#p24-a').css("display", "none");
        $('#p24-b').css("display", "none");
        $('#p24-c').css("display", "none");
        $('#mg24-a').css("display", "none");
        $('#mg24-b').css("display", "none");
        $('#mg24-c').css("display", "none");
        $('#ps24-a').css("display", "none");
        $('#ps24-b').css("display", "none");
        $('#ps24-c').css("display", "none");
        $('#mg24-a').val('0');
        $('#mg24-b').val('0');
        $('#mg24-c').val('0');
        $('#ps24-a').val('0');
        $('#ps24-b').val('0');
        $('#ps24-c').val('0');

        $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-24b.png')");
        $('#diente24b-a').css("background-position", "0 16px");
        $('#diente24b-a').css("background-repeat", "no-repeat");
        $('#m24b').css("display", "none");
        $('#i24b').css("display", "none");
        $('#f24b').css("display", "none");
        $('#s24b-a').css("display", "none");
        $('#s24b-b').css("display", "none");
        $('#s24b-c').css("display", "none");
        $('#p24b-a').css("display", "none");
        $('#p24b-b').css("display", "none");
        $('#p24b-c').css("display", "none");
        $('#mg24b-a').css("display", "none");
        $('#mg24b-b').css("display", "none");
        $('#mg24b-c').css("display", "none");
        $('#ps24b-a').css("display", "none");
        $('#ps24b-b').css("display", "none");
        $('#ps24b-c').css("display", "none");
        $('#mg24b-a').val('0');
        $('#mg24b-b').val('0');
        $('#mg24b-c').val('0');
        $('#ps24b-a').val('0');
        $('#ps24b-b').val('0');
        $('#ps24b-c').val('0');
        $('#furca24-a').css("display", "none");
        $('#furca24-b').css("display", "none");
        $('#f24b-a').css("display", "none");
        $('#f24b-b').css("display", "none");
        $('#ae24').css("display", "none");
        $('#pi24').css("display", "none");


        //cargar24a();
        //cargar24b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d24').val("|d24,1");
        $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-24.png')");
        $('#diente24-a').css("background-position", "0");
        $('#diente24-a').css("background-repeat", "no-repeat");
        $('#m24').css("display", "inline");
        $('#i24').css("display", "block");
        $('#f24').css("display", "inline");
        $('#s24-a').css("display", "inline");
        $('#s24-b').css("display", "inline");
        $('#s24-c').css("display", "inline");
        $('#p24-a').css("display", "inline");
        $('#p24-b').css("display", "inline");
        $('#p24-c').css("display", "inline");
        $('#mg24-a').css("display", "inline");
        $('#mg24-b').css("display", "inline");
        $('#mg24-c').css("display", "inline");
        $('#ps24-a').css("display", "inline");
        $('#ps24-b').css("display", "inline");
        $('#ps24-c').css("display", "inline");

        $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-24b.png')");
        $('#diente24b-a').css("background-position", "0 16px");
        $('#diente24b-a').css("background-repeat", "no-repeat");
        $('#m24b').css("display", "inline");
        $('#i24b').css("display", "inline");
        $('#f24b').css("display", "inline");
        $('#s24b-a').css("display", "inline");
        $('#s24b-b').css("display", "inline");
        $('#s24b-c').css("display", "inline");
        $('#p24b-a').css("display", "inline");
        $('#p24b-b').css("display", "inline");
        $('#p24b-c').css("display", "inline");
        $('#mg24b-a').css("display", "inline");
        $('#mg24b-b').css("display", "inline");
        $('#mg24b-c').css("display", "inline");
        $('#ps24b-a').css("display", "inline");
        $('#ps24b-b').css("display", "inline");
        $('#ps24b-c').css("display", "inline");
        $('#furca24-b').css("display", "block");
        $('#furca24-a').css("display", "block");
        $('#f24b-a').css("display", "inline");
        $('#f24b-b').css("display", "inline");
        $('#ae24').css("display", "inline");
        $('#pi24').css("display", "inline");

        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d25ToggleON() {
    $('#d25').val("|d25,0");
    $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-25.png')");
    $('#diente25-a').css("background-position", "0 5px");
    $('#diente25-a').css("background-repeat", "no-repeat");
    $('#m25').css("display", "none");
    $('#i25').css("display", "none");
    $('#f25').css("display", "none");
    $('#s25-a').css("display", "none");
    $('#s25-b').css("display", "none");
    $('#s25-c').css("display", "none");
    $('#p25-a').css("display", "none");
    $('#p25-b').css("display", "none");
    $('#p25-c').css("display", "none");
    $('#mg25-a').css("display", "none");
    $('#mg25-b').css("display", "none");
    $('#mg25-c').css("display", "none");
    $('#ps25-a').css("display", "none");
    $('#ps25-b').css("display", "none");
    $('#ps25-c').css("display", "none");
    $('#mg25-a').val('0');
    $('#mg25-b').val('0');
    $('#mg25-c').val('0');
    $('#ps25-a').val('0');
    $('#ps25-b').val('0');
    $('#ps25-c').val('0');

    $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-25b.png')");
    $('#diente25b-a').css("background-position", "0 16px");
    $('#diente25b-a').css("background-repeat", "no-repeat");
    $('#m25b').css("display", "none");
    $('#i25b').css("display", "none");
    $('#f25b').css("display", "none");
    $('#s25b-a').css("display", "none");
    $('#s25b-b').css("display", "none");
    $('#s25b-c').css("display", "none");
    $('#p25b-a').css("display", "none");
    $('#p25b-b').css("display", "none");
    $('#p25b-c').css("display", "none");
    $('#mg25b-a').css("display", "none");
    $('#mg25b-b').css("display", "none");
    $('#mg25b-c').css("display", "none");
    $('#ps25b-a').css("display", "none");
    $('#ps25b-b').css("display", "none");
    $('#ps25b-c').css("display", "none");
    $('#mg25b-a').val('0');
    $('#mg25b-b').val('0');
    $('#mg25b-c').val('0');
    $('#ps25b-a').val('0');
    $('#ps25b-b').val('0');
    $('#ps25b-c').val('0');
    $('#ae25').css("display", "none");
    $('#pi25').css("display", "none");



    //cargar25a();
    //cargar25b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d25ToggleOUT() {
    $('#d25').val("|d25,1");
    $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-25.png')");
    $('#diente25-a').css("background-position", "0 5px");
    $('#diente25-a').css("background-repeat", "no-repeat");
    $('#m25').css("display", "inline");
    $('#i25').css("display", "block");
    $('#f25').css("display", "inline");
    $('#s25-a').css("display", "inline");
    $('#s25-b').css("display", "inline");
    $('#s25-c').css("display", "inline");
    $('#p25-a').css("display", "inline");
    $('#p25-b').css("display", "inline");
    $('#p25-c').css("display", "inline");
    $('#mg25-a').css("display", "inline");
    $('#mg25-b').css("display", "inline");
    $('#mg25-c').css("display", "inline");
    $('#ps25-a').css("display", "inline");
    $('#ps25-b').css("display", "inline");
    $('#ps25-c').css("display", "inline");

    $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-25b.png')");
    $('#diente25b-a').css("background-position", "0 16px");
    $('#diente25b-a').css("background-repeat", "no-repeat");
    $('#m25b').css("display", "inline");
    $('#i25b').css("display", "inline");
    $('#f25b').css("display", "inline");
    $('#s25b-a').css("display", "inline");
    $('#s25b-b').css("display", "inline");
    $('#s25b-c').css("display", "inline");
    $('#p25b-a').css("display", "inline");
    $('#p25b-b').css("display", "inline");
    $('#p25b-c').css("display", "inline");
    $('#mg25b-a').css("display", "inline");
    $('#mg25b-b').css("display", "inline");
    $('#mg25b-c').css("display", "inline");
    $('#ps25b-a').css("display", "inline");
    $('#ps25b-b').css("display", "inline");
    $('#ps25b-c').css("display", "inline");
    $('#ae25').css("display", "inline");
    $('#pi25').css("display", "inline");


    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d25').toggle(
    function () {
        $('#d25').val("|d25,0");
        $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-25.png')");
        $('#diente25-a').css("background-position", "0 5px");
        $('#diente25-a').css("background-repeat", "no-repeat");
        $('#m25').css("display", "none");
        $('#i25').css("display", "none");
        $('#f25').css("display", "none");
        $('#s25-a').css("display", "none");
        $('#s25-b').css("display", "none");
        $('#s25-c').css("display", "none");
        $('#p25-a').css("display", "none");
        $('#p25-b').css("display", "none");
        $('#p25-c').css("display", "none");
        $('#mg25-a').css("display", "none");
        $('#mg25-b').css("display", "none");
        $('#mg25-c').css("display", "none");
        $('#ps25-a').css("display", "none");
        $('#ps25-b').css("display", "none");
        $('#ps25-c').css("display", "none");
        $('#mg25-a').val('0');
        $('#mg25-b').val('0');
        $('#mg25-c').val('0');
        $('#ps25-a').val('0');
        $('#ps25-b').val('0');
        $('#ps25-c').val('0');

        $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-25b.png')");
        $('#diente25b-a').css("background-position", "0 16px");
        $('#diente25b-a').css("background-repeat", "no-repeat");
        $('#m25b').css("display", "none");
        $('#i25b').css("display", "none");
        $('#f25b').css("display", "none");
        $('#s25b-a').css("display", "none");
        $('#s25b-b').css("display", "none");
        $('#s25b-c').css("display", "none");
        $('#p25b-a').css("display", "none");
        $('#p25b-b').css("display", "none");
        $('#p25b-c').css("display", "none");
        $('#mg25b-a').css("display", "none");
        $('#mg25b-b').css("display", "none");
        $('#mg25b-c').css("display", "none");
        $('#ps25b-a').css("display", "none");
        $('#ps25b-b').css("display", "none");
        $('#ps25b-c').css("display", "none");
        $('#mg25b-a').val('0');
        $('#mg25b-b').val('0');
        $('#mg25b-c').val('0');
        $('#ps25b-a').val('0');
        $('#ps25b-b').val('0');
        $('#ps25b-c').val('0');
        $('#ae25').css("display", "none");
        $('#pi25').css("display", "none");



        //cargar25a();
        //cargar25b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d25').val("|d25,1");
        $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-25.png')");
        $('#diente25-a').css("background-position", "0 5px");
        $('#diente25-a').css("background-repeat", "no-repeat");
        $('#m25').css("display", "inline");
        $('#i25').css("display", "block");
        $('#f25').css("display", "inline");
        $('#s25-a').css("display", "inline");
        $('#s25-b').css("display", "inline");
        $('#s25-c').css("display", "inline");
        $('#p25-a').css("display", "inline");
        $('#p25-b').css("display", "inline");
        $('#p25-c').css("display", "inline");
        $('#mg25-a').css("display", "inline");
        $('#mg25-b').css("display", "inline");
        $('#mg25-c').css("display", "inline");
        $('#ps25-a').css("display", "inline");
        $('#ps25-b').css("display", "inline");
        $('#ps25-c').css("display", "inline");

        $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-25b.png')");
        $('#diente25b-a').css("background-position", "0 16px");
        $('#diente25b-a').css("background-repeat", "no-repeat");
        $('#m25b').css("display", "inline");
        $('#i25b').css("display", "inline");
        $('#f25b').css("display", "inline");
        $('#s25b-a').css("display", "inline");
        $('#s25b-b').css("display", "inline");
        $('#s25b-c').css("display", "inline");
        $('#p25b-a').css("display", "inline");
        $('#p25b-b').css("display", "inline");
        $('#p25b-c').css("display", "inline");
        $('#mg25b-a').css("display", "inline");
        $('#mg25b-b').css("display", "inline");
        $('#mg25b-c').css("display", "inline");
        $('#ps25b-a').css("display", "inline");
        $('#ps25b-b').css("display", "inline");
        $('#ps25b-c').css("display", "inline");
        $('#ae25').css("display", "inline");
        $('#pi25').css("display", "inline");


        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d26ToggleON() {
    $('#d26').val("|d26,0");
    $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-26.png')");
    $('#diente26-a').css("background-position", "0 4px");
    $('#diente26-a').css("background-repeat", "no-repeat");
    $('#m26').css("display", "none");
    $('#i26').css("display", "none");
    $('#f26').css("display", "none");
    $('#s26-a').css("display", "none");
    $('#s26-b').css("display", "none");
    $('#s26-c').css("display", "none");
    $('#p26-a').css("display", "none");
    $('#p26-b').css("display", "none");
    $('#p26-c').css("display", "none");
    $('#mg26-a').css("display", "none");
    $('#mg26-b').css("display", "none");
    $('#mg26-c').css("display", "none");
    $('#ps26-a').css("display", "none");
    $('#ps26-b').css("display", "none");
    $('#ps26-c').css("display", "none");
    /*$('#furca26').css("background","none");*/
    $('#mg26-a').val('0');
    $('#mg26-b').val('0');
    $('#mg26-c').val('0');
    $('#ps26-a').val('0');
    $('#ps26-b').val('0');
    $('#ps26-c').val('0');

    $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-26b.png')");
    $('#diente26b-a').css("background-position", "0 21px");
    $('#diente26b-a').css("background-repeat", "no-repeat");
    $('#m26b').css("display", "none");
    $('#i26b').css("display", "none");
    $('#f26b').css("display", "none");
    $('#s26b-a').css("display", "none");
    $('#s26b-b').css("display", "none");
    $('#s26b-c').css("display", "none");
    $('#p26b-a').css("display", "none");
    $('#p26b-b').css("display", "none");
    $('#p26b-c').css("display", "none");
    $('#mg26b-a').css("display", "none");
    $('#mg26b-b').css("display", "none");
    $('#mg26b-c').css("display", "none");
    $('#ps26b-a').css("display", "none");
    $('#ps26b-b').css("display", "none");
    $('#ps26b-c').css("display", "none");
    $('#furca26b').css("background", "none");
    $('#mg26b-a').val('0');
    $('#mg26b-b').val('0');
    $('#mg26b-c').val('0');
    $('#ps26b-a').val('0');
    $('#ps26b-b').val('0');
    $('#ps26b-c').val('0');
    $('#furca26').css("display", "none");
    $('#furca26-a').css("display", "none");
    $('#furca26-b').css("display", "none");
    $('#f26b-a').css("display", "none");
    $('#f26b-b').css("display", "none");
    $('#ae26').css("display", "none");
    $('#pi26').css("display", "none");



    //cargar26a();
    //cargar26b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d26ToggleOUT() {
    $('#d26').val("|d26,1");
    $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-26.png')");
    $('#diente26-a').css("background-position", "0 4px");
    $('#diente26-a').css("background-repeat", "no-repeat");
    $('#m26').css("display", "inline");
    $('#i26').css("display", "block");
    $('#f26').css("display", "inline");
    $('#s26-a').css("display", "inline");
    $('#s26-b').css("display", "inline");
    $('#s26-c').css("display", "inline");
    $('#p26-a').css("display", "inline");
    $('#p26-b').css("display", "inline");
    $('#p26-c').css("display", "inline");
    $('#mg26-a').css("display", "inline");
    $('#mg26-b').css("display", "inline");
    $('#mg26-c').css("display", "inline");
    $('#ps26-a').css("display", "inline");
    $('#ps26-b').css("display", "inline");
    $('#ps26-c').css("display", "inline");

    $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-26b.png')");
    $('#diente26b-a').css("background-position", "0 21px");
    $('#diente26b-a').css("background-repeat", "no-repeat");
    $('#m26b').css("display", "inline");
    $('#i26b').css("display", "inline");
    $('#f26b').css("display", "inline");
    $('#s26b-a').css("display", "inline");
    $('#s26b-b').css("display", "inline");
    $('#s26b-c').css("display", "inline");
    $('#p26b-a').css("display", "inline");
    $('#p26b-b').css("display", "inline");
    $('#p26b-c').css("display", "inline");
    $('#mg26b-a').css("display", "inline");
    $('#mg26b-b').css("display", "inline");
    $('#mg26b-c').css("display", "inline");
    $('#ps26b-a').css("display", "inline");
    $('#ps26b-b').css("display", "inline");
    $('#ps26b-c').css("display", "inline");
    $('#furca26').css("display", "block");
    $('#furca26-a').css("display", "block");
    $('#furca26-b').css("display", "block");
    $('#f26b-a').css("display", "inline");
    $('#f26b-b').css("display", "inline");
    $('#ae26').css("display", "inline");
    $('#pi26').css("display", "inline");

    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d26').toggle(
    function () {
        $('#d26').val("|d26,0");
        $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-26.png')");
        $('#diente26-a').css("background-position", "0 4px");
        $('#diente26-a').css("background-repeat", "no-repeat");
        $('#m26').css("display", "none");
        $('#i26').css("display", "none");
        $('#f26').css("display", "none");
        $('#s26-a').css("display", "none");
        $('#s26-b').css("display", "none");
        $('#s26-c').css("display", "none");
        $('#p26-a').css("display", "none");
        $('#p26-b').css("display", "none");
        $('#p26-c').css("display", "none");
        $('#mg26-a').css("display", "none");
        $('#mg26-b').css("display", "none");
        $('#mg26-c').css("display", "none");
        $('#ps26-a').css("display", "none");
        $('#ps26-b').css("display", "none");
        $('#ps26-c').css("display", "none");
        /*$('#furca26').css("background","none");*/
        $('#mg26-a').val('0');
        $('#mg26-b').val('0');
        $('#mg26-c').val('0');
        $('#ps26-a').val('0');
        $('#ps26-b').val('0');
        $('#ps26-c').val('0');

        $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-26b.png')");
        $('#diente26b-a').css("background-position", "0 21px");
        $('#diente26b-a').css("background-repeat", "no-repeat");
        $('#m26b').css("display", "none");
        $('#i26b').css("display", "none");
        $('#f26b').css("display", "none");
        $('#s26b-a').css("display", "none");
        $('#s26b-b').css("display", "none");
        $('#s26b-c').css("display", "none");
        $('#p26b-a').css("display", "none");
        $('#p26b-b').css("display", "none");
        $('#p26b-c').css("display", "none");
        $('#mg26b-a').css("display", "none");
        $('#mg26b-b').css("display", "none");
        $('#mg26b-c').css("display", "none");
        $('#ps26b-a').css("display", "none");
        $('#ps26b-b').css("display", "none");
        $('#ps26b-c').css("display", "none");
        $('#furca26b').css("background", "none");
        $('#mg26b-a').val('0');
        $('#mg26b-b').val('0');
        $('#mg26b-c').val('0');
        $('#ps26b-a').val('0');
        $('#ps26b-b').val('0');
        $('#ps26b-c').val('0');
        $('#furca26').css("display", "none");
        $('#furca26-a').css("display", "none");
        $('#furca26-b').css("display", "none");
        $('#f26b-a').css("display", "none");
        $('#f26b-b').css("display", "none");
        $('#ae26').css("display", "none");
        $('#pi26').css("display", "none");



        //cargar26a();
        //cargar26b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d26').val("|d26,1");
        $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-26.png')");
        $('#diente26-a').css("background-position", "0 4px");
        $('#diente26-a').css("background-repeat", "no-repeat");
        $('#m26').css("display", "inline");
        $('#i26').css("display", "block");
        $('#f26').css("display", "inline");
        $('#s26-a').css("display", "inline");
        $('#s26-b').css("display", "inline");
        $('#s26-c').css("display", "inline");
        $('#p26-a').css("display", "inline");
        $('#p26-b').css("display", "inline");
        $('#p26-c').css("display", "inline");
        $('#mg26-a').css("display", "inline");
        $('#mg26-b').css("display", "inline");
        $('#mg26-c').css("display", "inline");
        $('#ps26-a').css("display", "inline");
        $('#ps26-b').css("display", "inline");
        $('#ps26-c').css("display", "inline");

        $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-26b.png')");
        $('#diente26b-a').css("background-position", "0 21px");
        $('#diente26b-a').css("background-repeat", "no-repeat");
        $('#m26b').css("display", "inline");
        $('#i26b').css("display", "inline");
        $('#f26b').css("display", "inline");
        $('#s26b-a').css("display", "inline");
        $('#s26b-b').css("display", "inline");
        $('#s26b-c').css("display", "inline");
        $('#p26b-a').css("display", "inline");
        $('#p26b-b').css("display", "inline");
        $('#p26b-c').css("display", "inline");
        $('#mg26b-a').css("display", "inline");
        $('#mg26b-b').css("display", "inline");
        $('#mg26b-c').css("display", "inline");
        $('#ps26b-a').css("display", "inline");
        $('#ps26b-b').css("display", "inline");
        $('#ps26b-c').css("display", "inline");
        $('#furca26').css("display", "block");
        $('#furca26-a').css("display", "block");
        $('#furca26-b').css("display", "block");
        $('#f26b-a').css("display", "inline");
        $('#f26b-b').css("display", "inline");
        $('#ae26').css("display", "inline");
        $('#pi26').css("display", "inline");

        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d27ToggleON() {
    $('#d27').val("|d27,0");
    $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-27.png')");
    $('#diente27-a').css("background-position", "0px 0px");
    $('#diente27-a').css("background-repeat", "no-repeat");
    $('#m27').css("display", "none");
    $('#i27').css("display", "none");
    $('#f27').css("display", "none");
    $('#s27-a').css("display", "none");
    $('#s27-b').css("display", "none");
    $('#s27-c').css("display", "none");
    $('#p27-a').css("display", "none");
    $('#p27-b').css("display", "none");
    $('#p27-c').css("display", "none");
    $('#mg27-a').css("display", "none");
    $('#mg27-b').css("display", "none");
    $('#mg27-c').css("display", "none");
    $('#ps27-a').css("display", "none");
    $('#ps27-b').css("display", "none");
    $('#ps27-c').css("display", "none");
    /*$('#furca27').css("background","none");*/
    $('#mg27-a').val('0');
    $('#mg27-b').val('0');
    $('#mg27-c').val('0');
    $('#ps27-a').val('0');
    $('#ps27-b').val('0');
    $('#ps27-c').val('0');

    $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-27b.png')");
    $('#diente27b-a').css("background-position", "0px 24px");
    $('#diente27b-a').css("background-repeat", "no-repeat");
    $('#m27b').css("display", "none");
    $('#i27b').css("display", "none");
    $('#f27b').css("display", "none");
    $('#s27b-a').css("display", "none");
    $('#s27b-b').css("display", "none");
    $('#s27b-c').css("display", "none");
    $('#p27b-a').css("display", "none");
    $('#p27b-b').css("display", "none");
    $('#p27b-c').css("display", "none");
    $('#mg27b-a').css("display", "none");
    $('#mg27b-b').css("display", "none");
    $('#mg27b-c').css("display", "none");
    $('#ps27b-a').css("display", "none");
    $('#ps27b-b').css("display", "none");
    $('#ps27b-c').css("display", "none");
    $('#furca27b').css("background", "none");
    $('#mg27b-a').val('0');
    $('#mg27b-b').val('0');
    $('#mg27b-c').val('0');
    $('#ps27b-a').val('0');
    $('#ps27b-b').val('0');
    $('#ps27b-c').val('0');
    $('#furca27').css("display", "none");
    $('#furca27-a').css("display", "none");
    $('#furca27-b').css("display", "none");
    $('#f27b-a').css("display", "none");
    $('#f27b-b').css("display", "none");
    $('#ae27').css("display", "none");
    $('#pi27').css("display", "none");



    //cargar27a();
    //cargar27b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d27ToggleOUT() {
    $('#d27').val("|d27,1");
    $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-27.png')");
    $('#diente27-a').css("background-position", "0px 0px");
    $('#diente27-a').css("background-repeat", "no-repeat");
    $('#m27').css("display", "inline");
    $('#i27').css("display", "block");
    $('#f27').css("display", "inline");
    $('#s27-a').css("display", "inline");
    $('#s27-b').css("display", "inline");
    $('#s27-c').css("display", "inline");
    $('#p27-a').css("display", "inline");
    $('#p27-b').css("display", "inline");
    $('#p27-c').css("display", "inline");
    $('#mg27-a').css("display", "inline");
    $('#mg27-b').css("display", "inline");
    $('#mg27-c').css("display", "inline");
    $('#ps27-a').css("display", "inline");
    $('#ps27-b').css("display", "inline");
    $('#ps27-c').css("display", "inline");

    $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-27b.png')");
    $('#diente27b-a').css("background-position", "0px 24px");
    $('#diente27b-a').css("background-repeat", "no-repeat");
    $('#m27b').css("display", "inline");
    $('#i27b').css("display", "inline");
    $('#f27b').css("display", "inline");
    $('#s27b-a').css("display", "inline");
    $('#s27b-b').css("display", "inline");
    $('#s27b-c').css("display", "inline");
    $('#p27b-a').css("display", "inline");
    $('#p27b-b').css("display", "inline");
    $('#p27b-c').css("display", "inline");
    $('#mg27b-a').css("display", "inline");
    $('#mg27b-b').css("display", "inline");
    $('#mg27b-c').css("display", "inline");
    $('#ps27b-a').css("display", "inline");
    $('#ps27b-b').css("display", "inline");
    $('#ps27b-c').css("display", "inline");
    $('#furca27').css("display", "block");
    $('#furca27-a').css("display", "block");
    $('#furca27-b').css("display", "block");
    $('#f27b-a').css("display", "inline");
    $('#f27b-b').css("display", "inline");
    $('#ae27').css("display", "inline");
    $('#pi27').css("display", "inline");



    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d27').toggle(
    function () {
        $('#d27').val("|d27,0");
        $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-27.png')");
        $('#diente27-a').css("background-position", "0px 0px");
        $('#diente27-a').css("background-repeat", "no-repeat");
        $('#m27').css("display", "none");
        $('#i27').css("display", "none");
        $('#f27').css("display", "none");
        $('#s27-a').css("display", "none");
        $('#s27-b').css("display", "none");
        $('#s27-c').css("display", "none");
        $('#p27-a').css("display", "none");
        $('#p27-b').css("display", "none");
        $('#p27-c').css("display", "none");
        $('#mg27-a').css("display", "none");
        $('#mg27-b').css("display", "none");
        $('#mg27-c').css("display", "none");
        $('#ps27-a').css("display", "none");
        $('#ps27-b').css("display", "none");
        $('#ps27-c').css("display", "none");
        /*$('#furca27').css("background","none");*/
        $('#mg27-a').val('0');
        $('#mg27-b').val('0');
        $('#mg27-c').val('0');
        $('#ps27-a').val('0');
        $('#ps27-b').val('0');
        $('#ps27-c').val('0');

        $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-27b.png')");
        $('#diente27b-a').css("background-position", "0px 24px");
        $('#diente27b-a').css("background-repeat", "no-repeat");
        $('#m27b').css("display", "none");
        $('#i27b').css("display", "none");
        $('#f27b').css("display", "none");
        $('#s27b-a').css("display", "none");
        $('#s27b-b').css("display", "none");
        $('#s27b-c').css("display", "none");
        $('#p27b-a').css("display", "none");
        $('#p27b-b').css("display", "none");
        $('#p27b-c').css("display", "none");
        $('#mg27b-a').css("display", "none");
        $('#mg27b-b').css("display", "none");
        $('#mg27b-c').css("display", "none");
        $('#ps27b-a').css("display", "none");
        $('#ps27b-b').css("display", "none");
        $('#ps27b-c').css("display", "none");
        $('#furca27b').css("background", "none");
        $('#mg27b-a').val('0');
        $('#mg27b-b').val('0');
        $('#mg27b-c').val('0');
        $('#ps27b-a').val('0');
        $('#ps27b-b').val('0');
        $('#ps27b-c').val('0');
        $('#furca27').css("display", "none");
        $('#furca27-a').css("display", "none");
        $('#furca27-b').css("display", "none");
        $('#f27b-a').css("display", "none");
        $('#f27b-b').css("display", "none");
        $('#ae27').css("display", "none");
        $('#pi27').css("display", "none");



        //cargar27a();
        //cargar27b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d27').val("|d27,1");
        $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-27.png')");
        $('#diente27-a').css("background-position", "0px 0px");
        $('#diente27-a').css("background-repeat", "no-repeat");
        $('#m27').css("display", "inline");
        $('#i27').css("display", "block");
        $('#f27').css("display", "inline");
        $('#s27-a').css("display", "inline");
        $('#s27-b').css("display", "inline");
        $('#s27-c').css("display", "inline");
        $('#p27-a').css("display", "inline");
        $('#p27-b').css("display", "inline");
        $('#p27-c').css("display", "inline");
        $('#mg27-a').css("display", "inline");
        $('#mg27-b').css("display", "inline");
        $('#mg27-c').css("display", "inline");
        $('#ps27-a').css("display", "inline");
        $('#ps27-b').css("display", "inline");
        $('#ps27-c').css("display", "inline");

        $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-27b.png')");
        $('#diente27b-a').css("background-position", "0px 24px");
        $('#diente27b-a').css("background-repeat", "no-repeat");
        $('#m27b').css("display", "inline");
        $('#i27b').css("display", "inline");
        $('#f27b').css("display", "inline");
        $('#s27b-a').css("display", "inline");
        $('#s27b-b').css("display", "inline");
        $('#s27b-c').css("display", "inline");
        $('#p27b-a').css("display", "inline");
        $('#p27b-b').css("display", "inline");
        $('#p27b-c').css("display", "inline");
        $('#mg27b-a').css("display", "inline");
        $('#mg27b-b').css("display", "inline");
        $('#mg27b-c').css("display", "inline");
        $('#ps27b-a').css("display", "inline");
        $('#ps27b-b').css("display", "inline");
        $('#ps27b-c').css("display", "inline");
        $('#furca27').css("display", "block");
        $('#furca27-a').css("display", "block");
        $('#furca27-b').css("display", "block");
        $('#f27b-a').css("display", "inline");
        $('#f27b-b').css("display", "inline");
        $('#ae27').css("display", "inline");
        $('#pi27').css("display", "inline");



        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
function d28ToggleON() {
    $('#d28').val("|d28,0");
    $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-28.png')");
    $('#diente28-a').css("background-position", "0 -2px");
    $('#diente28-a').css("background-repeat", "no-repeat");
    $('#m28').css("display", "none");
    $('#i28').css("display", "none");
    $('#f28').css("display", "none");
    $('#s28-a').css("display", "none");
    $('#s28-b').css("display", "none");
    $('#s28-c').css("display", "none");
    $('#p28-a').css("display", "none");
    $('#p28-b').css("display", "none");
    $('#p28-c').css("display", "none");
    $('#mg28-a').css("display", "none");
    $('#mg28-b').css("display", "none");
    $('#mg28-c').css("display", "none");
    $('#ps28-a').css("display", "none");
    $('#ps28-b').css("display", "none");
    $('#ps28-c').css("display", "none");
    /*$('#furca28').css("background","none");*/
    $('#mg28-a').val('0');
    $('#mg28-b').val('0');
    $('#mg28-c').val('0');
    $('#ps28-a').val('0');
    $('#ps28-b').val('0');
    $('#ps28-c').val('0');

    $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-28b.png')");
    $('#diente28b-a').css("background-position", "0 23px");
    $('#diente28b-a').css("background-repeat", "no-repeat");
    $('#m28b').css("display", "none");
    $('#i28b').css("display", "none");
    $('#f28b').css("display", "none");
    $('#s28b-a').css("display", "none");
    $('#s28b-b').css("display", "none");
    $('#s28b-c').css("display", "none");
    $('#p28b-a').css("display", "none");
    $('#p28b-b').css("display", "none");
    $('#p28b-c').css("display", "none");
    $('#mg28b-a').css("display", "none");
    $('#mg28b-b').css("display", "none");
    $('#mg28b-c').css("display", "none");
    $('#ps28b-a').css("display", "none");
    $('#ps28b-b').css("display", "none");
    $('#ps28b-c').css("display", "none");
    $('#furca28b').css("background", "none");
    $('#mg28b-a').val('0');
    $('#mg28b-b').val('0');
    $('#mg28b-c').val('0');
    $('#ps28b-a').val('0');
    $('#ps28b-b').val('0');
    $('#ps28b-c').val('0');
    $('#furca28').css("display", "none");
    $('#furca28-a').css("display", "none");
    $('#furca28-b').css("display", "none");
    $('#f28b-a').css("display", "none");
    $('#f28b-b').css("display", "none");
    $('#ae28').css("display", "none");
    $('#pi28').css("display", "none");



    //cargar28a();
    //cargar28b();

    //cargar2();
    //getSangrado();
    //getPlaca();
}
function d28ToggleOUT() {
    $('#d28').val("|d28,1");
    $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-28.png')");
    $('#diente28-a').css("background-position", "0 -2px");
    $('#diente28-a').css("background-repeat", "no-repeat");
    $('#m28').css("display", "inline");
    $('#i28').css("display", "block");
    $('#f28').css("display", "inline");
    $('#s28-a').css("display", "inline");
    $('#s28-b').css("display", "inline");
    $('#s28-c').css("display", "inline");
    $('#p28-a').css("display", "inline");
    $('#p28-b').css("display", "inline");
    $('#p28-c').css("display", "inline");
    $('#mg28-a').css("display", "inline");
    $('#mg28-b').css("display", "inline");
    $('#mg28-c').css("display", "inline");
    $('#ps28-a').css("display", "inline");
    $('#ps28-b').css("display", "inline");
    $('#ps28-c').css("display", "inline");

    $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-28b.png')");
    $('#diente28b-a').css("background-position", "0 23px");
    $('#diente28b-a').css("background-repeat", "no-repeat");
    $('#m28b').css("display", "inline");
    $('#i28b').css("display", "inline");
    $('#f28b').css("display", "inline");
    $('#s28b-a').css("display", "inline");
    $('#s28b-b').css("display", "inline");
    $('#s28b-c').css("display", "inline");
    $('#p28b-a').css("display", "inline");
    $('#p28b-b').css("display", "inline");
    $('#p28b-c').css("display", "inline");
    $('#mg28b-a').css("display", "inline");
    $('#mg28b-b').css("display", "inline");
    $('#mg28b-c').css("display", "inline");
    $('#ps28b-a').css("display", "inline");
    $('#ps28b-b').css("display", "inline");
    $('#ps28b-c').css("display", "inline");
    $('#furca28').css("display", "block");
    $('#furca28-a').css("display", "block");
    $('#furca28-b').css("display", "block");
    $('#f28b-a').css("display", "inline");
    $('#f28b-b').css("display", "inline");
    $('#ae28').css("display", "inline");
    $('#pi28').css("display", "inline");

    //cargar2();
    //getSangrado();
    //getPlaca();
}
$('#d28').toggle(
    function () {
        $('#d28').val("|d28,0");
        $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/tachados/periodontograma-dientes-arriba-tachados-28.png')");
        $('#diente28-a').css("background-position", "0 -2px");
        $('#diente28-a').css("background-repeat", "no-repeat");
        $('#m28').css("display", "none");
        $('#i28').css("display", "none");
        $('#f28').css("display", "none");
        $('#s28-a').css("display", "none");
        $('#s28-b').css("display", "none");
        $('#s28-c').css("display", "none");
        $('#p28-a').css("display", "none");
        $('#p28-b').css("display", "none");
        $('#p28-c').css("display", "none");
        $('#mg28-a').css("display", "none");
        $('#mg28-b').css("display", "none");
        $('#mg28-c').css("display", "none");
        $('#ps28-a').css("display", "none");
        $('#ps28-b').css("display", "none");
        $('#ps28-c').css("display", "none");
        /*$('#furca28').css("background","none");*/
        $('#mg28-a').val('0');
        $('#mg28-b').val('0');
        $('#mg28-c').val('0');
        $('#ps28-a').val('0');
        $('#ps28-b').val('0');
        $('#ps28-c').val('0');

        $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/tachados/periodontograma-dientes-arriba-tachados-28b.png')");
        $('#diente28b-a').css("background-position", "0 23px");
        $('#diente28b-a').css("background-repeat", "no-repeat");
        $('#m28b').css("display", "none");
        $('#i28b').css("display", "none");
        $('#f28b').css("display", "none");
        $('#s28b-a').css("display", "none");
        $('#s28b-b').css("display", "none");
        $('#s28b-c').css("display", "none");
        $('#p28b-a').css("display", "none");
        $('#p28b-b').css("display", "none");
        $('#p28b-c').css("display", "none");
        $('#mg28b-a').css("display", "none");
        $('#mg28b-b').css("display", "none");
        $('#mg28b-c').css("display", "none");
        $('#ps28b-a').css("display", "none");
        $('#ps28b-b').css("display", "none");
        $('#ps28b-c').css("display", "none");
        $('#furca28b').css("background", "none");
        $('#mg28b-a').val('0');
        $('#mg28b-b').val('0');
        $('#mg28b-c').val('0');
        $('#ps28b-a').val('0');
        $('#ps28b-b').val('0');
        $('#ps28b-c').val('0');
        $('#furca28').css("display", "none");
        $('#furca28-a').css("display", "none");
        $('#furca28-b').css("display", "none");
        $('#f28b-a').css("display", "none");
        $('#f28b-b').css("display", "none");
        $('#ae28').css("display", "none");
        $('#pi28').css("display", "none");



        //cargar28a();
        //cargar28b();

        //cargar2();
        //getSangrado();
        //getPlaca();
    },
    function () {
        $('#d28').val("|d28,1");
        $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-28.png')");
        $('#diente28-a').css("background-position", "0 -2px");
        $('#diente28-a').css("background-repeat", "no-repeat");
        $('#m28').css("display", "inline");
        $('#i28').css("display", "block");
        $('#f28').css("display", "inline");
        $('#s28-a').css("display", "inline");
        $('#s28-b').css("display", "inline");
        $('#s28-c').css("display", "inline");
        $('#p28-a').css("display", "inline");
        $('#p28-b').css("display", "inline");
        $('#p28-c').css("display", "inline");
        $('#mg28-a').css("display", "inline");
        $('#mg28-b').css("display", "inline");
        $('#mg28-c').css("display", "inline");
        $('#ps28-a').css("display", "inline");
        $('#ps28-b').css("display", "inline");
        $('#ps28-c').css("display", "inline");

        $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-28b.png')");
        $('#diente28b-a').css("background-position", "0 23px");
        $('#diente28b-a').css("background-repeat", "no-repeat");
        $('#m28b').css("display", "inline");
        $('#i28b').css("display", "inline");
        $('#f28b').css("display", "inline");
        $('#s28b-a').css("display", "inline");
        $('#s28b-b').css("display", "inline");
        $('#s28b-c').css("display", "inline");
        $('#p28b-a').css("display", "inline");
        $('#p28b-b').css("display", "inline");
        $('#p28b-c').css("display", "inline");
        $('#mg28b-a').css("display", "inline");
        $('#mg28b-b').css("display", "inline");
        $('#mg28b-c').css("display", "inline");
        $('#ps28b-a').css("display", "inline");
        $('#ps28b-b').css("display", "inline");
        $('#ps28b-c').css("display", "inline");
        $('#furca28').css("display", "block");
        $('#furca28-a').css("display", "block");
        $('#furca28-b').css("display", "block");
        $('#f28b-a').css("display", "inline");
        $('#f28b-b').css("display", "inline");
        $('#ae28').css("display", "inline");
        $('#pi28').css("display", "inline");

        //cargar2();
        //getSangrado();
        //getPlaca();
    }
);
//IMPLANTES

$('#i21').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f21').css({ "background": "#FFFFFF" });
        $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-21.png')");
        $('#diente21-a').css("background-position", "bottom");
        $('#diente21-a').css("background-repeat", "no-repeat");

        $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-21b.png')");
        $('#diente21b-a').css("background-position", "0 11px");
        $('#diente21b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente21-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-21.png')");
        $('#diente21-a').css("background-position", "bottom");
        $('#diente21-a').css("background-repeat", "no-repeat");

        $('#diente21b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-21b.png')");
        $('#diente21b-a').css("background-position", "0 11px");
        $('#diente21b-a').css("background-repeat", "no-repeat");
    }
);

$('#i22').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f22').css({ "background": "#FFFFFF" });
        $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-22.png')");
        $('#diente22-a').css("background-position", "0px 6px");
        $('#diente22-a').css("background-repeat", "no-repeat");

        $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-22b.png')");
        $('#diente22b-a').css("background-position", "0px 17px");
        $('#diente22b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente22-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-22.png')");
        $('#diente22-a').css("background-position", "0px 6px");
        $('#diente22-a').css("background-repeat", "no-repeat");

        $('#diente22b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-22b.png')");
        $('#diente22b-a').css("background-position", "0px 17px");
        $('#diente22b-a').css("background-repeat", "no-repeat");
    }
);

$('#i23').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f23').css({ "background": "#FFFFFF" });
        $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-23.png')");
        $('#diente23-a').css("background-position", "top");
        $('#diente23-a').css("background-repeat", "no-repeat");

        $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-23b.png')");
        $('#diente23b-a').css("background-position", "0 15px");
        $('#diente23b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente23-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-23.png')");
        $('#diente23-a').css("background-position", "top");
        $('#diente23-a').css("background-repeat", "no-repeat");

        $('#diente23b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-23b.png')");
        $('#diente23b-a').css("background-position", "0 15px");
        $('#diente23b-a').css("background-repeat", "no-repeat");
    }
);

$('#i24').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-24.png')");
        $('#diente24-a').css("background-repeat", "no-repeat");

        $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-24b.png')");
        $('#diente24b-a').css("background-repeat", "no-repeat");
        $('#diente24b-a').css("background-position", "0 16px");

        $('#furca24-a').css("background", "none");
        $('#furca24-b').css("background", "none");
        $('#f24b-a').css("background", "none");
        $('#f24b-b').css("background", "none");
        $("#f24b-a").attr("id", "f24b-adesact");
        $("#f24b-b").attr("id", "f24b-bdesact");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente24-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-24.png')");
        $('#diente24-a').css("background-repeat", "no-repeat");

        $('#diente24b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-24b.png')");
        $('#diente24b-a').css("background-repeat", "no-repeat");
        $('#diente24b-a').css("background-position", "0 16px");

        $('#f24b-a').css("background", "#FFFFFF");
        $('#f24b-b').css("background", "#FFFFFF");
        $("#f24b-adesact").attr("id", "f24b-a");
        $("#f24b-bdesact").attr("id", "f24b-b");
    }
);

$('#i25').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-25.png')");
        $('#diente25-a').css("background-position", "0 5px");
        $('#diente25-a').css("background-repeat", "no-repeat");

        $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-25b.png')");
        $('#diente25b-a').css("background-position", "0 16px");
        $('#diente25b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente25-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-25.png')");
        $('#diente25-a').css("background-position", "0 5px");
        $('#diente25-a').css("background-repeat", "no-repeat");

        $('#diente25b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-25b.png')");
        $('#diente25b-a').css("background-position", "0 16px");
        $('#diente25b-a').css("background-repeat", "no-repeat");
    }
);

$('#i26').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-26.png')");
        $('#diente26-a').css("background-position", "0 4px");
        $('#diente26-a').css("background-repeat", "no-repeat");

        $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-26b.png')");
        $('#diente26b-a').css("background-position", "0 21px");
        $('#diente26b-a').css("background-repeat", "no-repeat");

        $('#furca26-a').css("background", "none");
        $('#furca26-b').css("background", "none");
        $('#f26b-a').css("background", "none");
        $('#f26b-b').css("background", "none");
        $('#f26').css("background", "none");
        $('#furca26').css("background", "none");

        $("#f26").attr("id", "f26desact");
        $("#f26b-a").attr("id", "f26b-adesact");
        $("#f26b-b").attr("id", "f26b-bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente26-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-26.png')");
        $('#diente26-a').css("background-position", "0 4px");
        $('#diente26-a').css("background-repeat", "no-repeat");

        $('#diente26b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-26b.png')");
        $('#diente26b-a').css("background-position", "0 21px");
        $('#diente26b-a').css("background-repeat", "no-repeat");

        $('#f26').css("background", "#FFFFFF");
        $('#f26b-a').css("background", "#FFFFFF");
        $('#f26b-b').css("background", "#FFFFFF");

        $("#f26desact").attr("id", "f26");
        $("#f26b-adesact").attr("id", "f26b-a");
        $("#f26b-bdesact").attr("id", "f26b-b");
    }
);

$('#i27').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-27.png')");
        $('#diente27-a').css("background-repeat", "no-repeat");

        $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-27b.png')");
        $('#diente27b-a').css("background-repeat", "no-repeat");
        $('#diente27b-a').css("background-position", "0 24px");

        $('#furca27-a').css("background", "none");
        $('#furca27-b').css("background", "none");
        $('#f27b-a').css("background", "none");
        $('#f27b-b').css("background", "none");
        $('#f27').css("background", "none");
        $('#furca27').css("background", "none");

        $("#f27").attr("id", "f27desact");
        $("#f27b-a").attr("id", "f27b-adesact");
        $("#f27b-b").attr("id", "f27b-bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente27-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-27.png')");
        $('#diente27-a').css("background-repeat", "no-repeat");

        $('#diente27b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-27b.png')");
        $('#diente27b-a').css("background-repeat", "no-repeat");
        $('#diente27b-a').css("background-position", "0 24px");

        $('#f27').css("background", "#FFFFFF");
        $("#f27desact").attr("id", "f27");
        $('#f27b-a').css("background", "#FFFFFF");
        $('#f27b-b').css("background", "#FFFFFF");

        $("#f27desact").attr("id", "f27");
        $("#f27b-adesact").attr("id", "f27b-a");
        $("#f27b-bdesact").attr("id", "f27b-b");
    }
);

$('#i28').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/implantes/periodontograma-dientes-arriba-tornillo-28.png')");
        $('#diente28-a').css("background-position", "0 -2px");
        $('#diente28-a').css("background-repeat", "no-repeat");

        $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/implantes/periodontograma-dientes-arriba-tornillo-28b.png')");
        $('#diente28b-a').css("background-position", "0 23px");
        $('#diente28b-a').css("background-repeat", "no-repeat");

        $('#furca28-a').css("background", "none");
        $('#furca28-b').css("background", "none");
        $('#f28b-a').css("background", "none");
        $('#f28b-b').css("background", "none");
        $('#f28').css("background", "none");
        $('#furca28').css("background", "none");

        $("#f28").attr("id", "f28desact");
        $("#f28b-a").attr("id", "f28b-adesact");
        $("#f28b-b").attr("id", "f28b-bdesact");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente28-a').css("background", "url('/Content/images/dentista/tabla2/periodontograma-dientes-arriba-28.png')");
        $('#diente28-a').css("background-position", "0 -2px");
        $('#diente28-a').css("background-repeat", "no-repeat");

        $('#diente28b-a').css("background", "url('/Content/images/dentista/tabla4/periodontograma-dientes-arriba-28b.png')");
        $('#diente28b-a').css("background-position", "0 23px");
        $('#diente28b-a').css("background-repeat", "no-repeat");

        $('#f28').css("background", "#FFFFFF");
        $('#f28b-a').css("background", "#FFFFFF");
        $('#f28b-b').css("background", "#FFFFFF");

        $("#f28desact").attr("id", "f28");
        $("#f28b-adesact").attr("id", "f28b-a");
        $("#f28b-bdesact").attr("id", "f28b-b");
    }
);

//FURCAS TABLA 2
function f26Toggle0() {
    $('#f26').val("|f26,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i26').css({ "background": "#FFFFFF" });
    $('#furca26').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f26Toggle1() {
    $('#f26').val("|f26,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca26').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f26Toggle2() {
    $('#f26').val("|f26,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca26').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f26Toggle3() {
    $('#f26').val("|f26,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca26').css("background", "none");
}
$('#f26').toggle(
    function () {
        $('#f26').val("|f26,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i26').css({ "background": "#FFFFFF" });
        $('#furca26').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f26').val("|f26,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca26').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f26').val("|f26,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca26').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f26').val("|f26,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca26').css("background", "none");
    }
);
function f27Toggle0() {
    $('#f27').val("|f27,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i27').css({ "background": "#FFFFFF" });
    $('#furca27').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f27Toggle1() {
    $('#f27').val("|f27,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca27').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f27Toggle2() {
    $('#f27').val("|f27,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca27').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f27Toggle3() {
    $('#f27').val("|f27,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca27').css("background", "none");
}
$('#f27').toggle(
    function () {
        $('#f27').val("|f27,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i27').css({ "background": "#FFFFFF" });
        $('#furca27').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f27').val("|f27,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca27').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f27').val("|f27,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca27').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f27').val("|f27,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca27').css("background", "none");
    }
);
function f28Toggle0() {
    $('#f28').val("|f28,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i28').css({ "background": "#FFFFFF" });
    $('#furca28').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f28Toggle1() {
    $('#f28').val("|f28,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca28').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f28Toggle2() {
    $('#f28').val("|f28,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca28').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f28Toggle3() {
    $('#f28').val("|f28,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca28').css("background", "none");
}
$('#f28').toggle(
    function () {
        $('#f28').val("|f28,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i28').css({ "background": "#FFFFFF" });
        $('#furca28').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f28').val("|f28,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca28').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f28').val("|f28,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca28').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f28').val("|f28,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca28').css("background", "none");
    }
);


//FURCAS TABLA 3
function f18baToggle0() {
    $('#f18b-a').val("|f18b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca18-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f18baToggle1() {
    $('#f18b-a').val("|f18b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca18-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f18baToggle2() {
    $('#f18b-a').val("|f18b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca18-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f18baToggle3() {
    $('#f18b-a').val("|f18b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca18-a').css("background", "none");
}
$('#f18b-a').toggle(
    function () {
        $('#f18b-a').val("|f18b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca18-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f18b-a').val("|f18b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca18-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f18b-a').val("|f18b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca18-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f18b-a').val("|f18b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca18-a').css("background", "none");
    }
);
function f18bbToggle0() {
    $('#f18b-b').val("|f18b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca18-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f18bbToggle1() {
    $('#f18b-b').val("|f18b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca18-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f18bbToggle2() {
    $('#f18b-b').val("|f18b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca18-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f18bbToggle3() {
    $('#f18b-b').val("|f18b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca18-b').css("background", "none");
}
$('#f18b-b').toggle(
    function () {
        $('#f18b-b').val("|f18b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca18-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f18b-b').val("|f18b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca18-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f18b-b').val("|f18b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca18-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f18b-b').val("|f18b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca18-b').css("background", "none");
    }
);
function f17baToggle0() {
    $('#f17b-a').val("|f17b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca17-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f17baToggle1() {
    $('#f17b-a').val("|f17b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca17-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f17baToggle2() {
    $('#f17b-a').val("|f17b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca17-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f17baToggle3() {
    $('#f17b-a').val("|f17b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca17-a').css("background", "none");
}
$('#f17b-a').toggle(
    function () {
        $('#f17b-a').val("|f17b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca17-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f17b-a').val("|f17b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca17-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f17b-a').val("|f17b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca17-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f17b-a').val("|f17b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca17-a').css("background", "none");
    }
);
function f17bbToggle0() {
    $('#f17b-b').val("|f17b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca17-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f17bbToggle1() {
    $('#f17b-b').val("|f17b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca17-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f17bbToggle2() {
    $('#f17b-b').val("|f17b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca17-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f17bbToggle3() {
    $('#f17b-b').val("|f17b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca17-b').css("background", "none");
}
$('#f17b-b').toggle(
    function () {
        $('#f17b-b').val("|f17b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca17-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f17b-b').val("|f17b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca17-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f17b-b').val("|f17b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca17-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f17b-b').val("|f17b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca17-b').css("background", "none");
    }
);
function f16baToggle0() {
    $('#f16b-a').val("|f16b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca16-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f16baToggle1() {
    $('#f16b-a').val("|f16b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca16-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f16baToggle2() {
    $('#f16b-a').val("|f16b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca16-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f16baToggle3() {
    $('#f16b-a').val("|f16b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca16-a').css("background", "none");
}
$('#f16b-a').toggle(
    function () {
        $('#f16b-a').val("|f16b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca16-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f16b-a').val("|f16b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca16-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f16b-a').val("|f16b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca16-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f16b-a').val("|f16b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca16-a').css("background", "none");
    }
);
function f16bbToggle0() {
    $('#f16b-b').val("|f16b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca16-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f16bbToggle1() {
    $('#f16b-b').val("|f16b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca16-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f16bbToggle2() {
    $('#f16b-b').val("|f16b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca16-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f16bbToggle3() {
    $('#f16b-b').val("|f16b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca16-b').css("background", "none");
}
$('#f16b-b').toggle(
    function () {
        $('#f16b-b').val("|f16b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca16-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f16b-b').val("|f16b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca16-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f16b-b').val("|f16b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca16-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f16b-b').val("|f16b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca16-b').css("background", "none");
    }
);
function f14baToggle0() {
    $('#f14b-a').val("|f14b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca14-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f14baToggle1() {
    $('#f14b-a').val("|f14b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca14-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f14baToggle2() {
    $('#f14b-a').val("|f14b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca14-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f14baToggle3() {
    $('#f14b-a').val("|f14b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca14-a').css("background", "none");
}
$('#f14b-a').toggle(
    function () {
        $('#f14b-a').val("|f14b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca14-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f14b-a').val("|f14b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca14-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f14b-a').val("|f14b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca14-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f14b-a').val("|f14b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca14-a').css("background", "none");
    }
);
function f14bbToggle0() {
    $('#f14b-b').val("|f14b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca14-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f14bbToggle1() {
    $('#f14b-b').val("|f14b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca14-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f14bbToggle2() {
    $('#f14b-b').val("|f14b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca14-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f14bbToggle3() {
    $('#f14b-b').val("|f14b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca14-b').css("background", "none");
}
$('#f14b-b').toggle(
    function () {
        $('#f14b-b').val("|f14b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca14-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f14b-b').val("|f14b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca14-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f14b-b').val("|f14b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca14-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f14b-b').val("|f14b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca14-b').css("background", "none");
    }
);


//FURCAS TABLA 4
function f24baToggle0() {
    $('#f24b-a').val("|f24b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca24-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f24baToggle1() {
    $('#f24b-a').val("|f24b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca24-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f24baToggle2() {
    $('#f24b-a').val("|f24b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca24-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f24baToggle3() {
    $('#f24b-a').val("|f24b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca24-a').css("background", "none");
}
function f24bbToggle0() {
    $('#f24b-b').val("|f24b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca24-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f24bbToggle1() {
    $('#f24b-b').val("|f24b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca24-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f24bbToggle2() {
    $('#f24b-b').val("|f24b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca24-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f24bbToggle3() {
    $('#f24b-b').val("|f24b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca24-b').css("background", "none");
}
function f26baToggle0() {
    $('#f26b-a').val("|f26b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca26-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f26baToggle1() {
    $('#f26b-a').val("|f26b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca26-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f26baToggle2() {
    $('#f26b-a').val("|f26b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca26-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f26baToggle3() {
    $('#f26b-a').val("|f26b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca26-a').css("background", "none");
}
function f26bbToggle0() {
    $('#f26b-b').val("|f26b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca26-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f26bbToggle1() {
    $('#f26b-b').val("|f26b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca26-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f26bbToggle2() {
    $('#f26b-b').val("|f26b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca26-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f26bbToggle3() {
    $('#f26b-b').val("|f26b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca26-b').css("background", "none");
}
function f27baToggle0() {
    $('#f27b-a').val("|f27b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca27-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f27baToggle1() {
    $('#f27b-a').val("|f27b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca27-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f27baToggle2() {
    $('#f27b-a').val("|f27b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca27-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f27baToggle3() {
    $('#f27b-a').val("|f27b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca27-a').css("background", "none");
}
function f27bbToggle0() {
    $('#f27b-b').val("|f27b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca27-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f27bbToggle1() {
    $('#f27b-b').val("|f27b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca27-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f27bbToggle2() {
    $('#f27b-b').val("|f27b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca27-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f27bbToggle3() {
    $('#f27b-b').val("|f27b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca27-b').css("background", "none");
}
function f28baToggle0() {
    $('#f28b-a').val("|f28b-a,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca28-a').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f28baToggle1() {
    $('#f28b-a').val("|f28b-a,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca28-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f28baToggle2() {
    $('#f28b-a').val("|f28b-a,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca28-a').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f28baToggle3() {
    $('#f28b-a').val("|f28b-a,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca28-a').css("background", "none");
}

function f28bbToggle0() {
    $('#f28b-b').val("|f28b-b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#furca28-b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f28bbToggle1() {
    $('#f28b-b').val("|f28b-b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca28-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f28bbToggle2() {
    $('#f28b-b').val("|f28b-b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca28-b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f28bbToggle3() {
    $('#f28b-b').val("|f28b-b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca28-b').css("background", "none");
}
$('#f24b-a').toggle(
    function () {
        $('#f24b-a').val("|f24b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca24-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f24b-a').val("|f24b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca24-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f24b-a').val("|f24b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca24-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f24b-a').val("|f24b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca24-a').css("background", "none");
    }
);
$('#f24b-b').toggle(
    function () {
        $('#f24b-b').val("|f24b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca24-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f24b-b').val("|f24b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca24-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f24b-b').val("|f24b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca24-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f24b-b').val("|f24b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca24-b').css("background", "none");
    }
);

$('#f26b-a').toggle(
    function () {
        $('#f26b-a').val("|f26b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca26-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f26b-a').val("|f26b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca26-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f26b-a').val("|f26b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca26-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f26b-a').val("|f26b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca26-a').css("background", "none");
    }
);
$('#f26b-b').toggle(
    function () {
        $('#f26b-b').val("|f26b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca26-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f26b-b').val("|f26b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca26-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f26b-b').val("|f26b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca26-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f26b-b').val("|f26b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca26-b').css("background", "none");
    }
);

$('#f27b-a').toggle(
    function () {
        $('#f27b-a').val("|f27b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca27-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f27b-a').val("|f27b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca27-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f27b-a').val("|f27b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca27-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f27b-a').val("|f27b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca27-a').css("background", "none");
    }
);
$('#f27b-b').toggle(
    function () {
        $('#f27b-b').val("|f27b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca27-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f27b-b').val("|f27b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca27-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f27b-b').val("|f27b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca27-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f27b-b').val("|f27b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca27-b').css("background", "none");
    }
);

$('#f28b-a').toggle(
    function () {
        $('#f28b-a').val("|f28b-a,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca28-a').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f28b-a').val("|f28b-a,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca28-a').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f28b-a').val("|f28b-a,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca28-a').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f28b-a').val("|f28b-a,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca28-a').css("background", "none");
    }
);
$('#f28b-b').toggle(
    function () {
        $('#f28b-b').val("|f28b-b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#furca28-b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f28b-b').val("|f28b-b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca28-b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f28b-b').val("|f28b-b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca28-b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f28b-b').val("|f28b-b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca28-b').css("background", "none");
    }
);


//FURCAS TABLA 5
function f48Toggle0() {
    $('#f48').val("|f48,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i48').css({ "background": "#FFFFFF" });
    $('#furca48').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f48Toggle1() {
    $('#f48').val("|f48,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca48').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f48Toggle2() {
    $('#f48').val("|f48,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca48').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f48Toggle3() {
    $('#f48').val("|f48,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca48').css("background", "none");
}
function f47Toggle0() {
    $('#f47').val("|f47,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i47').css({ "background": "#FFFFFF" });
    $('#furca47').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f47Toggle1() {
    $('#f47').val("|f47,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca47').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f47Toggle2() {
    $('#f47').val("|f47,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca47').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f47Toggle3() {
    $('#f47').val("|f47,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca47').css("background", "none");
}
function f46Toggle0() {
    $('#f46').val("|f46,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i46').css({ "background": "#FFFFFF" });
    $('#furca46').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f46Toggle1() {
    $('#f46').val("|f46,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca46').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f46Toggle2() {
    $('#f46').val("|f46,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca46').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f46Toggle3() {
    $('#f46').val("|f46,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca46').css("background", "none");
}

$('#f48').toggle(
    function () {
        $('#f48').val("|f48,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i48').css({ "background": "#FFFFFF" });
        $('#furca48').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f48').val("|f48,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca48').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f48').val("|f48,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca48').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f48').val("|f48,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca48').css("background", "none");
    }
);

$('#f47').toggle(
    function () {
        $('#f47').val("|f47,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i47').css({ "background": "#FFFFFF" });
        $('#furca47').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f47').val("|f47,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca47').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f47').val("|f47,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca47').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f47').val("|f47,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca47').css("background", "none");
    }
);

$('#f46').toggle(
    function () {
        $('#f46').val("|f46,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i46').css({ "background": "#FFFFFF" });
        $('#furca46').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f46').val("|f46,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca46').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f46').val("|f46,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca46').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f46').val("|f46,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca46').css("background", "none");
    }
);

//FURCAS TABLA 6
function f38Toggle0() {
    $('#f38').val("|f38,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i38').css({ "background": "#FFFFFF" });
    $('#furca38').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f38Toggle1() {
    $('#f38').val("|f38,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca38').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f38Toggle2() {
    $('#f38').val("|f38,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca38').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f38Toggle3() {
    $('#f38').val("|f38,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca38').css("background", "none");
}
function f37Toggle0() {
    $('#f37').val("|f37,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i37').css({ "background": "#FFFFFF" });
    $('#furca37').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f37Toggle1() {
    $('#f37').val("|f37,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca37').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f37Toggle2() {
    $('#f37').val("|f37,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca37').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f37Toggle3() {
    $('#f37').val("|f37,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca37').css("background", "none");
}
function f36Toggle0() {
    $('#f36').val("|f36,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i36').css({ "background": "#FFFFFF" });
    $('#furca36').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f36Toggle1() {
    $('#f36').val("|f36,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca36').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f36Toggle2() {
    $('#f36').val("|f36,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca36').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f36Toggle3() {
    $('#f36').val("|f36,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca36').css("background", "none");
}
$('#f38').toggle(
    function () {
        $('#f38').val("|f38,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i38').css({ "background": "#FFFFFF" });
        $('#furca38').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f38').val("|f38,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca38').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f38').val("|f38,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca38').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f38').val("|f38,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca38').css("background", "none");
    }
);

$('#f37').toggle(
    function () {
        $('#f37').val("|f37,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i37').css({ "background": "#FFFFFF" });
        $('#furca37').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f37').val("|f37,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca37').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f37').val("|f37,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca37').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f37').val("|f37,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca37').css("background", "none");
    }
);

$('#f36').toggle(
    function () {
        $('#f36').val("|f36,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i36').css({ "background": "#FFFFFF" });
        $('#furca36').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f36').val("|f36,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca36').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f36').val("|f36,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca36').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f36').val("|f36,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca36').css("background", "none");
    }
);

//FURCAS TABLA 7
function f48bToggle0() {
    $('#f48b').val("|f48b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i48b').css({ "background": "#FFFFFF" });
    $('#furca48b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f48bToggle1() {
    $('#f48b').val("|f48b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca48b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f48bToggle2() {
    $('#f48b').val("|f48b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca48b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f48bToggle3() {
    $('#f48b').val("|f48b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca48b').css("background", "none");
}
function f47bToggle0() {
    $('#f47b').val("|f47b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i47b').css({ "background": "#FFFFFF" });
    $('#furca47b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f47bToggle1() {
    $('#f47b').val("|f47b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca47b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f47bToggle2() {
    $('#f47b').val("|f47b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca47b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f47bToggle3() {
    $('#f47b').val("|f47b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca47b').css("background", "none");
}
function f46bToggle0() {
    $('#f46b').val("|f46b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i46b').css({ "background": "#FFFFFF" });
    $('#furca46b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f46bToggle1() {
    $('#f46b').val("|f46b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca46b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f46bToggle2() {
    $('#f46b').val("|f46b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca46b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f46bToggle3() {
    $('#f46b').val("|f46b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca46b').css("background", "none");
}
// fim
$('#f48b').toggle(
    function () {
        $('#f48b').val("|f48b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i48b').css({ "background": "#FFFFFF" });
        $('#furca48b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f48b').val("|f48b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca48b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f48b').val("|f48b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca48b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f48b').val("|f48b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca48b').css("background", "none");
    }
);

$('#f47b').toggle(
    function () {
        $('#f47b').val("|f47b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i47b').css({ "background": "#FFFFFF" });
        $('#furca47b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f47b').val("|f47b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca47b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f47b').val("|f47b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca47b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f47b').val("|f47b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca47b').css("background", "none");
    }
);

$('#f46b').toggle(
    function () {
        $('#f46b').val("|f46b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i46b').css({ "background": "#FFFFFF" });
        $('#furca46b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f46b').val("|f46b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca46b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f46b').val("|f46b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca46b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f46b').val("|f46b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca46b').css("background", "none");
    }
);

//FURCAS TABLA 8
function f38bToggle0() {
    $('#f38b').val("|f38b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i38b').css({ "background": "#FFFFFF" });
    $('#furca38b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f38bToggle1() {
    $('#f38b').val("|f38b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca38b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f38bToggle2() {
    $('#f38b').val("|f38b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca38b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f38bToggle3() {
    $('#f38b').val("|f38b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca38b').css("background", "none");
}
function f37bToggle0() {
    $('#f37b').val("|f37b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i37b').css({ "background": "#FFFFFF" });
    $('#furca37b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f37bToggle1() {
    $('#f37b').val("|f37b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca37b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f37bToggle2() {
    $('#f37b').val("|f37b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca37b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f37bToggle3() {
    $('#f37b').val("|f37b,3");
        $(this).css({ "background": "#FFFFFF" });
    $('#furca37b').css("background", "none");
}
function f36bToggle0() {
    $('#f36b').val("|f36b,0");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
    $('#i36b').css({ "background": "#FFFFFF" });
    $('#furca36b').css("background", "url('/Content/images/dentista/vacio.png')");
}
function f36bToggle1() {
    $('#f36b').val("|f36b,1");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
    $('#furca36b').css("background", "url('/Content/images/dentista/mediolleno.png')");
}
function f36bToggle2() {
    $('#f36b').val("|f36b,2");
    $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
    $('#furca36b').css("background", "url('/Content/images/dentista/lleno.png')");
}
function f36bToggle3() {
    $('#f36b').val("|f36b,3");
    $(this).css({ "background": "#FFFFFF" });
    $('#furca36b').css("background", "none");
}

$('#f38b').toggle(
    function () {
        $('#f38b').val("|f38b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i38b').css({ "background": "#FFFFFF" });
        $('#furca38b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f38b').val("|f38b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca38b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f38b').val("|f38b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca38b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f38b').val("|f38b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca38b').css("background", "none");
    }
);

$('#f37b').toggle(
    function () {
        $('#f37b').val("|f37b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i37b').css({ "background": "#FFFFFF" });
        $('#furca37b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f37b').val("|f37b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca37b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f37b').val("|f37b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca37b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f37b').val("|f37b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca37b').css("background", "none");
    }
);

$('#f36b').toggle(
    function () {
        $('#f36b').val("|f36b,0");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/vacio.png') no-repeat center" });
        $('#i36b').css({ "background": "#FFFFFF" });
        $('#furca36b').css("background", "url('/Content/images/dentista/vacio.png')");
    },
    function () {
        $('#f36b').val("|f36b,1");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/mediolleno.png') no-repeat center" });
        $('#furca36b').css("background", "url('/Content/images/dentista/mediolleno.png')");
    },
    function () {
        $('#f36b').val("|f36b,2");
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/lleno.png') no-repeat center" });
        $('#furca36b').css("background", "url('/Content/images/dentista/lleno.png')");
    },
    function () {
        $('#f36b').val("|f36b,3");
        $(this).css({ "background": "#FFFFFF" });
        $('#furca36b').css("background", "none");
    }
);

//IMPLANTES TABLA INFERIOR

$('#i48b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f48').css({ "background": "#FFFFFF" });
        $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-48.png')");
        $('#diente48-a').css("background-position", "0 -4px");
        $('#diente48-a').css("background-repeat", "no-repeat");

        $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-48b.png')");
        $('#diente48b-a').css("background-position", "0 24px");
        $('#diente48b-a').css("background-repeat", "no-repeat");

        $('#furca48').css("background", "none");
        $('#furca48b').css("background", "none");
        $('#f48').css("background", "none");
        $('#f48b').css("background", "none");

        $("#f48").attr("id", "f48desact");
        $("#f48b").attr("id", "f48bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente48-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-48.png')");
        $('#diente48-a').css("background-position", "0 -4px");
        $('#diente48-a').css("background-repeat", "no-repeat");

        $('#diente48b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-48b.png')");
        $('#diente48b-a').css("background-position", "0 24px");
        $('#diente48b-a').css("background-repeat", "no-repeat");

        $('#f48').css("background", "#FFFFFF");
        $('#f48b').css("background", "#FFFFFF");

        $("#f48desact").attr("id", "f48");
        $("#f48bdesact").attr("id", "f48b");
    }
);

$('#i47b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f47').css({ "background": "#FFFFFF" });
        $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-47.png')");
        $('#diente47-a').css("background-position", "0 4px");
        $('#diente47-a').css("background-repeat", "no-repeat");

        $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-47b.png')");
        $('#diente47b-a').css("background-position", "0 22px");
        $('#diente47b-a').css("background-repeat", "no-repeat");

        $('#furca47').css("background", "none");
        $('#furca47b').css("background", "none");
        $('#f47').css("background", "none");
        $('#f47b').css("background", "none");

        $("#f47").attr("id", "f47desact");
        $("#f47b").attr("id", "f47bdesact");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente47-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-47.png')");
        $('#diente47-a').css("background-position", "0 4px");
        $('#diente47-a').css("background-repeat", "no-repeat");

        $('#diente47b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-47b.png')");
        $('#diente47b-a').css("background-position", "0 22px");
        $('#diente47b-a').css("background-repeat", "no-repeat");

        $('#f47').css("background", "#FFFFFF");
        $('#f47b').css("background", "#FFFFFF");

        $("#f47desact").attr("id", "f47");
        $("#f47bdesact").attr("id", "f47b");
    }
);

$('#i46b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f46').css({ "background": "#FFFFFF" });
        $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-46.png')");
        $('#diente46-a').css("background-position", "0 -1px");
        $('#diente46-a').css("background-repeat", "no-repeat");

        $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-46b.png')");
        $('#diente46b-a').css("background-position", "0 23px");
        $('#diente46b-a').css("background-repeat", "no-repeat");

        $('#furca46').css("background", "none");
        $('#furca46b').css("background", "none");
        $('#f46').css("background", "none");
        $('#f46b').css("background", "none");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente46-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-46.png')");
        $('#diente46-a').css("background-position", "0 -1px");
        $('#diente46-a').css("background-repeat", "no-repeat");

        $('#diente46b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-46b.png')");
        $('#diente46b-a').css("background-position", "0 23px");
        $('#diente46b-a').css("background-repeat", "no-repeat");

        $('#f46').css("background", "#FFFFFF");
        $('#f46b').css("background", "#FFFFFF");

        $("#f46desact").attr("id", "f46");
        $("#f46bdesact").attr("id", "f46b");
    }
);

$('#i45b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-45.png')");
        $('#diente45-a').css("background-position", "0 1px");
        $('#diente45-a').css("background-repeat", "no-repeat");

        $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-45b.png')");
        $('#diente45b-a').css("background-position", "0 20px");
        $('#diente45b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente45-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-45.png')");
        $('#diente45-a').css("background-position", "0 1px");
        $('#diente45-a').css("background-repeat", "no-repeat");

        $('#diente45b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-45b.png')");
        $('#diente45b-a').css("background-position", "0 20px");
        $('#diente45b-a').css("background-repeat", "no-repeat");
    }
);

$('#i44b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-44.png')");
        $('#diente44-a').css("background-position", "0 3px");
        $('#diente44-a').css("background-repeat", "no-repeat");

        $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-44b.png')");
        $('#diente44b-a').css("background-position", "0 13px");
        $('#diente44b-a').css("background-repeat", "no-repeat");

        $('#furca44-a').css("background", "none");
        $('#furca44-b').css("background", "none");
        $('#f44b-a').css("background", "none");
        $('#f44b-b').css("background", "none");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente44-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-44.png')");
        $('#diente44-a').css("background-position", "0 3px");
        $('#diente44-a').css("background-repeat", "no-repeat");

        $('#diente44b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-44b.png')");
        $('#diente44b-a').css("background-position", "0 13px");
        $('#diente44b-a').css("background-repeat", "no-repeat");

        $('#f44b-a').css("background", "#FFFFFF");
        $('#f44b-b').css("background", "#FFFFFF");
    }
);


$('#i43b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-43.png')");
        $('#diente43-a').css("background-position", "0 7px");
        $('#diente43-a').css("background-repeat", "no-repeat");

        $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-43b.png')");
        $('#diente43b-a').css("background-position", "0 12px");
        $('#diente43b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente43-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-43.png')");
        $('#diente43-a').css("background-position", "0 7px");
        $('#diente43-a').css("background-repeat", "no-repeat");

        $('#diente43b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-43b.png')");
        $('#diente43b-a').css("background-position", "0 12x");
        $('#diente43b-a').css("background-repeat", "no-repeat");
    }
);

$('#i42b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-42.png')");
        $('#diente42-a').css("background-position", "0 3px");
        $('#diente42-a').css("background-repeat", "no-repeat");

        $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-42b.png')");
        $('#diente42b-a').css("background-position", "0 15px");
        $('#diente42b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente42-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-42.png')");
        $('#diente42-a').css("background-position", "0 3px");
        $('#diente42-a').css("background-repeat", "no-repeat");

        $('#diente42b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-42b.png')");
        $('#diente42b-a').css("background-position", "0 15px");
        $('#diente42b-a').css("background-repeat", "no-repeat");
    }
);

$('#i41b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/implantes/periodontograma-dientes-abajo-tornillo-41.png')");
        $('#diente41-a').css("background-position", "0 1px");
        $('#diente41-a').css("background-repeat", "no-repeat");

        $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/implantes/periodontograma-dientes-abajo-tornillo-41b.png')");
        $('#diente41b-a').css("background-position", "0 19px");
        $('#diente41b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente41-a').css("background", "url('/Content/images/dentista/tabla5/periodontograma-dientes-abajo-41.png')");
        $('#diente41-a').css("background-position", "0 1px");
        $('#diente41-a').css("background-repeat", "no-repeat");

        $('#diente41b-a').css("background", "url('/Content/images/dentista/tabla7/periodontograma-dientes-abajo-41b.png')");
        $('#diente41b-a').css("background-position", "0 19px");
        $('#diente41b-a').css("background-repeat", "no-repeat");
    }
);

$('#i31b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f31').css({ "background": "#FFFFFF" });
        $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-31.png')");
        $('#diente31-a').css("background-position", "0 1px");
        $('#diente31-a').css("background-repeat", "no-repeat");

        $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-31b.png')");
        $('#diente31b-a').css("background-position", "0 19px");
        $('#diente31b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-31.png')");
        $('#diente31-a').css("background-position", "0 1px");
        $('#diente31-a').css("background-repeat", "no-repeat");

        $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-31b.png')");
        $('#diente31b-a').css("background-position", "0 19px");
        $('#diente31b-a').css("background-repeat", "no-repeat");
    }
);

$('#i32b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f32').css({ "background": "#FFFFFF" });
        $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-32.png')");
        $('#diente32-a').css("background-position", "0 3px");
        $('#diente32-a').css("background-repeat", "no-repeat");

        $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-32b.png')");
        $('#diente32b-a').css("background-position", "0px 15px");
        $('#diente32b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-32.png')");
        $('#diente32-a').css("background-position", "0px 3px");
        $('#diente32-a').css("background-repeat", "no-repeat");

        $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-32b.png')");
        $('#diente32b-a').css("background-position", "0px 15px");
        $('#diente32b-a').css("background-repeat", "no-repeat");
    }
);

$('#i33b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#f33').css({ "background": "#FFFFFF" });
        $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-33.png')");
        $('#diente33-a').css("background-position", "0 7px");
        $('#diente33-a').css("background-repeat", "no-repeat");

        $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-33b.png')");
        $('#diente33b-a').css("background-position", "0 12px");
        $('#diente33b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-33.png')");
        $('#diente33-a').css("background-position", "0 7px");
        $('#diente33-a').css("background-repeat", "no-repeat");

        $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-33b.png')");
        $('#diente33b-a').css("background-position", "0 12px");
        $('#diente33b-a').css("background-repeat", "no-repeat");
    }
);

$('#i34b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-34.png')");
        $('#diente34-a').css("background-position", "0 5px");
        $('#diente34-a').css("background-repeat", "no-repeat");

        $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-34b.png')");
        $('#diente34b-a').css("background-repeat", "no-repeat");
        $('#diente34b-a').css("background-position", "0 13px");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-34.png')");
        $('#diente34-a').css("background-position", "0 5px");
        $('#diente34-a').css("background-repeat", "no-repeat");

        $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-34b.png')");
        $('#diente34b-a').css("background-repeat", "no-repeat");
        $('#diente34b-a').css("background-position", "0 13px");
    }
);

$('#i35b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-35.png')");
        $('#diente35-a').css("background-position", "0 1px");
        $('#diente35-a').css("background-repeat", "no-repeat");

        $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-35b.png')");
        $('#diente35b-a').css("background-position", "0 20px");
        $('#diente35b-a').css("background-repeat", "no-repeat");
    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-35.png')");
        $('#diente35-a').css("background-position", "0 1px");
        $('#diente35-a').css("background-repeat", "no-repeat");

        $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-35b.png')");
        $('#diente35b-a').css("background-position", "0 20px");
        $('#diente35b-a').css("background-repeat", "no-repeat");
    }
);

$('#i36b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-36.png')");
        $('#diente36-a').css("background-position", "top");
        $('#diente36-a').css("background-repeat", "no-repeat");

        $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-36b.png')");
        $('#diente36b-a').css("background-position", "0 23px");
        $('#diente36b-a').css("background-repeat", "no-repeat");

        $('#furca36').css("background", "none");
        $('#furca36b').css("background", "none");
        $('#f36').css("background", "none");
        $('#f36b').css("background", "none");

        $("#f36").attr("id", "f36desact");
        $("#f36b").attr("id", "f36bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-36.png')");
        $('#diente36-a').css("background-position", "top");
        $('#diente36-a').css("background-repeat", "no-repeat");

        $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-36b.png')");
        $('#diente36b-a').css("background-position", "0 23px");
        $('#diente36b-a').css("background-repeat", "no-repeat");

        $('#f36').css("background", "#FFFFFF");
        $('#f36b').css("background", "#FFFFFF");

        $("#f36desact").attr("id", "f36");
        $("#f36bdesact").attr("id", "f36b");
    }
);

$('#i37b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-37.png')");
        $('#diente37-a').css("background-repeat", "no-repeat");
        $('#diente37-a').css("background-position", " 0px -4px");

        $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-37b.png')");
        $('#diente37b-a').css("background-repeat", "no-repeat");
        $('#diente37b-a').css("background-position", "0 21px");

        $('#furca37').css("background", "none");
        $('#furca37b').css("background", "none");
        $('#f37').css("background", "none");
        $('#f37b').css("background", "none");

        $("#f37").attr("id", "f37desact");
        $("#f37b").attr("id", "f37bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-37.png')");
        $('#diente37-a').css("background-repeat", "no-repeat");
        $('#diente37-a').css("background-position", " 0px -4px");

        $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-37b.png')");
        $('#diente37b-a').css("background-repeat", "no-repeat");
        $('#diente37b-a').css("background-position", "0 21px");

        $('#f37').css("background", "#FFFFFF");
        $('#f37b').css("background", "#FFFFFF");

        $("#f37desact").attr("id", "f37");
        $("#f37bdesact").attr("id", "f37b");
    }
);


$('#i38b').toggle(
    function () {
        $(this).css({ "background": "#FFFFFF url('/Content/images/dentista/cuadrado.png') no-repeat center" });
        $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/implantes/periodontograma-dientes-abajo-tornillo-38.png')");
        $('#diente38-a').css("background-position", "0 -3px");
        $('#diente38-a').css("background-repeat", "no-repeat");

        $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/implantes/periodontograma-dientes-abajo-tornillo-38b.png')");
        $('#diente38b-a').css("background-position", "0 24px");
        $('#diente38b-a').css("background-repeat", "no-repeat");

        $('#furca38').css("background", "none");
        $('#furca38b').css("background", "none");
        $('#f38').css("background", "none");
        $('#f38b').css("background", "none");

        $("#f38").attr("id", "f38desact");
        $("#f38b").attr("id", "f38bdesact");

    },
    function () {
        $(this).css({ "background": "url('/Content/images/dentista/periodontograma-oblicuas.png') repeat-x center" });
        $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-38.png')");
        $('#diente38-a').css("background-position", "0 -3px");
        $('#diente38-a').css("background-repeat", "no-repeat");

        $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-38b.png')");
        $('#diente38b-a').css("background-position", "0 24px");
        $('#diente38b-a').css("background-repeat", "no-repeat");

        $('#f38').css("background", "#FFFFFF");
        $('#f38b').css("background", "#FFFFFF");

        $("#f38desact").attr("id", "f38");
        $("#f38bdesact").attr("id", "f38b");
    }
);

//TACHADOS TABLA 8
function d31bToggleON() {
    $('#d31b').val("|d31b,0");
    $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-31b.png')");
    $('#diente31b-a').css("background-position", "0 19px");
    $('#diente31b-a').css("background-repeat", "no-repeat");
    $('#m31b').css("display", "none");
    $('#i31b').css("display", "none");
    $('#f31b').css("display", "none");
    $('#s31b-a').css("display", "none");
    $('#s31b-b').css("display", "none");
    $('#s31b-c').css("display", "none");
    $('#p31b-a').css("display", "none");
    $('#p31b-b').css("display", "none");
    $('#p31b-c').css("display", "none");
    $('#mg31b-a').css("display", "none");
    $('#mg31b-b').css("display", "none");
    $('#mg31b-c').css("display", "none");
    $('#ps31b-a').css("display", "none");
    $('#ps31b-b').css("display", "none");
    $('#ps31b-c').css("display", "none");
    $('#mg31b-a').val('0');
    $('#mg31b-b').val('0');
    $('#mg31b-c').val('0');
    $('#ps31b-a').val('0');
    $('#ps31b-b').val('0');
    $('#ps31b-c').val('0');

    $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-31.png')");
    $('#diente31-a').css("background-position", "0 1px");
    $('#diente31-a').css("background-repeat", "no-repeat");
    $('#m31').css("display", "none");
    $('#i31').css("display", "none");
    $('#f31').css("display", "none");
    $('#s31-a').css("display", "none");
    $('#s31-b').css("display", "none");
    $('#s31-c').css("display", "none");
    $('#p31-a').css("display", "none");
    $('#p31-b').css("display", "none");
    $('#p31-c').css("display", "none");
    $('#mg31-a').css("display", "none");
    $('#mg31-b').css("display", "none");
    $('#mg31-c').css("display", "none");
    $('#ps31-a').css("display", "none");
    $('#ps31-b').css("display", "none");
    $('#ps31-c').css("display", "none");
    $('#mg31-a').val('0');
    $('#mg31-b').val('0');
    $('#mg31-c').val('0');
    $('#ps31-a').val('0');
    $('#ps31-b').val('0');
    $('#ps31-c').val('0');
    $('#ae31').css("display", "none");
    $('#pi31').css("display", "none");
}
function d31bToggleOUT() {
    $('#d31b').val("|d31b,1");
    $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-31b.png')");
    $('#diente31b-a').css("background-position", "0 19px");
    $('#diente31b-a').css("background-repeat", "no-repeat");
    $('#m31b').css("display", "inline");
    $('#i31b').css("display", "block");
    $('#f31b').css("display", "inline");
    $('#s31b-a').css("display", "inline");
    $('#s31b-b').css("display", "inline");
    $('#s31b-c').css("display", "inline");
    $('#p31b-a').css("display", "inline");
    $('#p31b-b').css("display", "inline");
    $('#p31b-c').css("display", "inline");
    $('#mg31b-a').css("display", "inline");
    $('#mg31b-b').css("display", "inline");
    $('#mg31b-c').css("display", "inline");
    $('#ps31b-a').css("display", "inline");
    $('#ps31b-b').css("display", "inline");
    $('#ps31b-c').css("display", "inline");

    $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-31.png')");
    $('#diente31-a').css("background-position", "0 1px");
    $('#diente31-a').css("background-repeat", "no-repeat");
    $('#m31').css("display", "inline");
    $('#i31').css("display", "inline");
    $('#f31').css("display", "inline");
    $('#s31-a').css("display", "inline");
    $('#s31-b').css("display", "inline");
    $('#s31-c').css("display", "inline");
    $('#p31-a').css("display", "inline");
    $('#p31-b').css("display", "inline");
    $('#p31-c').css("display", "inline");
    $('#mg31-a').css("display", "inline");
    $('#mg31-b').css("display", "inline");
    $('#mg31-c').css("display", "inline");
    $('#ps31-a').css("display", "inline");
    $('#ps31-b').css("display", "inline");
    $('#ps31-c').css("display", "inline");
    $('#ae31').css("display", "inline");
    $('#pi31').css("display", "inline");

}

function d32bToggleON() {
    $('#d32b').val("|d32b,0");
    $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-32b.png')");
    $('#diente32b-a').css("background-position", "0px 15px");
    $('#diente32b-a').css("background-repeat", "no-repeat");
    $('#m32b').css("display", "none");
    $('#i32b').css("display", "none");
    $('#f32b').css("display", "none");
    $('#s32b-a').css("display", "none");
    $('#s32b-b').css("display", "none");
    $('#s32b-c').css("display", "none");
    $('#p32b-a').css("display", "none");
    $('#p32b-b').css("display", "none");
    $('#p32b-c').css("display", "none");
    $('#mg32b-a').css("display", "none");
    $('#mg32b-b').css("display", "none");
    $('#mg32b-c').css("display", "none");
    $('#ps32b-a').css("display", "none");
    $('#ps32b-b').css("display", "none");
    $('#ps32b-c').css("display", "none");
    $('#mg32b-a').val('0');
    $('#mg32b-b').val('0');
    $('#mg32b-c').val('0');
    $('#ps32b-a').val('0');
    $('#ps32b-b').val('0');
    $('#ps32b-c').val('0');

    $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-32.png')");
    $('#diente32-a').css("background-position", "0px 3px");
    $('#diente32-a').css("background-repeat", "no-repeat");
    $('#m32').css("display", "none");
    $('#i32').css("display", "none");
    $('#f32').css("display", "none");
    $('#s32-a').css("display", "none");
    $('#s32-b').css("display", "none");
    $('#s32-c').css("display", "none");
    $('#p32-a').css("display", "none");
    $('#p32-b').css("display", "none");
    $('#p32-c').css("display", "none");
    $('#mg32-a').css("display", "none");
    $('#mg32-b').css("display", "none");
    $('#mg32-c').css("display", "none");
    $('#ps32-a').css("display", "none");
    $('#ps32-b').css("display", "none");
    $('#ps32-c').css("display", "none");
    $('#mg32-a').val('0');
    $('#mg32-b').val('0');
    $('#mg32-c').val('0');
    $('#ps32-a').val('0');
    $('#ps32-b').val('0');
    $('#ps32-c').val('0');
    $('#ae32').css("display", "none");
    $('#pi32').css("display", "none");

}
function d32bToggleOUT() {
    $('#d32b').val("|d32b,1");
    $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-32b.png')");
    $('#diente32b-a').css("background-position", "0px 15px");
    $('#diente32b-a').css("background-repeat", "no-repeat");
    $('#m32b').css("display", "inline");
    $('#i32b').css("display", "block");
    $('#f32b').css("display", "inline");
    $('#s32b-a').css("display", "inline");
    $('#s32b-b').css("display", "inline");
    $('#s32b-c').css("display", "inline");
    $('#p32b-a').css("display", "inline");
    $('#p32b-b').css("display", "inline");
    $('#p32b-c').css("display", "inline");
    $('#mg32b-a').css("display", "inline");
    $('#mg32b-b').css("display", "inline");
    $('#mg32b-c').css("display", "inline");
    $('#ps32b-a').css("display", "inline");
    $('#ps32b-b').css("display", "inline");
    $('#ps32b-c').css("display", "inline");

    $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-32.png')");
    $('#diente32-a').css("background-position", "0px 3px");
    $('#diente32-a').css("background-repeat", "no-repeat");
    $('#m32').css("display", "inline");
    $('#i32').css("display", "inline");
    $('#f32').css("display", "inline");
    $('#s32-a').css("display", "inline");
    $('#s32-b').css("display", "inline");
    $('#s32-c').css("display", "inline");
    $('#p32-a').css("display", "inline");
    $('#p32-b').css("display", "inline");
    $('#p32-c').css("display", "inline");
    $('#mg32-a').css("display", "inline");
    $('#mg32-b').css("display", "inline");
    $('#mg32-c').css("display", "inline");
    $('#ps32-a').css("display", "inline");
    $('#ps32-b').css("display", "inline");
    $('#ps32-c').css("display", "inline");
    $('#ae32').css("display", "inline");
    $('#pi32').css("display", "inline");

}

function d33bToggleON() {
    $('#d33b').val("|d33b,0");
    $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-33b.png')");
    $('#diente33b-a').css("background-position", "0 12px");
    $('#diente33b-a').css("background-repeat", "no-repeat");
    $('#m33b').css("display", "none");
    $('#i33b').css("display", "none");
    $('#f33b').css("display", "none");
    $('#s33b-a').css("display", "none");
    $('#s33b-b').css("display", "none");
    $('#s33b-c').css("display", "none");
    $('#p33b-a').css("display", "none");
    $('#p33b-b').css("display", "none");
    $('#p33b-c').css("display", "none");
    $('#mg33b-a').css("display", "none");
    $('#mg33b-b').css("display", "none");
    $('#mg33b-c').css("display", "none");
    $('#ps33b-a').css("display", "none");
    $('#ps33b-b').css("display", "none");
    $('#ps33b-c').css("display", "none");
    $('#mg33b-a').val('0');
    $('#mg33b-b').val('0');
    $('#mg33b-c').val('0');
    $('#ps33b-a').val('0');
    $('#ps33b-b').val('0');
    $('#ps33b-c').val('0');

    $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-33.png')");
    $('#diente33-a').css("background-position", "0 7px");
    $('#diente33-a').css("background-repeat", "no-repeat");
    $('#m33').css("display", "none");
    $('#i33').css("display", "none");
    $('#f33').css("display", "none");
    $('#s33-a').css("display", "none");
    $('#s33-b').css("display", "none");
    $('#s33-c').css("display", "none");
    $('#p33-a').css("display", "none");
    $('#p33-b').css("display", "none");
    $('#p33-c').css("display", "none");
    $('#mg33-a').css("display", "none");
    $('#mg33-b').css("display", "none");
    $('#mg33-c').css("display", "none");
    $('#ps33-a').css("display", "none");
    $('#ps33-b').css("display", "none");
    $('#ps33-c').css("display", "none");
    $('#mg33-a').val('0');
    $('#mg33-b').val('0');
    $('#mg33-c').val('0');
    $('#ps33-a').val('0');
    $('#ps33-b').val('0');
    $('#ps33-c').val('0');
    $('#ae33').css("display", "none");
    $('#pi33').css("display", "none");
}
function d33bToggleOUT() {
    $('#d33b').val("|d33b,1");
    $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-33b.png')");
    $('#diente33b-a').css("background-position", "0 12px");
    $('#diente33b-a').css("background-repeat", "no-repeat");
    $('#m33b').css("display", "inline");
    $('#i33b').css("display", "block");
    $('#f33b').css("display", "inline");
    $('#s33b-a').css("display", "inline");
    $('#s33b-b').css("display", "inline");
    $('#s33b-c').css("display", "inline");
    $('#p33b-a').css("display", "inline");
    $('#p33b-b').css("display", "inline");
    $('#p33b-c').css("display", "inline");
    $('#mg33b-a').css("display", "inline");
    $('#mg33b-b').css("display", "inline");
    $('#mg33b-c').css("display", "inline");
    $('#ps33b-a').css("display", "inline");
    $('#ps33b-b').css("display", "inline");
    $('#ps33b-c').css("display", "inline");

    $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-33.png')");
    $('#diente33-a').css("background-position", "0 7px");
    $('#diente33-a').css("background-repeat", "no-repeat");
    $('#m33').css("display", "inline");
    $('#i33').css("display", "inline");
    $('#f33').css("display", "inline");
    $('#s33-a').css("display", "inline");
    $('#s33-b').css("display", "inline");
    $('#s33-c').css("display", "inline");
    $('#p33-a').css("display", "inline");
    $('#p33-b').css("display", "inline");
    $('#p33-c').css("display", "inline");
    $('#mg33-a').css("display", "inline");
    $('#mg33-b').css("display", "inline");
    $('#mg33-c').css("display", "inline");
    $('#ps33-a').css("display", "inline");
    $('#ps33-b').css("display", "inline");
    $('#ps33-c').css("display", "inline");
    $('#ae33').css("display", "inline");
    $('#pi33').css("display", "inline");

}

function d34bToggleON() {
    $('#d34b').val("|d34b,0");
    $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-34b.png')");
    $('#diente34b-a').css("background-position", "0 13px");
    $('#diente34b-a').css("background-repeat", "no-repeat");
    $('#m34b').css("display", "none");
    $('#i34b').css("display", "none");
    $('#f34b').css("display", "none");
    $('#s34b-a').css("display", "none");
    $('#s34b-b').css("display", "none");
    $('#s34b-c').css("display", "none");
    $('#p34b-a').css("display", "none");
    $('#p34b-b').css("display", "none");
    $('#p34b-c').css("display", "none");
    $('#mg34b-a').css("display", "none");
    $('#mg34b-b').css("display", "none");
    $('#mg34b-c').css("display", "none");
    $('#ps34b-a').css("display", "none");
    $('#ps34b-b').css("display", "none");
    $('#ps34b-c').css("display", "none");
    $('#mg34b-a').val('0');
    $('#mg34b-b').val('0');
    $('#mg34b-c').val('0');
    $('#ps34b-a').val('0');
    $('#ps34b-b').val('0');
    $('#ps34b-c').val('0');

    $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-34.png')");
    $('#diente34-a').css("background-position", "0 5px");
    $('#diente34-a').css("background-repeat", "no-repeat");
    $('#m34').css("display", "none");
    $('#i34').css("display", "none");
    $('#f34').css("display", "none");
    $('#s34-a').css("display", "none");
    $('#s34-b').css("display", "none");
    $('#s34-c').css("display", "none");
    $('#p34-a').css("display", "none");
    $('#p34-b').css("display", "none");
    $('#p34-c').css("display", "none");
    $('#mg34-a').css("display", "none");
    $('#mg34-b').css("display", "none");
    $('#mg34-c').css("display", "none");
    $('#ps34-a').css("display", "none");
    $('#ps34-b').css("display", "none");
    $('#ps34-c').css("display", "none");
    $('#mg34-a').val('0');
    $('#mg34-b').val('0');
    $('#mg34-c').val('0');
    $('#ps34-a').val('0');
    $('#ps34-b').val('0');
    $('#ps34-c').val('0');
    $('#furca34b-b').css("display", "none");
    $('#furca34b-a').css("display", "none");
    $('#f34-a').css("display", "none");
    $('#f34-b').css("display", "none");
    $('#ae34').css("display", "none");
    $('#pi34').css("display", "none");

}
function d34bToggleOUT() {
    $('#d34b').val("|d34b,1");
    $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-34b.png')");
    $('#diente34b-a').css("background-position", "0 13px");
    $('#diente34b-a').css("background-repeat", "no-repeat");
    $('#m34b').css("display", "inline");
    $('#i34b').css("display", "block");
    $('#f34b').css("display", "inline");
    $('#s34b-a').css("display", "inline");
    $('#s34b-b').css("display", "inline");
    $('#s34b-c').css("display", "inline");
    $('#p34b-a').css("display", "inline");
    $('#p34b-b').css("display", "inline");
    $('#p34b-c').css("display", "inline");
    $('#mg34b-a').css("display", "inline");
    $('#mg34b-b').css("display", "inline");
    $('#mg34b-c').css("display", "inline");
    $('#ps34b-a').css("display", "inline");
    $('#ps34b-b').css("display", "inline");
    $('#ps34b-c').css("display", "inline");

    $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-34.png')");
    $('#diente34-a').css("background-position", "0 5px");
    $('#diente34-a').css("background-repeat", "no-repeat");
    $('#m34').css("display", "inline");
    $('#i34').css("display", "inline");
    $('#f34').css("display", "inline");
    $('#s34-a').css("display", "inline");
    $('#s34-b').css("display", "inline");
    $('#s34-c').css("display", "inline");
    $('#p34-a').css("display", "inline");
    $('#p34-b').css("display", "inline");
    $('#p34-c').css("display", "inline");
    $('#mg34-a').css("display", "inline");
    $('#mg34-b').css("display", "inline");
    $('#mg34-c').css("display", "inline");
    $('#ps34-a').css("display", "inline");
    $('#ps34-b').css("display", "inline");
    $('#ps34-c').css("display", "inline");
    $('#furca34b-b').css("display", "inline");
    $('#furca34b-a').css("display", "inline");
    $('#f34-a').css("display", "inline");
    $('#f34-b').css("display", "inline");
    $('#ae34').css("display", "inline");
    $('#pi34').css("display", "inline");

}

function d35bToggleON() {
    $('#d35b').val("|d35b,0");
    $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-35b.png')");
    $('#diente35b-a').css("background-position", "0 20px");
    $('#diente35b-a').css("background-repeat", "no-repeat");
    $('#m35b').css("display", "none");
    $('#i35b').css("display", "none");
    $('#f35b').css("display", "none");
    $('#s35b-a').css("display", "none");
    $('#s35b-b').css("display", "none");
    $('#s35b-c').css("display", "none");
    $('#p35b-a').css("display", "none");
    $('#p35b-b').css("display", "none");
    $('#p35b-c').css("display", "none");
    $('#mg35b-a').css("display", "none");
    $('#mg35b-b').css("display", "none");
    $('#mg35b-c').css("display", "none");
    $('#ps35b-a').css("display", "none");
    $('#ps35b-b').css("display", "none");
    $('#ps35b-c').css("display", "none");
    $('#mg35b-a').val('0');
    $('#mg35b-b').val('0');
    $('#mg35b-c').val('0');
    $('#ps35b-a').val('0');
    $('#ps35b-b').val('0');
    $('#ps35b-c').val('0');

    $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-35.png')");
    $('#diente35-a').css("background-position", "0 1px");
    $('#diente35-a').css("background-repeat", "no-repeat");
    $('#m35').css("display", "none");
    $('#i35').css("display", "none");
    $('#f35').css("display", "none");
    $('#s35-a').css("display", "none");
    $('#s35-b').css("display", "none");
    $('#s35-c').css("display", "none");
    $('#p35-a').css("display", "none");
    $('#p35-b').css("display", "none");
    $('#p35-c').css("display", "none");
    $('#mg35-a').css("display", "none");
    $('#mg35-b').css("display", "none");
    $('#mg35-c').css("display", "none");
    $('#ps35-a').css("display", "none");
    $('#ps35-b').css("display", "none");
    $('#ps35-c').css("display", "none");
    $('#mg35-a').val('0');
    $('#mg35-b').val('0');
    $('#mg35-c').val('0');
    $('#ps35-a').val('0');
    $('#ps35-b').val('0');
    $('#ps35-c').val('0');
    $('#ae35').css("display", "none");
    $('#pi35').css("display", "none");

}
function d35bToggleOUT() {
    $('#d35b').val("|d35b,1");
    $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-35b.png')");
    $('#diente35b-a').css("background-position", "0 20px");
    $('#diente35b-a').css("background-repeat", "no-repeat");
    $('#m35b').css("display", "inline");
    $('#i35b').css("display", "block");
    $('#f35b').css("display", "inline");
    $('#s35b-a').css("display", "inline");
    $('#s35b-b').css("display", "inline");
    $('#s35b-c').css("display", "inline");
    $('#p35b-a').css("display", "inline");
    $('#p35b-b').css("display", "inline");
    $('#p35b-c').css("display", "inline");
    $('#mg35b-a').css("display", "inline");
    $('#mg35b-b').css("display", "inline");
    $('#mg35b-c').css("display", "inline");
    $('#ps35b-a').css("display", "inline");
    $('#ps35b-b').css("display", "inline");
    $('#ps35b-c').css("display", "inline");

    $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-35.png')");
    $('#diente35-a').css("background-position", "0 1px");
    $('#diente35-a').css("background-repeat", "no-repeat");
    $('#m35').css("display", "inline");
    $('#i35').css("display", "inline");
    $('#f35').css("display", "inline");
    $('#s35-a').css("display", "inline");
    $('#s35-b').css("display", "inline");
    $('#s35-c').css("display", "inline");
    $('#p35-a').css("display", "inline");
    $('#p35-b').css("display", "inline");
    $('#p35-c').css("display", "inline");
    $('#mg35-a').css("display", "inline");
    $('#mg35-b').css("display", "inline");
    $('#mg35-c').css("display", "inline");
    $('#ps35-a').css("display", "inline");
    $('#ps35-b').css("display", "inline");
    $('#ps35-c').css("display", "inline");
    $('#ae35').css("display", "inline");
    $('#pi35').css("display", "inline");

}

function d36bToggleON() {
    $('#d36b').val("|d36b,0");
    $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-36b.png')");
    $('#diente36b-a').css("background-position", "0 23px");
    $('#diente36b-a').css("background-repeat", "no-repeat");
    $('#m36b').css("display", "none");
    $('#i36b').css("display", "none");
    $('#f36b').css("display", "none");
    $('#s36b-a').css("display", "none");
    $('#s36b-b').css("display", "none");
    $('#s36b-c').css("display", "none");
    $('#p36b-a').css("display", "none");
    $('#p36b-b').css("display", "none");
    $('#p36b-c').css("display", "none");
    $('#mg36b-a').css("display", "none");
    $('#mg36b-b').css("display", "none");
    $('#mg36b-c').css("display", "none");
    $('#ps36b-a').css("display", "none");
    $('#ps36b-b').css("display", "none");
    $('#ps36b-c').css("display", "none");
    /*$('#furca36b').css("background","none");*/
    $('#mg36b-a').val('0');
    $('#mg36b-b').val('0');
    $('#mg36b-c').val('0');
    $('#ps36b-a').val('0');
    $('#ps36b-b').val('0');
    $('#ps36b-c').val('0');

    $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-36.png')");
    $('#diente36-a').css("background-position", "top");
    $('#diente36-a').css("background-repeat", "no-repeat");
    $('#m36').css("display", "none");
    $('#i36').css("display", "none");
    $('#f36').css("display", "none");
    $('#s36-a').css("display", "none");
    $('#s36-b').css("display", "none");
    $('#s36-c').css("display", "none");
    $('#p36-a').css("display", "none");
    $('#p36-b').css("display", "none");
    $('#p36-c').css("display", "none");
    $('#mg36-a').css("display", "none");
    $('#mg36-b').css("display", "none");
    $('#mg36-c').css("display", "none");
    $('#ps36-a').css("display", "none");
    $('#ps36-b').css("display", "none");
    $('#ps36-c').css("display", "none");
    /*$('#furca36').css("background","none");*/
    $('#mg36-a').val('0');
    $('#mg36-b').val('0');
    $('#mg36-c').val('0');
    $('#ps36-a').val('0');
    $('#ps36-b').val('0');
    $('#ps36-c').val('0');
    $('#furca36b-b').css("display", "none");
    $('#furca36b-a').css("display", "none");
    $('#f36-a').css("display", "none");
    $('#f36-b').css("display", "none");
    $('#furca36').css("display", "none");
    $('#furca36b').css("display", "none");
    $('#ae36').css("display", "none");
    $('#pi36').css("display", "none");

}
function d36bToggleOUT() {
    $('#d36b').val("|d36b,1");
    $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-36b.png')");
    $('#diente36b-a').css("background-position", "0 23px");
    $('#diente36b-a').css("background-repeat", "no-repeat");
    $('#m36b').css("display", "inline");
    $('#i36b').css("display", "block");
    $('#f36b').css("display", "inline");
    $('#s36b-a').css("display", "inline");
    $('#s36b-b').css("display", "inline");
    $('#s36b-c').css("display", "inline");
    $('#p36b-a').css("display", "inline");
    $('#p36b-b').css("display", "inline");
    $('#p36b-c').css("display", "inline");
    $('#mg36b-a').css("display", "inline");
    $('#mg36b-b').css("display", "inline");
    $('#mg36b-c').css("display", "inline");
    $('#ps36b-a').css("display", "inline");
    $('#ps36b-b').css("display", "inline");
    $('#ps36b-c').css("display", "inline");

    $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-36.png')");
    $('#diente36-a').css("background-position", "top");
    $('#diente36-a').css("background-repeat", "no-repeat");
    $('#m36').css("display", "inline");
    $('#i36').css("display", "inline");
    $('#f36').css("display", "inline");
    $('#s36-a').css("display", "inline");
    $('#s36-b').css("display", "inline");
    $('#s36-c').css("display", "inline");
    $('#p36-a').css("display", "inline");
    $('#p36-b').css("display", "inline");
    $('#p36-c').css("display", "inline");
    $('#mg36-a').css("display", "inline");
    $('#mg36-b').css("display", "inline");
    $('#mg36-c').css("display", "inline");
    $('#ps36-a').css("display", "inline");
    $('#ps36-b').css("display", "inline");
    $('#ps36-c').css("display", "inline");
    $('#furca36b-b').css("display", "inline");
    $('#furca36b-a').css("display", "inline");
    $('#f36-a').css("display", "inline");
    $('#f36-b').css("display", "inline");
    $('#furca36').css("display", "block");
    $('#furca36b').css("display", "block");
    $('#ae36').css("display", "inline");
    $('#pi36').css("display", "inline");

}

function d37bToggleON() {
    $('#d37b').val("|d37b,0");
    $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-37b.png')");
    $('#diente37b-a').css("background-position", "0px 21px");
    $('#diente37b-a').css("background-repeat", "no-repeat");
    $('#m37b').css("display", "none");
    $('#i37b').css("display", "none");
    $('#f37b').css("display", "none");
    $('#s37b-a').css("display", "none");
    $('#s37b-b').css("display", "none");
    $('#s37b-c').css("display", "none");
    $('#p37b-a').css("display", "none");
    $('#p37b-b').css("display", "none");
    $('#p37b-c').css("display", "none");
    $('#mg37b-a').css("display", "none");
    $('#mg37b-b').css("display", "none");
    $('#mg37b-c').css("display", "none");
    $('#ps37b-a').css("display", "none");
    $('#ps37b-b').css("display", "none");
    $('#ps37b-c').css("display", "none");
    /*$('#furca37b').css("background","none");*/
    $('#mg37b-a').val('0');
    $('#mg37b-b').val('0');
    $('#mg37b-c').val('0');
    $('#ps37b-a').val('0');
    $('#ps37b-b').val('0');
    $('#ps37b-c').val('0');

    $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-37.png')");
    $('#diente37-a').css("background-position", "0px -4px");
    $('#diente37-a').css("background-repeat", "no-repeat");
    $('#m37').css("display", "none");
    $('#i37').css("display", "none");
    $('#f37').css("display", "none");
    $('#s37-a').css("display", "none");
    $('#s37-b').css("display", "none");
    $('#s37-c').css("display", "none");
    $('#p37-a').css("display", "none");
    $('#p37-b').css("display", "none");
    $('#p37-c').css("display", "none");
    $('#mg37-a').css("display", "none");
    $('#mg37-b').css("display", "none");
    $('#mg37-c').css("display", "none");
    $('#ps37-a').css("display", "none");
    $('#ps37-b').css("display", "none");
    $('#ps37-c').css("display", "none");
    /*$('#furca37').css("background","none");*/
    $('#mg37-a').val('0');
    $('#mg37-b').val('0');
    $('#mg37-c').val('0');
    $('#ps37-a').val('0');
    $('#ps37-b').val('0');
    $('#ps37-c').val('0');
    $('#furca37b-b').css("display", "none");
    $('#furca37b-a').css("display", "none");
    $('#f37-a').css("display", "none");
    $('#f37-b').css("display", "none");
    $('#furca37').css("display", "none");
    $('#furca37b').css("display", "none");
    $('#ae37').css("display", "none");
    $('#pi37').css("display", "none");
}
function d37bToggleOUT() {
    $('#d37b').val("|d37b,1");
    $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-37b.png')");
    $('#diente37b-a').css("background-position", "0px 21px");
    $('#diente37b-a').css("background-repeat", "no-repeat");
    $('#m37b').css("display", "inline");
    $('#i37b').css("display", "block");
    $('#f37b').css("display", "inline");
    $('#s37b-a').css("display", "inline");
    $('#s37b-b').css("display", "inline");
    $('#s37b-c').css("display", "inline");
    $('#p37b-a').css("display", "inline");
    $('#p37b-b').css("display", "inline");
    $('#p37b-c').css("display", "inline");
    $('#mg37b-a').css("display", "inline");
    $('#mg37b-b').css("display", "inline");
    $('#mg37b-c').css("display", "inline");
    $('#ps37b-a').css("display", "inline");
    $('#ps37b-b').css("display", "inline");
    $('#ps37b-c').css("display", "inline");

    $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-37.png')");
    $('#diente37-a').css("background-position", "0px -4px");
    $('#diente37-a').css("background-repeat", "no-repeat");
    $('#m37').css("display", "inline");
    $('#i37').css("display", "inline");
    $('#f37').css("display", "inline");
    $('#s37-a').css("display", "inline");
    $('#s37-b').css("display", "inline");
    $('#s37-c').css("display", "inline");
    $('#p37-a').css("display", "inline");
    $('#p37-b').css("display", "inline");
    $('#p37-c').css("display", "inline");
    $('#mg37-a').css("display", "inline");
    $('#mg37-b').css("display", "inline");
    $('#mg37-c').css("display", "inline");
    $('#ps37-a').css("display", "inline");
    $('#ps37-b').css("display", "inline");
    $('#ps37-c').css("display", "inline");
    $('#furca37b-b').css("display", "inline");
    $('#furca37b-a').css("display", "inline");
    $('#f37-a').css("display", "inline");
    $('#f37-b').css("display", "inline");
    $('#furca37').css("display", "block");
    $('#furca37b').css("display", "block");
    $('#ae37').css("display", "inline");
    $('#pi37').css("display", "inline");

}

function d38bToggleON() {
    $('#d38b').val("|d38b,0");
    $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-38b.png')");
    $('#diente38b-a').css("background-position", "0 24px");
    $('#diente38b-a').css("background-repeat", "no-repeat");
    $('#m38b').css("display", "none");
    $('#i38b').css("display", "none");
    $('#f38b').css("display", "none");
    $('#s38b-a').css("display", "none");
    $('#s38b-b').css("display", "none");
    $('#s38b-c').css("display", "none");
    $('#p38b-a').css("display", "none");
    $('#p38b-b').css("display", "none");
    $('#p38b-c').css("display", "none");
    $('#mg38b-a').css("display", "none");
    $('#mg38b-b').css("display", "none");
    $('#mg38b-c').css("display", "none");
    $('#ps38b-a').css("display", "none");
    $('#ps38b-b').css("display", "none");
    $('#ps38b-c').css("display", "none");
    /*$('#furca38b').css("background","none");*/
    $('#mg38b-a').val('0');
    $('#mg38b-b').val('0');
    $('#mg38b-c').val('0');
    $('#ps38b-a').val('0');
    $('#ps38b-b').val('0');
    $('#ps38b-c').val('0');

    $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-38.png')");
    $('#diente38-a').css("background-position", "0 -3px");
    $('#diente38-a').css("background-repeat", "no-repeat");
    $('#m38').css("display", "none");
    $('#i38').css("display", "none");
    $('#f38').css("display", "none");
    $('#s38-a').css("display", "none");
    $('#s38-b').css("display", "none");
    $('#s38-c').css("display", "none");
    $('#p38-a').css("display", "none");
    $('#p38-b').css("display", "none");
    $('#p38-c').css("display", "none");
    $('#mg38-a').css("display", "none");
    $('#mg38-b').css("display", "none");
    $('#mg38-c').css("display", "none");
    $('#ps38-a').css("display", "none");
    $('#ps38-b').css("display", "none");
    $('#ps38-c').css("display", "none");
    /*$('#furca38').css("background","none");*/
    $('#mg38-a').val('0');
    $('#mg38-b').val('0');
    $('#mg38-c').val('0');
    $('#ps38-a').val('0');
    $('#ps38-b').val('0');
    $('#ps38-c').val('0');
    $('#furca38b-b').css("display", "none");
    $('#furca38b-a').css("display", "none");
    $('#f38-a').css("display", "none");
    $('#f38-b').css("display", "none");
    $('#furca38').css("display", "none");
    $('#furca38b').css("display", "none");
    $('#ae38').css("display", "none");
    $('#pi38').css("display", "none");
}
function d38bToggleOUT() {
    $('#d38b').val("|d38b,1");
    $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-38b.png')");
    $('#diente38b-a').css("background-position", "0 24px");
    $('#diente38b-a').css("background-repeat", "no-repeat");
    $('#m38b').css("display", "inline");
    $('#i38b').css("display", "block");
    $('#f38b').css("display", "inline");
    $('#s38b-a').css("display", "inline");
    $('#s38b-b').css("display", "inline");
    $('#s38b-c').css("display", "inline");
    $('#p38b-a').css("display", "inline");
    $('#p38b-b').css("display", "inline");
    $('#p38b-c').css("display", "inline");
    $('#mg38b-a').css("display", "inline");
    $('#mg38b-b').css("display", "inline");
    $('#mg38b-c').css("display", "inline");
    $('#ps38b-a').css("display", "inline");
    $('#ps38b-b').css("display", "inline");
    $('#ps38b-c').css("display", "inline");

    $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-38.png')");
    $('#diente38-a').css("background-position", "0 -3px");
    $('#diente38-a').css("background-repeat", "no-repeat");
    $('#m38').css("display", "inline");
    $('#i38').css("display", "inline");
    $('#f38').css("display", "inline");
    $('#s38-a').css("display", "inline");
    $('#s38-b').css("display", "inline");
    $('#s38-c').css("display", "inline");
    $('#p38-a').css("display", "inline");
    $('#p38-b').css("display", "inline");
    $('#p38-c').css("display", "inline");
    $('#mg38-a').css("display", "inline");
    $('#mg38-b').css("display", "inline");
    $('#mg38-c').css("display", "inline");
    $('#ps38-a').css("display", "inline");
    $('#ps38-b').css("display", "inline");
    $('#ps38-c').css("display", "inline");
    $('#furca38b-b').css("display", "inline");
    $('#furca38b-a').css("display", "inline");
    $('#f38-a').css("display", "inline");
    $('#f38-b').css("display", "inline");
    $('#furca38').css("display", "block");
    $('#furca38b').css("display", "block");
    $('#ae38').css("display", "inline");
    $('#pi38').css("display", "inline");

}

// fim
$('#d31b').toggle(
    function () {
        $('#d31b').val("|d31b,0");
        $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-31b.png')");
        $('#diente31b-a').css("background-position", "0 19px");
        $('#diente31b-a').css("background-repeat", "no-repeat");
        $('#m31b').css("display", "none");
        $('#i31b').css("display", "none");
        $('#f31b').css("display", "none");
        $('#s31b-a').css("display", "none");
        $('#s31b-b').css("display", "none");
        $('#s31b-c').css("display", "none");
        $('#p31b-a').css("display", "none");
        $('#p31b-b').css("display", "none");
        $('#p31b-c').css("display", "none");
        $('#mg31b-a').css("display", "none");
        $('#mg31b-b').css("display", "none");
        $('#mg31b-c').css("display", "none");
        $('#ps31b-a').css("display", "none");
        $('#ps31b-b').css("display", "none");
        $('#ps31b-c').css("display", "none");
        $('#mg31b-a').val('0');
        $('#mg31b-b').val('0');
        $('#mg31b-c').val('0');
        $('#ps31b-a').val('0');
        $('#ps31b-b').val('0');
        $('#ps31b-c').val('0');

        $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-31.png')");
        $('#diente31-a').css("background-position", "0 1px");
        $('#diente31-a').css("background-repeat", "no-repeat");
        $('#m31').css("display", "none");
        $('#i31').css("display", "none");
        $('#f31').css("display", "none");
        $('#s31-a').css("display", "none");
        $('#s31-b').css("display", "none");
        $('#s31-c').css("display", "none");
        $('#p31-a').css("display", "none");
        $('#p31-b').css("display", "none");
        $('#p31-c').css("display", "none");
        $('#mg31-a').css("display", "none");
        $('#mg31-b').css("display", "none");
        $('#mg31-c').css("display", "none");
        $('#ps31-a').css("display", "none");
        $('#ps31-b').css("display", "none");
        $('#ps31-c').css("display", "none");
        $('#mg31-a').val('0');
        $('#mg31-b').val('0');
        $('#mg31-c').val('0');
        $('#ps31-a').val('0');
        $('#ps31-b').val('0');
        $('#ps31-c').val('0');
        $('#ae31').css("display", "none");
        $('#pi31').css("display", "none");
    },
    function () {
        $('#d31b').val("|d31b,1");
        $('#diente31b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-31b.png')");
        $('#diente31b-a').css("background-position", "0 19px");
        $('#diente31b-a').css("background-repeat", "no-repeat");
        $('#m31b').css("display", "inline");
        $('#i31b').css("display", "block");
        $('#f31b').css("display", "inline");
        $('#s31b-a').css("display", "inline");
        $('#s31b-b').css("display", "inline");
        $('#s31b-c').css("display", "inline");
        $('#p31b-a').css("display", "inline");
        $('#p31b-b').css("display", "inline");
        $('#p31b-c').css("display", "inline");
        $('#mg31b-a').css("display", "inline");
        $('#mg31b-b').css("display", "inline");
        $('#mg31b-c').css("display", "inline");
        $('#ps31b-a').css("display", "inline");
        $('#ps31b-b').css("display", "inline");
        $('#ps31b-c').css("display", "inline");

        $('#diente31-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-31.png')");
        $('#diente31-a').css("background-position", "0 1px");
        $('#diente31-a').css("background-repeat", "no-repeat");
        $('#m31').css("display", "inline");
        $('#i31').css("display", "inline");
        $('#f31').css("display", "inline");
        $('#s31-a').css("display", "inline");
        $('#s31-b').css("display", "inline");
        $('#s31-c').css("display", "inline");
        $('#p31-a').css("display", "inline");
        $('#p31-b').css("display", "inline");
        $('#p31-c').css("display", "inline");
        $('#mg31-a').css("display", "inline");
        $('#mg31-b').css("display", "inline");
        $('#mg31-c').css("display", "inline");
        $('#ps31-a').css("display", "inline");
        $('#ps31-b').css("display", "inline");
        $('#ps31-c').css("display", "inline");
        $('#ae31').css("display", "inline");
        $('#pi31').css("display", "inline");

    }
);

$('#d32b').toggle(
    function () {
        $('#d32b').val("|d32b,0");
        $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-32b.png')");
        $('#diente32b-a').css("background-position", "0px 15px");
        $('#diente32b-a').css("background-repeat", "no-repeat");
        $('#m32b').css("display", "none");
        $('#i32b').css("display", "none");
        $('#f32b').css("display", "none");
        $('#s32b-a').css("display", "none");
        $('#s32b-b').css("display", "none");
        $('#s32b-c').css("display", "none");
        $('#p32b-a').css("display", "none");
        $('#p32b-b').css("display", "none");
        $('#p32b-c').css("display", "none");
        $('#mg32b-a').css("display", "none");
        $('#mg32b-b').css("display", "none");
        $('#mg32b-c').css("display", "none");
        $('#ps32b-a').css("display", "none");
        $('#ps32b-b').css("display", "none");
        $('#ps32b-c').css("display", "none");
        $('#mg32b-a').val('0');
        $('#mg32b-b').val('0');
        $('#mg32b-c').val('0');
        $('#ps32b-a').val('0');
        $('#ps32b-b').val('0');
        $('#ps32b-c').val('0');

        $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-32.png')");
        $('#diente32-a').css("background-position", "0px 3px");
        $('#diente32-a').css("background-repeat", "no-repeat");
        $('#m32').css("display", "none");
        $('#i32').css("display", "none");
        $('#f32').css("display", "none");
        $('#s32-a').css("display", "none");
        $('#s32-b').css("display", "none");
        $('#s32-c').css("display", "none");
        $('#p32-a').css("display", "none");
        $('#p32-b').css("display", "none");
        $('#p32-c').css("display", "none");
        $('#mg32-a').css("display", "none");
        $('#mg32-b').css("display", "none");
        $('#mg32-c').css("display", "none");
        $('#ps32-a').css("display", "none");
        $('#ps32-b').css("display", "none");
        $('#ps32-c').css("display", "none");
        $('#mg32-a').val('0');
        $('#mg32-b').val('0');
        $('#mg32-c').val('0');
        $('#ps32-a').val('0');
        $('#ps32-b').val('0');
        $('#ps32-c').val('0');
        $('#ae32').css("display", "none");
        $('#pi32').css("display", "none");

    },
    function () {
        $('#d32b').val("|d32b,1");
        $('#diente32b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-32b.png')");
        $('#diente32b-a').css("background-position", "0px 15px");
        $('#diente32b-a').css("background-repeat", "no-repeat");
        $('#m32b').css("display", "inline");
        $('#i32b').css("display", "block");
        $('#f32b').css("display", "inline");
        $('#s32b-a').css("display", "inline");
        $('#s32b-b').css("display", "inline");
        $('#s32b-c').css("display", "inline");
        $('#p32b-a').css("display", "inline");
        $('#p32b-b').css("display", "inline");
        $('#p32b-c').css("display", "inline");
        $('#mg32b-a').css("display", "inline");
        $('#mg32b-b').css("display", "inline");
        $('#mg32b-c').css("display", "inline");
        $('#ps32b-a').css("display", "inline");
        $('#ps32b-b').css("display", "inline");
        $('#ps32b-c').css("display", "inline");

        $('#diente32-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-32.png')");
        $('#diente32-a').css("background-position", "0px 3px");
        $('#diente32-a').css("background-repeat", "no-repeat");
        $('#m32').css("display", "inline");
        $('#i32').css("display", "inline");
        $('#f32').css("display", "inline");
        $('#s32-a').css("display", "inline");
        $('#s32-b').css("display", "inline");
        $('#s32-c').css("display", "inline");
        $('#p32-a').css("display", "inline");
        $('#p32-b').css("display", "inline");
        $('#p32-c').css("display", "inline");
        $('#mg32-a').css("display", "inline");
        $('#mg32-b').css("display", "inline");
        $('#mg32-c').css("display", "inline");
        $('#ps32-a').css("display", "inline");
        $('#ps32-b').css("display", "inline");
        $('#ps32-c').css("display", "inline");
        $('#ae32').css("display", "inline");
        $('#pi32').css("display", "inline");

    }
);
$('#d33b').toggle(
    function () {
        $('#d33b').val("|d33b,0");
        $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-33b.png')");
        $('#diente33b-a').css("background-position", "0 12px");
        $('#diente33b-a').css("background-repeat", "no-repeat");
        $('#m33b').css("display", "none");
        $('#i33b').css("display", "none");
        $('#f33b').css("display", "none");
        $('#s33b-a').css("display", "none");
        $('#s33b-b').css("display", "none");
        $('#s33b-c').css("display", "none");
        $('#p33b-a').css("display", "none");
        $('#p33b-b').css("display", "none");
        $('#p33b-c').css("display", "none");
        $('#mg33b-a').css("display", "none");
        $('#mg33b-b').css("display", "none");
        $('#mg33b-c').css("display", "none");
        $('#ps33b-a').css("display", "none");
        $('#ps33b-b').css("display", "none");
        $('#ps33b-c').css("display", "none");
        $('#mg33b-a').val('0');
        $('#mg33b-b').val('0');
        $('#mg33b-c').val('0');
        $('#ps33b-a').val('0');
        $('#ps33b-b').val('0');
        $('#ps33b-c').val('0');

        $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-33.png')");
        $('#diente33-a').css("background-position", "0 7px");
        $('#diente33-a').css("background-repeat", "no-repeat");
        $('#m33').css("display", "none");
        $('#i33').css("display", "none");
        $('#f33').css("display", "none");
        $('#s33-a').css("display", "none");
        $('#s33-b').css("display", "none");
        $('#s33-c').css("display", "none");
        $('#p33-a').css("display", "none");
        $('#p33-b').css("display", "none");
        $('#p33-c').css("display", "none");
        $('#mg33-a').css("display", "none");
        $('#mg33-b').css("display", "none");
        $('#mg33-c').css("display", "none");
        $('#ps33-a').css("display", "none");
        $('#ps33-b').css("display", "none");
        $('#ps33-c').css("display", "none");
        $('#mg33-a').val('0');
        $('#mg33-b').val('0');
        $('#mg33-c').val('0');
        $('#ps33-a').val('0');
        $('#ps33-b').val('0');
        $('#ps33-c').val('0');
        $('#ae33').css("display", "none");
        $('#pi33').css("display", "none");
    },
    function () {
        $('#d33b').val("|d33b,1");
        $('#diente33b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-33b.png')");
        $('#diente33b-a').css("background-position", "0 12px");
        $('#diente33b-a').css("background-repeat", "no-repeat");
        $('#m33b').css("display", "inline");
        $('#i33b').css("display", "block");
        $('#f33b').css("display", "inline");
        $('#s33b-a').css("display", "inline");
        $('#s33b-b').css("display", "inline");
        $('#s33b-c').css("display", "inline");
        $('#p33b-a').css("display", "inline");
        $('#p33b-b').css("display", "inline");
        $('#p33b-c').css("display", "inline");
        $('#mg33b-a').css("display", "inline");
        $('#mg33b-b').css("display", "inline");
        $('#mg33b-c').css("display", "inline");
        $('#ps33b-a').css("display", "inline");
        $('#ps33b-b').css("display", "inline");
        $('#ps33b-c').css("display", "inline");

        $('#diente33-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-33.png')");
        $('#diente33-a').css("background-position", "0 7px");
        $('#diente33-a').css("background-repeat", "no-repeat");
        $('#m33').css("display", "inline");
        $('#i33').css("display", "inline");
        $('#f33').css("display", "inline");
        $('#s33-a').css("display", "inline");
        $('#s33-b').css("display", "inline");
        $('#s33-c').css("display", "inline");
        $('#p33-a').css("display", "inline");
        $('#p33-b').css("display", "inline");
        $('#p33-c').css("display", "inline");
        $('#mg33-a').css("display", "inline");
        $('#mg33-b').css("display", "inline");
        $('#mg33-c').css("display", "inline");
        $('#ps33-a').css("display", "inline");
        $('#ps33-b').css("display", "inline");
        $('#ps33-c').css("display", "inline");
        $('#ae33').css("display", "inline");
        $('#pi33').css("display", "inline");

    }
);
$('#d34b').toggle(
    function () {
        $('#d34b').val("|d34b,0");
        $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-34b.png')");
        $('#diente34b-a').css("background-position", "0 13px");
        $('#diente34b-a').css("background-repeat", "no-repeat");
        $('#m34b').css("display", "none");
        $('#i34b').css("display", "none");
        $('#f34b').css("display", "none");
        $('#s34b-a').css("display", "none");
        $('#s34b-b').css("display", "none");
        $('#s34b-c').css("display", "none");
        $('#p34b-a').css("display", "none");
        $('#p34b-b').css("display", "none");
        $('#p34b-c').css("display", "none");
        $('#mg34b-a').css("display", "none");
        $('#mg34b-b').css("display", "none");
        $('#mg34b-c').css("display", "none");
        $('#ps34b-a').css("display", "none");
        $('#ps34b-b').css("display", "none");
        $('#ps34b-c').css("display", "none");
        $('#mg34b-a').val('0');
        $('#mg34b-b').val('0');
        $('#mg34b-c').val('0');
        $('#ps34b-a').val('0');
        $('#ps34b-b').val('0');
        $('#ps34b-c').val('0');

        $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-34.png')");
        $('#diente34-a').css("background-position", "0 5px");
        $('#diente34-a').css("background-repeat", "no-repeat");
        $('#m34').css("display", "none");
        $('#i34').css("display", "none");
        $('#f34').css("display", "none");
        $('#s34-a').css("display", "none");
        $('#s34-b').css("display", "none");
        $('#s34-c').css("display", "none");
        $('#p34-a').css("display", "none");
        $('#p34-b').css("display", "none");
        $('#p34-c').css("display", "none");
        $('#mg34-a').css("display", "none");
        $('#mg34-b').css("display", "none");
        $('#mg34-c').css("display", "none");
        $('#ps34-a').css("display", "none");
        $('#ps34-b').css("display", "none");
        $('#ps34-c').css("display", "none");
        $('#mg34-a').val('0');
        $('#mg34-b').val('0');
        $('#mg34-c').val('0');
        $('#ps34-a').val('0');
        $('#ps34-b').val('0');
        $('#ps34-c').val('0');
        $('#furca34b-b').css("display", "none");
        $('#furca34b-a').css("display", "none");
        $('#f34-a').css("display", "none");
        $('#f34-b').css("display", "none");
        $('#ae34').css("display", "none");
        $('#pi34').css("display", "none");

    },
    function () {
        $('#d34b').val("|d34b,1");
        $('#diente34b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-34b.png')");
        $('#diente34b-a').css("background-position", "0 13px");
        $('#diente34b-a').css("background-repeat", "no-repeat");
        $('#m34b').css("display", "inline");
        $('#i34b').css("display", "block");
        $('#f34b').css("display", "inline");
        $('#s34b-a').css("display", "inline");
        $('#s34b-b').css("display", "inline");
        $('#s34b-c').css("display", "inline");
        $('#p34b-a').css("display", "inline");
        $('#p34b-b').css("display", "inline");
        $('#p34b-c').css("display", "inline");
        $('#mg34b-a').css("display", "inline");
        $('#mg34b-b').css("display", "inline");
        $('#mg34b-c').css("display", "inline");
        $('#ps34b-a').css("display", "inline");
        $('#ps34b-b').css("display", "inline");
        $('#ps34b-c').css("display", "inline");

        $('#diente34-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-34.png')");
        $('#diente34-a').css("background-position", "0 5px");
        $('#diente34-a').css("background-repeat", "no-repeat");
        $('#m34').css("display", "inline");
        $('#i34').css("display", "inline");
        $('#f34').css("display", "inline");
        $('#s34-a').css("display", "inline");
        $('#s34-b').css("display", "inline");
        $('#s34-c').css("display", "inline");
        $('#p34-a').css("display", "inline");
        $('#p34-b').css("display", "inline");
        $('#p34-c').css("display", "inline");
        $('#mg34-a').css("display", "inline");
        $('#mg34-b').css("display", "inline");
        $('#mg34-c').css("display", "inline");
        $('#ps34-a').css("display", "inline");
        $('#ps34-b').css("display", "inline");
        $('#ps34-c').css("display", "inline");
        $('#furca34b-b').css("display", "inline");
        $('#furca34b-a').css("display", "inline");
        $('#f34-a').css("display", "inline");
        $('#f34-b').css("display", "inline");
        $('#ae34').css("display", "inline");
        $('#pi34').css("display", "inline");

    }
);
$('#d35b').toggle(
    function () {
        $('#d35b').val("|d35b,0");
        $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-35b.png')");
        $('#diente35b-a').css("background-position", "0 20px");
        $('#diente35b-a').css("background-repeat", "no-repeat");
        $('#m35b').css("display", "none");
        $('#i35b').css("display", "none");
        $('#f35b').css("display", "none");
        $('#s35b-a').css("display", "none");
        $('#s35b-b').css("display", "none");
        $('#s35b-c').css("display", "none");
        $('#p35b-a').css("display", "none");
        $('#p35b-b').css("display", "none");
        $('#p35b-c').css("display", "none");
        $('#mg35b-a').css("display", "none");
        $('#mg35b-b').css("display", "none");
        $('#mg35b-c').css("display", "none");
        $('#ps35b-a').css("display", "none");
        $('#ps35b-b').css("display", "none");
        $('#ps35b-c').css("display", "none");
        $('#mg35b-a').val('0');
        $('#mg35b-b').val('0');
        $('#mg35b-c').val('0');
        $('#ps35b-a').val('0');
        $('#ps35b-b').val('0');
        $('#ps35b-c').val('0');

        $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-35.png')");
        $('#diente35-a').css("background-position", "0 1px");
        $('#diente35-a').css("background-repeat", "no-repeat");
        $('#m35').css("display", "none");
        $('#i35').css("display", "none");
        $('#f35').css("display", "none");
        $('#s35-a').css("display", "none");
        $('#s35-b').css("display", "none");
        $('#s35-c').css("display", "none");
        $('#p35-a').css("display", "none");
        $('#p35-b').css("display", "none");
        $('#p35-c').css("display", "none");
        $('#mg35-a').css("display", "none");
        $('#mg35-b').css("display", "none");
        $('#mg35-c').css("display", "none");
        $('#ps35-a').css("display", "none");
        $('#ps35-b').css("display", "none");
        $('#ps35-c').css("display", "none");
        $('#mg35-a').val('0');
        $('#mg35-b').val('0');
        $('#mg35-c').val('0');
        $('#ps35-a').val('0');
        $('#ps35-b').val('0');
        $('#ps35-c').val('0');
        $('#ae35').css("display", "none");
        $('#pi35').css("display", "none");

    },
    function () {
        $('#d35b').val("|d35b,1");
        $('#diente35b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-35b.png')");
        $('#diente35b-a').css("background-position", "0 20px");
        $('#diente35b-a').css("background-repeat", "no-repeat");
        $('#m35b').css("display", "inline");
        $('#i35b').css("display", "block");
        $('#f35b').css("display", "inline");
        $('#s35b-a').css("display", "inline");
        $('#s35b-b').css("display", "inline");
        $('#s35b-c').css("display", "inline");
        $('#p35b-a').css("display", "inline");
        $('#p35b-b').css("display", "inline");
        $('#p35b-c').css("display", "inline");
        $('#mg35b-a').css("display", "inline");
        $('#mg35b-b').css("display", "inline");
        $('#mg35b-c').css("display", "inline");
        $('#ps35b-a').css("display", "inline");
        $('#ps35b-b').css("display", "inline");
        $('#ps35b-c').css("display", "inline");

        $('#diente35-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-35.png')");
        $('#diente35-a').css("background-position", "0 1px");
        $('#diente35-a').css("background-repeat", "no-repeat");
        $('#m35').css("display", "inline");
        $('#i35').css("display", "inline");
        $('#f35').css("display", "inline");
        $('#s35-a').css("display", "inline");
        $('#s35-b').css("display", "inline");
        $('#s35-c').css("display", "inline");
        $('#p35-a').css("display", "inline");
        $('#p35-b').css("display", "inline");
        $('#p35-c').css("display", "inline");
        $('#mg35-a').css("display", "inline");
        $('#mg35-b').css("display", "inline");
        $('#mg35-c').css("display", "inline");
        $('#ps35-a').css("display", "inline");
        $('#ps35-b').css("display", "inline");
        $('#ps35-c').css("display", "inline");
        $('#ae35').css("display", "inline");
        $('#pi35').css("display", "inline");

    }
);
$('#d36b').toggle(
    function () {
        $('#d36b').val("|d36b,0");
        $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-36b.png')");
        $('#diente36b-a').css("background-position", "0 23px");
        $('#diente36b-a').css("background-repeat", "no-repeat");
        $('#m36b').css("display", "none");
        $('#i36b').css("display", "none");
        $('#f36b').css("display", "none");
        $('#s36b-a').css("display", "none");
        $('#s36b-b').css("display", "none");
        $('#s36b-c').css("display", "none");
        $('#p36b-a').css("display", "none");
        $('#p36b-b').css("display", "none");
        $('#p36b-c').css("display", "none");
        $('#mg36b-a').css("display", "none");
        $('#mg36b-b').css("display", "none");
        $('#mg36b-c').css("display", "none");
        $('#ps36b-a').css("display", "none");
        $('#ps36b-b').css("display", "none");
        $('#ps36b-c').css("display", "none");
        /*$('#furca36b').css("background","none");*/
        $('#mg36b-a').val('0');
        $('#mg36b-b').val('0');
        $('#mg36b-c').val('0');
        $('#ps36b-a').val('0');
        $('#ps36b-b').val('0');
        $('#ps36b-c').val('0');

        $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-36.png')");
        $('#diente36-a').css("background-position", "top");
        $('#diente36-a').css("background-repeat", "no-repeat");
        $('#m36').css("display", "none");
        $('#i36').css("display", "none");
        $('#f36').css("display", "none");
        $('#s36-a').css("display", "none");
        $('#s36-b').css("display", "none");
        $('#s36-c').css("display", "none");
        $('#p36-a').css("display", "none");
        $('#p36-b').css("display", "none");
        $('#p36-c').css("display", "none");
        $('#mg36-a').css("display", "none");
        $('#mg36-b').css("display", "none");
        $('#mg36-c').css("display", "none");
        $('#ps36-a').css("display", "none");
        $('#ps36-b').css("display", "none");
        $('#ps36-c').css("display", "none");
        /*$('#furca36').css("background","none");*/
        $('#mg36-a').val('0');
        $('#mg36-b').val('0');
        $('#mg36-c').val('0');
        $('#ps36-a').val('0');
        $('#ps36-b').val('0');
        $('#ps36-c').val('0');
        $('#furca36b-b').css("display", "none");
        $('#furca36b-a').css("display", "none");
        $('#f36-a').css("display", "none");
        $('#f36-b').css("display", "none");
        $('#furca36').css("display", "none");
        $('#furca36b').css("display", "none");
        $('#ae36').css("display", "none");
        $('#pi36').css("display", "none");

    },
    function () {
        $('#d36b').val("|d36b,1");
        $('#diente36b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-36b.png')");
        $('#diente36b-a').css("background-position", "0 23px");
        $('#diente36b-a').css("background-repeat", "no-repeat");
        $('#m36b').css("display", "inline");
        $('#i36b').css("display", "block");
        $('#f36b').css("display", "inline");
        $('#s36b-a').css("display", "inline");
        $('#s36b-b').css("display", "inline");
        $('#s36b-c').css("display", "inline");
        $('#p36b-a').css("display", "inline");
        $('#p36b-b').css("display", "inline");
        $('#p36b-c').css("display", "inline");
        $('#mg36b-a').css("display", "inline");
        $('#mg36b-b').css("display", "inline");
        $('#mg36b-c').css("display", "inline");
        $('#ps36b-a').css("display", "inline");
        $('#ps36b-b').css("display", "inline");
        $('#ps36b-c').css("display", "inline");

        $('#diente36-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-36.png')");
        $('#diente36-a').css("background-position", "top");
        $('#diente36-a').css("background-repeat", "no-repeat");
        $('#m36').css("display", "inline");
        $('#i36').css("display", "inline");
        $('#f36').css("display", "inline");
        $('#s36-a').css("display", "inline");
        $('#s36-b').css("display", "inline");
        $('#s36-c').css("display", "inline");
        $('#p36-a').css("display", "inline");
        $('#p36-b').css("display", "inline");
        $('#p36-c').css("display", "inline");
        $('#mg36-a').css("display", "inline");
        $('#mg36-b').css("display", "inline");
        $('#mg36-c').css("display", "inline");
        $('#ps36-a').css("display", "inline");
        $('#ps36-b').css("display", "inline");
        $('#ps36-c').css("display", "inline");
        $('#furca36b-b').css("display", "inline");
        $('#furca36b-a').css("display", "inline");
        $('#f36-a').css("display", "inline");
        $('#f36-b').css("display", "inline");
        $('#furca36').css("display", "block");
        $('#furca36b').css("display", "block");
        $('#ae36').css("display", "inline");
        $('#pi36').css("display", "inline");

    }
);

$('#d37b').toggle(
    function () {
        $('#d37b').val("|d37b,0");
        $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-37b.png')");
        $('#diente37b-a').css("background-position", "0px 21px");
        $('#diente37b-a').css("background-repeat", "no-repeat");
        $('#m37b').css("display", "none");
        $('#i37b').css("display", "none");
        $('#f37b').css("display", "none");
        $('#s37b-a').css("display", "none");
        $('#s37b-b').css("display", "none");
        $('#s37b-c').css("display", "none");
        $('#p37b-a').css("display", "none");
        $('#p37b-b').css("display", "none");
        $('#p37b-c').css("display", "none");
        $('#mg37b-a').css("display", "none");
        $('#mg37b-b').css("display", "none");
        $('#mg37b-c').css("display", "none");
        $('#ps37b-a').css("display", "none");
        $('#ps37b-b').css("display", "none");
        $('#ps37b-c').css("display", "none");
        /*$('#furca37b').css("background","none");*/
        $('#mg37b-a').val('0');
        $('#mg37b-b').val('0');
        $('#mg37b-c').val('0');
        $('#ps37b-a').val('0');
        $('#ps37b-b').val('0');
        $('#ps37b-c').val('0');

        $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-37.png')");
        $('#diente37-a').css("background-position", "0px -4px");
        $('#diente37-a').css("background-repeat", "no-repeat");
        $('#m37').css("display", "none");
        $('#i37').css("display", "none");
        $('#f37').css("display", "none");
        $('#s37-a').css("display", "none");
        $('#s37-b').css("display", "none");
        $('#s37-c').css("display", "none");
        $('#p37-a').css("display", "none");
        $('#p37-b').css("display", "none");
        $('#p37-c').css("display", "none");
        $('#mg37-a').css("display", "none");
        $('#mg37-b').css("display", "none");
        $('#mg37-c').css("display", "none");
        $('#ps37-a').css("display", "none");
        $('#ps37-b').css("display", "none");
        $('#ps37-c').css("display", "none");
        /*$('#furca37').css("background","none");*/
        $('#mg37-a').val('0');
        $('#mg37-b').val('0');
        $('#mg37-c').val('0');
        $('#ps37-a').val('0');
        $('#ps37-b').val('0');
        $('#ps37-c').val('0');
        $('#furca37b-b').css("display", "none");
        $('#furca37b-a').css("display", "none");
        $('#f37-a').css("display", "none");
        $('#f37-b').css("display", "none");
        $('#furca37').css("display", "none");
        $('#furca37b').css("display", "none");
        $('#ae37').css("display", "none");
        $('#pi37').css("display", "none");
    },
    function () {
        $('#d37b').val("|d37b,1");
        $('#diente37b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-37b.png')");
        $('#diente37b-a').css("background-position", "0px 21px");
        $('#diente37b-a').css("background-repeat", "no-repeat");
        $('#m37b').css("display", "inline");
        $('#i37b').css("display", "block");
        $('#f37b').css("display", "inline");
        $('#s37b-a').css("display", "inline");
        $('#s37b-b').css("display", "inline");
        $('#s37b-c').css("display", "inline");
        $('#p37b-a').css("display", "inline");
        $('#p37b-b').css("display", "inline");
        $('#p37b-c').css("display", "inline");
        $('#mg37b-a').css("display", "inline");
        $('#mg37b-b').css("display", "inline");
        $('#mg37b-c').css("display", "inline");
        $('#ps37b-a').css("display", "inline");
        $('#ps37b-b').css("display", "inline");
        $('#ps37b-c').css("display", "inline");

        $('#diente37-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-37.png')");
        $('#diente37-a').css("background-position", "0px -4px");
        $('#diente37-a').css("background-repeat", "no-repeat");
        $('#m37').css("display", "inline");
        $('#i37').css("display", "inline");
        $('#f37').css("display", "inline");
        $('#s37-a').css("display", "inline");
        $('#s37-b').css("display", "inline");
        $('#s37-c').css("display", "inline");
        $('#p37-a').css("display", "inline");
        $('#p37-b').css("display", "inline");
        $('#p37-c').css("display", "inline");
        $('#mg37-a').css("display", "inline");
        $('#mg37-b').css("display", "inline");
        $('#mg37-c').css("display", "inline");
        $('#ps37-a').css("display", "inline");
        $('#ps37-b').css("display", "inline");
        $('#ps37-c').css("display", "inline");
        $('#furca37b-b').css("display", "inline");
        $('#furca37b-a').css("display", "inline");
        $('#f37-a').css("display", "inline");
        $('#f37-b').css("display", "inline");
        $('#furca37').css("display", "block");
        $('#furca37b').css("display", "block");
        $('#ae37').css("display", "inline");
        $('#pi37').css("display", "inline");

    }
);
$('#d38b').toggle(
    function () {
        $('#d38b').val("|d38b,0");
        $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/tachados/periodontograma-dientes-abajo-tachados-38b.png')");
        $('#diente38b-a').css("background-position", "0 24px");
        $('#diente38b-a').css("background-repeat", "no-repeat");
        $('#m38b').css("display", "none");
        $('#i38b').css("display", "none");
        $('#f38b').css("display", "none");
        $('#s38b-a').css("display", "none");
        $('#s38b-b').css("display", "none");
        $('#s38b-c').css("display", "none");
        $('#p38b-a').css("display", "none");
        $('#p38b-b').css("display", "none");
        $('#p38b-c').css("display", "none");
        $('#mg38b-a').css("display", "none");
        $('#mg38b-b').css("display", "none");
        $('#mg38b-c').css("display", "none");
        $('#ps38b-a').css("display", "none");
        $('#ps38b-b').css("display", "none");
        $('#ps38b-c').css("display", "none");
        /*$('#furca38b').css("background","none");*/
        $('#mg38b-a').val('0');
        $('#mg38b-b').val('0');
        $('#mg38b-c').val('0');
        $('#ps38b-a').val('0');
        $('#ps38b-b').val('0');
        $('#ps38b-c').val('0');

        $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/tachados/periodontograma-dientes-abajo-tachados-38.png')");
        $('#diente38-a').css("background-position", "0 -3px");
        $('#diente38-a').css("background-repeat", "no-repeat");
        $('#m38').css("display", "none");
        $('#i38').css("display", "none");
        $('#f38').css("display", "none");
        $('#s38-a').css("display", "none");
        $('#s38-b').css("display", "none");
        $('#s38-c').css("display", "none");
        $('#p38-a').css("display", "none");
        $('#p38-b').css("display", "none");
        $('#p38-c').css("display", "none");
        $('#mg38-a').css("display", "none");
        $('#mg38-b').css("display", "none");
        $('#mg38-c').css("display", "none");
        $('#ps38-a').css("display", "none");
        $('#ps38-b').css("display", "none");
        $('#ps38-c').css("display", "none");
        /*$('#furca38').css("background","none");*/
        $('#mg38-a').val('0');
        $('#mg38-b').val('0');
        $('#mg38-c').val('0');
        $('#ps38-a').val('0');
        $('#ps38-b').val('0');
        $('#ps38-c').val('0');
        $('#furca38b-b').css("display", "none");
        $('#furca38b-a').css("display", "none");
        $('#f38-a').css("display", "none");
        $('#f38-b').css("display", "none");
        $('#furca38').css("display", "none");
        $('#furca38b').css("display", "none");
        $('#ae38').css("display", "none");
        $('#pi38').css("display", "none");
    },
    function () {
        $('#d38b').val("|d38b,1");
        $('#diente38b-a').css("background", "url('/Content/images/dentista/tabla8/periodontograma-dientes-abajo-38b.png')");
        $('#diente38b-a').css("background-position", "0 24px");
        $('#diente38b-a').css("background-repeat", "no-repeat");
        $('#m38b').css("display", "inline");
        $('#i38b').css("display", "block");
        $('#f38b').css("display", "inline");
        $('#s38b-a').css("display", "inline");
        $('#s38b-b').css("display", "inline");
        $('#s38b-c').css("display", "inline");
        $('#p38b-a').css("display", "inline");
        $('#p38b-b').css("display", "inline");
        $('#p38b-c').css("display", "inline");
        $('#mg38b-a').css("display", "inline");
        $('#mg38b-b').css("display", "inline");
        $('#mg38b-c').css("display", "inline");
        $('#ps38b-a').css("display", "inline");
        $('#ps38b-b').css("display", "inline");
        $('#ps38b-c').css("display", "inline");

        $('#diente38-a').css("background", "url('/Content/images/dentista/tabla6/periodontograma-dientes-abajo-38.png')");
        $('#diente38-a').css("background-position", "0 -3px");
        $('#diente38-a').css("background-repeat", "no-repeat");
        $('#m38').css("display", "inline");
        $('#i38').css("display", "inline");
        $('#f38').css("display", "inline");
        $('#s38-a').css("display", "inline");
        $('#s38-b').css("display", "inline");
        $('#s38-c').css("display", "inline");
        $('#p38-a').css("display", "inline");
        $('#p38-b').css("display", "inline");
        $('#p38-c').css("display", "inline");
        $('#mg38-a').css("display", "inline");
        $('#mg38-b').css("display", "inline");
        $('#mg38-c').css("display", "inline");
        $('#ps38-a').css("display", "inline");
        $('#ps38-b').css("display", "inline");
        $('#ps38-c').css("display", "inline");
        $('#furca38b-b').css("display", "inline");
        $('#furca38b-a').css("display", "inline");
        $('#f38-a').css("display", "inline");
        $('#f38-b').css("display", "inline");
        $('#furca38').css("display", "block");
        $('#furca38b').css("display", "block");
        $('#ae38').css("display", "inline");
        $('#pi38').css("display", "inline");

    }
);



