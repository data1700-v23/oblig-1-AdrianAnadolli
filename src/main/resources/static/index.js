//Lager tomt array

var filmarray = [];


//lager en variabel som teller, blir brukt til å displaye arrayet i en dynamisk måte.

var i = 0;

//Boolean som sikrer for at if setning kjøres kun en gang.

lagd = false;

var userEmail;

function validateEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateAndLog() {
    // Get the value from the input field with the ID "epost"
    userEmail = document.getElementById("epost").value;
}

// Hovedfunksjon som registrerer verdier inn i arrayet og sletter innhold fra form.

function register() {

    //Resetter alle feilmeldinger hver gang funksjonen kjøres

    document.getElementById("feilmelding").innerText = "";
    document.getElementById("feilmelding1").innerText = "";
    document.getElementById("feilmelding2").innerText = "";
    document.getElementById("feilmelding3").innerText = "";
    document.getElementById("feilmelding4").innerText = "";
    document.getElementById("feilmelding5").innerText = "";
    document.getElementById("feilmelding6").innerText = "";


    //Sjekker om alt input er fylt inn. Dersom alt er riktig blir informasjonen registert inn i arrayet som et objekt.

    if (document.getElementById("film").value !== "Velg film her:" && document.getElementById("antall").value !== "" && document.getElementById("fornavn").value !== "" &&
        document.getElementById("etternavn").value !== "" && document.getElementById("telefonnr").value !== "" && document.getElementById("epost").value !== ""
        && document.getElementById("antall").value >= 0 && document.getElementById("telefonnr").value >= 0 && validateEmail(userEmail)) {


        filmarray[i] = [document.getElementById("film").value, document.getElementById("antall").value, document.getElementById("fornavn").value,
            document.getElementById("etternavn").value, document.getElementById("telefonnr").value, document.getElementById("epost").value];

    }


    //Sjekker om hver inviduelt input er fylt inn, hvis ikke vil det blir sendt ut en feilmelding.

    if (document.getElementById("film").value === "Velg film her:") {
        document.getElementById("feilmelding").innerText = "Må velge en film"
    }

    if (document.getElementById("antall").value <= 0) {
        document.getElementById("feilmelding1").innerText = "Antall kan ikke være negativ"
    }

    if (document.getElementById("antall").value === "") {
        document.getElementById("feilmelding1").innerText = "Må skrive noe inn i antall"
    }

    if (document.getElementById("fornavn").value === "") {
        document.getElementById("feilmelding2").innerText = "Må skrive noe inn i fornavnet"
    }

    if (document.getElementById("etternavn").value === "") {
        document.getElementById("feilmelding3").innerText = "Må skrive noe inn i etternavnet"
    }

    if (document.getElementById("telefonnr").value === "") {
        document.getElementById("feilmelding4").innerText = "Må skrive noe inn i telefonnr"
    }

    if (document.getElementById("telefonnr").value < 0) {
        document.getElementById("feilmelding4").innerText = "Telefonnummer kan ikke være negativ"
    }

    if (!validateEmail(userEmail)) {
        document.getElementById("feilmelding5").innerText = "Ugyldig epost, sjekk at du har skrevet riktig"
    }

    if (document.getElementById("epost").value === "") {
        document.getElementById("feilmelding5").innerText = "Må skrive noe inn i epost"
    }


    if (filmarray.length > 0) {
        document.getElementById("resultat").style.cssText = "border: 1px solid black; width:50%";
    }

    //If setning som kjører kunn en gang når funksjonen kjøres, lager en ny table,
    // fjernes med slett funksjonen og vil kunne brukes igjen hvis slett er kjørt.
    if (lagd === false && filmarray.length !== 0) {
        var table = document.getElementById("resultat");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = "Film:";
        cell2.innerHTML = "Antall:";
        cell3.innerHTML = "Fornavn:";
        cell4.innerHTML = "Etternavn:";
        cell5.innerHTML = "Telefonnr:";
        cell6.innerHTML = "Epost:";
        lagd = true;
    }


    //Fyller table med informasjon fra arrayet.

    if (filmarray.length !== i) {

        var table = document.getElementById("resultat");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        // Legger verdier fra array til table
        cell1.innerHTML = filmarray[i][0];
        cell2.innerHTML = filmarray[i][1];
        cell3.innerHTML = filmarray[i][2];
        cell4.innerHTML = filmarray[i][3];
        cell5.innerHTML = filmarray[i][4];
        cell6.innerHTML = filmarray[i][5];
        i += 1;
    }

    document.getElementById("innhold").reset();
}


//funksjon som sletter alt fra arrayet, setter tell til 0, resetter css.

function slettAlt() {
    document.getElementById("feilmelding").innerHTML = '';
    document.getElementById("feilmelding1").innerHTML = '';
    document.getElementById("feilmelding2").innerHTML = '';
    document.getElementById("feilmelding3").innerHTML = '';
    document.getElementById("feilmelding4").innerHTML = '';
    document.getElementById("feilmelding5").innerHTML = '';

    if (filmarray.length === 0) {
        document.getElementById("feilmelding6").innerText = "Det finnes ingen billetter som kan slettes"
    }
    if (filmarray.length !== 0) {
        filmarray = [];
        document.getElementById("resultat").innerHTML = '';

        i = 0;
        lagd = false;

        document.getElementById("resultat").style.cssText = "";

    }
}