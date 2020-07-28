// Protokoll für das Teammeeting für Mahr EDV GmbH
let fragenList = [
    '•Willkommen bei Mahr EDV: Neue Teammitglieder:',
    '•Teamerfolg und Bonus:',
    '•Neues aus den Teams: Aktuelle Neukunden:',
    '•Neues aus den Teams: Status Los Wochos (insbes. SMBv1, LDAP)',
    '•Neues aus den Teams: Los Wochos „Wer hat den schönsten Kabelsalat“',
    '•Geplante Erweiterung der Standorte 2020',
    '•Info Better Tomorrow',
    '•Schulungsplan',
    '•Prozess – KuDo Export',
    '•Neues aus Social Media- Wettbewerbe & Auszeichnungen',
    '•Fragen/ Ideen/ Kritik/ Lob'
];

function anzeigen(antworten){
    for (let i = 0; i < antworten.length; i++) {
        let id = '#PQ' + (i+1);
        document.querySelector(id).innerHTML = antworten[i].replace(/\n/g, "<br/>");
    }
}
        

var myarrayelements = [];
function fragenRekursivStellen(myfarray, index) {
    if ( index < myfarray.length ) 
    {
        bootbox.prompt(
            myfarray[index], 
            function(result) {
                myarrayelements.push(result);

                fragenRekursivStellen(myfarray, index+1);
            });
    } else {
        anzeigen(myarrayelements);
    }
}


fragenRekursivStellen(fragenList, 0);