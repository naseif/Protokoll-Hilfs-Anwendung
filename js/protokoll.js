// Protokoll für das Teammeeting für Mahr EDV

var PQ1 = undefined;
var PQ2 = undefined;
var PQ3 = undefined;
var PQ4 = undefined;
var PQ5 = undefined;
var PQ6 = undefined;
var PQ7 = undefined;
var PQ8 = undefined;
var PQ9 = undefined;
var PQ10 = undefined;
var PQ11 = undefined;

//// Functions 

function ZusammenfassungAmEnde() {
    document.querySelector('#PQ1').innerHTML = PQ1.replaceAll("\n", "<br/>");
    document.querySelector('#PQ2').innerHTML += PQ2.replaceAll("\n", "<br/>");
    document.querySelector('#PQ3').innerHTML += PQ3.replaceAll("\n", "<br/>");
    document.querySelector('#PQ4').innerHTML += PQ4.replaceAll("\n", "<br/>");
    document.querySelector('#PQ5').innerHTML += PQ5.replaceAll("\n", "<br/>");
    document.querySelector('#PQ6').innerHTML += PQ6.replaceAll("\n", "<br/>");
    document.querySelector('#PQ7').innerHTML += PQ7.replaceAll("\n", "<br/>");
    document.querySelector('#PQ8').innerHTML += PQ8.replaceAll("\n", "<br/>");
    document.querySelector('#PQ9').innerHTML += PQ9.replaceAll("\n", "<br/>");
    document.querySelector('#PQ10').innerHTML += PQ10.replaceAll("\n", "<br/>");
    document.querySelector('#PQ11').innerHTML += PQ11.replaceAll("\n", "<br/>");

}


bootbox.alert({
    size: "small",
    title: "Mahr EDV GmbH",
    message: "Herzlich Willkommen zum Protokoll für das Teammeeting",
    callback: function(){ 

        bootbox.prompt({ 
            size: "big",
            inputType: 'textarea',
            title: "•Willkommen bei Mahr EDV: Neue Teammitglieder:",
            callback: function(result) {
                PQ1 = result;

                bootbox.prompt({ 
                    size: "big",
                    inputType: 'textarea',
                    title: "•Teamerfolg und Bonus:",
                    callback: function(result) {
                        PQ2 = result;
        
                        bootbox.prompt({ 
                            size: "big",
                            inputType: 'textarea',
                            title: "•Neues aus den Teams: Aktuelle Neukunden:",
                            callback: function(result) {
                                PQ3 = result;

                                bootbox.prompt({ 
                                    size: "big",
                                    inputType: 'textarea',
                                    title: "•Neues aus den Teams: Status Los Wochos (insbes. SMBv1, LDAP)",
                                    callback: function(result) {
                                        PQ4 = result;
                                        
                                        bootbox.prompt({ 
                                            size: "big",
                                            inputType: 'textarea',
                                            title: "•Neues aus den Teams: Los Wochos „Wer hat den schönsten Kabelsalat“",
                                            callback: function(result) {
                                                PQ5 = result;

                                                bootbox.prompt({ 
                                                    size: "big",
                                                    inputType: 'textarea',
                                                    title: "•Geplante Erweiterung der Standorte 2020",
                                                    callback: function(result) {
                                                        PQ6 = result;

                                                        bootbox.prompt({ 
                                                            size: "big",
                                                            inputType: 'textarea',
                                                            title: "•Info Better Tomorrow",
                                                            callback: function(result) {
                                                                PQ7 = result;

                                                                bootbox.prompt({ 
                                                                    size: "big",
                                                                    inputType: 'textarea',
                                                                    title: "•Schulungsplan",
                                                                    callback: function(result) {
                                                                        PQ8 = result;

                                                                        bootbox.prompt({ 
                                                                            size: "big",
                                                                            inputType: 'textarea',
                                                                            title: "•Prozess – KuDo Export",
                                                                            callback: function(result) {
                                                                                PQ9 = result;

                                                                                bootbox.prompt({ 
                                                                                    size: "big",
                                                                                    inputType: 'textarea',
                                                                                    title: "•Neues aus Social Media- Wettbewerbe & Auszeichnungen",
                                                                                    callback: function(result) {
                                                                                        PQ10 = result;

                                                                                        bootbox.prompt({ 
                                                                                            size: "big",
                                                                                            inputType: 'textarea',
                                                                                            title: "•Fragen/ Ideen/ Kritik/ Lob",
                                                                                            callback: function(result) {
                                                                                                PQ11 = result;

                                                                                                ZusammenfassungAmEnde();
                                                                                            }
                                                                                        });
                                    
                                                                                    }
                                                                                });
                            
                                                                            }
                                                                        });
                    
                                                                    }
                                                                });
                                                            
                                                            }
                                                        });
                                                    
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });

            }
        });
    }
})


/*
const PQ1 = "•Willkommen bei Mahr EDV: Neue Teammitglieder:"
const PQ2 = prompt("•Teamerfolg und Bonus:")
const PQ3 = prompt("•Neues aus den Teams: Aktuelle Neukunden:")
const PQ4 = prompt("•Neues aus den Teams: Status Los Wochos (insbes. SMBv1, LDAP)")
const PQ5 = prompt("•Neues aus den Teams: Los Wochos „Wer hat den schönsten Kabelsalat“")
const PQ6 = prompt("•Geplante Erweiterung der Standorte 2020")
const PQ7 = prompt("•Info Better Tomorrow")
const PQ8 = prompt("•Schulungsplan")
const PQ9 = prompt("•Prozess – KuDo Export")
const PQ10 = prompt("•Neues aus Social Media- Wettbewerbe & Auszeichnungen")
const PQ11 = prompt("•Fragen/ Ideen/ Kritik/ Lob")
const main = document.querySelector('main');



////// Output after Answering the Questions!

document.querySelector('main').innerHTML = "<p> •Willkommen bei Mahr EDV: Neue Teammitglieder:</p>"
document.querySelector('main').innerHTML += PQ1 
document.querySelector('main').innerHTML += "<p> •Teamerfolg und Bonus: </p>"
document.querySelector('main').innerHTML += PQ2
document.querySelector('main').innerHTML += "<p> •Neues aus den Teams: Aktuelle Neukunden: </p>"
document.querySelector('main').innerHTML += PQ3
document.querySelector('main').innerHTML += "<p> •Neues aus den Teams: Status Los Wochos (insbes. SMBv1, LDAP) </p>"
document.querySelector('main').innerHTML += PQ4
document.querySelector('main').innerHTML += "<p> •Neues aus den Teams: Los Wochos „Wer hat den schönsten Kabelsalat“ </p>"
document.querySelector('main').innerHTML += PQ5
document.querySelector('main').innerHTML += "<p> •Geplante Erweiterung der Standorte 2020 </p>"
document.querySelector('main').innerHTML += PQ6
document.querySelector('main').innerHTML += "<p> •Info Better Tomorrow </p>"
document.querySelector('main').innerHTML += PQ7
document.querySelector('main').innerHTML += "<p> •Schulungsplan </p>"
document.querySelector('main').innerHTML += PQ8
document.querySelector('main').innerHTML += "<p> •Prozess – KuDo Export </p>"
document.querySelector('main').innerHTML += PQ9
document.querySelector('main').innerHTML += "<p> •Neues aus Social Media- Wettbewerbe & Auszeichnungen </p>"
document.querySelector('main').innerHTML += PQ10
document.querySelector('main').innerHTML += "<p> •Fragen/ Ideen/ Kritik/ Lob </p>"
document.querySelector('main').innerHTML += PQ11



/*
function meetingsProtokoll() {
    const PQ1 = prompt("•Willkommen bei Mahr EDV: Neue Teammitglieder:")
    const main = document.querySelector('main');
    document.querySelector('main').innerHTML = "<p> •Willkommen bei Mahr EDV: Neue Teammitglieder:</p>"
    document.querySelector('main').innerHTML += PQ1 
    const PQ2 = prompt("•Teamerfolg und Bonus:");
    document.querySelector('main').innerHTML = "<p> •Teamerfolg und Bonus::</p>"
    document.querySelector('main').innerHTML += PQ2
}

meetingsProtokoll();
*/



