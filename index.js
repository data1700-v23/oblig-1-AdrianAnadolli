
    //Lager tomt array

    let filmarray = [];


    //lager en variabel som teller, blir brukt til å displaye arrayet i en dynamisk måte.

    var tell = 0;


    //Boolean som sikrer for at if setning kjøres kun en gang.

    lagd = false;


    // Hovedfunksjon som registrerer verdier inn i arrayet og sletter innhold fra form.

    function register(){

    //Resetter alle feilmeldinger

    document.getElementById("feilmelding").innerText = "";
    document.getElementById("feilmelding1").innerText = "";
    document.getElementById("feilmelding2").innerText = "";
    document.getElementById("feilmelding3").innerText = "";
    document.getElementById("feilmelding4").innerText = "";
    document.getElementById("feilmelding5").innerText = "";
    document.getElementById("feilmelding6").innerText = "";


    //Sjekker om alt input er fylt inn. Dersom alt er riktig blir informasjonen registert inn i arrayet.

    if (document.getElementById("film").value !== "Velg film her:" && document.getElementById("antall").value !== "" && document.getElementById("fornavn").value !== "" &&
        document.getElementById("etternavn").value !== "" && document.getElementById("telefonnr").value !== "" && document.getElementById("epost").value !== ""
        && document.getElementById("antall").value >= 0 && document.getElementById("telefonnr").value >= 0){
        filmarray.push(document.getElementById("film").value,document.getElementById("antall").value,document.getElementById("fornavn").value,
        document.getElementById("etternavn").value,document.getElementById("telefonnr").value,document.getElementById("epost").value);
    }


    //Sjekker om hver inviduelt input er fylt inn, hvis ikke vil det blir sendt ut en feilmelding.

    if (document.getElementById("film").value === "Velg film her:"){
        document.getElementById("feilmelding").innerText = "Må velge ett film"
    }

    if (document.getElementById("antall").value === "" || document.getElementById("antall").value <= 0){
        document.getElementById("feilmelding1").innerText = "Må skrive noe inn i antall"
    }

    if (document.getElementById("fornavn").value === ""){
        document.getElementById("feilmelding2").innerText = "Må skrive noe inn i fornavnet"
    }

    if (document.getElementById("etternavn").value === ""){
        document.getElementById("feilmelding3").innerText = "Må skrive noe inn i etternavnet"
    }

    if (document.getElementById("telefonnr").value === "" || document.getElementById("telefonnr").value <= 0){
        document.getElementById("feilmelding4").innerText = "Må skrive noe inn i telefonnr"
    }

    if (document.getElementById("epost").value === ""){
        document.getElementById("feilmelding5").innerText = "Må skrive noe inn i epost"
    }


    if (filmarray.length>0){
    document.getElementById("resultat").style.cssText="border: 1px solid black; width:50%";

    }

    //If setning som kjører kunn en gang, fjernes med slett funksjonen og vil kunne brukes igjen hvis slett er kjørt.
    if(lagd === false && filmarray.length !== 0) {
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


    //Fyller array med informasjon

    if(filmarray.length !== tell) {
        var table = document.getElementById("resultat");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = filmarray[tell];
        cell2.innerHTML = filmarray[tell + 1];
        cell3.innerHTML = filmarray[tell + 2];
        cell4.innerHTML = filmarray[tell + 3];
        cell5.innerHTML = filmarray[tell + 4];
        cell6.innerHTML = filmarray[tell + 5];
    }

    document.getElementById("innhold").reset();

     if (filmarray.length !== tell){
        tell += 6;
        }
    }


    //funksjon som sletter alt fra arrayet, setter tell til 0, resetter css.

    function slettAlt(){
        if (filmarray.length === 0){
            document.getElementById("feilmelding6").innerText = "Det finner ingen billetter som kan slettes"
        }
        if (filmarray.length !==0){
        filmarray.splice(0);
        document.getElementById("resultat").innerHTML = '';

        tell = 0;

        lagd = false;

        document.getElementById("resultat").style.cssText="";

        }
    }
