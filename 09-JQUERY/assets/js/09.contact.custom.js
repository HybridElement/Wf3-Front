// -- Initialisation de jQuery (DOM READY)
$(function() {
    
        // -- Déclaration de Variables
        var CollectionDeContacts = [];
    
        /* --------------------------------------------------------------
                            DECLARATION DES FONCTIONS
        -------------------------------------------------------------- */
    
        // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
        function ajouterContact(UnContact) {}
    
        // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
        function reinitialisationDuFormulaire() {}
    
        // -- Affichage d'une Notification
        function afficheUneNotification() {}
    
        // -- Vérification de la présence d'un Contact dans Contacts
        function estCeQunContactEstPresent(UnEmail) {

            //-- Booleen qui indique la présence ou pas d'un contact
            let estPresent = false;

            //-- On parcourt le tableau à la recherche d'une correspondance
            for(let i =0; i < CollectionDeContacts.length ; i++) {

                if(UnEmail === CollectionDeContacts[i].email) {

                    //-- Si une correspondance est trouvé "estPrésent" passe à VRAI (true)
                    estPresent = true;

                    //-- On arrête la boucle, plus besoin de poursuivre.
                    break;
                }
            }

            //-- On retourne le booleen
            return estPresent;

        }
    
        // -- Vérification de la validité d'un Email
        // : https://paulund.co.uk/regular-expression-to-validate-email-address
        function validateEmail(email){
            var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            var valid = emailReg.test(email);
    
            if(!valid) {
                return false;
            } else {
                return true;
            }
        }
    
        /* --------------------------------------------------------------
                        TRAITEMENT DE MON FORMULAIRE
        -------------------------------------------------------------- */
    
        // -- Détection de la soumission de mon Formulaire
        $('#contact').on('submit', function(e) {
    
            // -- Voir le contenu de l'évènement
    
            // -- Stopper la redirection de la page
    
            // -- Récupération des champs à vérifier
            var nom, prenom, email, tel;
            nom = $('#nom');
            prenom = $('#prenom');
            email = $('#email');
            tel = $('#tel');
    
            // -- Vérification des informations...
            let mesInformationsSontValides = true;
            if(nom.val().lenght == 0){
               
                //-- Le champs est incorrect, car il n'a pas été rempli
                mesInformationsSontValides = false;
            }
            if(prenom.val().lenght == 0){
                 mesInformationsSontValides = false;
             }
                //-- Vérification du mail :
                if(!validateEmail(email.val()){
                 mesInformationsSontValides = false;
                }
             if(tel.val().length == 0){
                 mesInformationsSontValides = false;
             }

             if(mesInformationsSontValides){
            // -- ajouterContact si tous est correct.Préparation du contact.

                let Contact = {
                    //cle   //valeur
                    nom     :nom.val();
                    prenom  :prenom.val();
                    email   :email.val();
                    tel     :tel.val();
                }
            //-- Observons dans la console
            console.log(Contact);

            //-- Vérification avce EstCeQUunContactEstPresent
            if(!estCeQunContactEstPresent(email.val))

             } else {
                alert('ATTENTION\n Veuillez remplir totu les champs.'); 
                
            // -- Alert si erreur dans l'un des champs
    
        });
    
    }); // -- Fin de jQuery READY !