

const { createApp } = Vue

createApp({

    data() {

        return {
            
            currentChat: null,

            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],


            messageSent: {
                message: '',
                status: 'sent',
                date: '10/01/2020 15:30:55'
            },

            messageReceived: {
                message: '',
                status: 'received',
                date: '10/01/2020 15:30:55'
            },

            ChatUserName: '',

            randomResponseArray: [
                'ora non posso, ti chiamo stasera',
                'va bene',
                'Che bella idea!',
                'Puoi spiegarmelo meglio?',
                'Non vedo l\' ora',
                'Grazie per avermelo detto',
                'Forse potremmo trovare un compromesso. Che ne dici?',
                'Mmm, non sono sicuro',
                'Wow, che emozione!',
                'Non ci avevo pensato, hai ragione!',
            ],

        }
        
    },

    methods: {
        
        // metodo per visualizzare in pagina i messaggi aL click delle chat
        activeChat(index) {

            this.currentChat = index

        },

        // metodo per convertire la data in ore e minuti
        getHoursMins(date) {
            return date.slice(11).slice(0, 5);
        },

        // metodo per inviare nuovo messaggio e ricevere risposta automatica
        sendNewMessage() {

            // controllo che il testo del messaggio non sia vuoto
            if(this.messageSent.message.trim() != '') {

                // pusho il messaggio e resetto il campo di input
                this.contacts[this.currentChat].messages.push({...this.messageSent});
                this.messageSent.message = '';
                
                // variabile che serve a ricevere il messaggio nella chat in cui viene inviato anche se clicco subito su un'altra chat
                let currentChatResponse = this.currentChat;

                // delay della risposta di un secondo
                setTimeout(() => {
                    let randomResponse = this.randomResponseArray[Math.floor((Math.random() * this.randomResponseArray.length))];
                    this.messageReceived.message = randomResponse;
                    this.contacts[currentChatResponse].messages.push({...this.messageReceived});
                }, 1000);
            }

        },

        // funzione per filtrare i contatti
        filterChat() {
            this.contacts.forEach(currentContact => {
                
                if(currentContact.name.toLowerCase().includes(this.ChatUserName.toLowerCase())) {

                    currentContact.visible = true;

                } else {

                    currentContact.visible = false;

                }
            });
        },

        // funzione per eliminare un messaggio
        deleteMessage(index) {
            this.contacts[this.currentChat].messages.splice(index, 1)
        },

        // funzione per aprire la chat in versione mobile
        openChatMobile() {
            document.querySelector('#left-bar').classList.add('mobile-hidden');
            document.querySelector('#left-bar').classList.remove('mobile-active');
            document.querySelector('#main-content').classList.add('mobile-active');
            document.querySelector('#main-content').classList.remove('mobile-hidden');

        },

        // funzione per chuidere la chat in versione mobile
        closeChatMobile() {
            document.querySelector('#left-bar').classList.remove('mobile-hidden');
            document.querySelector('#left-bar').classList.add('mobile-active');
            document.querySelector('#main-content').classList.remove('mobile-active');
            document.querySelector('#main-content').classList.add('mobile-hidden');
        },

        switchDarkMode() {
            document.querySelector("body").classList.toggle("dark-body")
            document.querySelector("#app").classList.toggle("dark-mode")
        }
        
    },

    mounted() {

        // smetto di visualizzare la pagina di benvenuto dopo due secondi dall'apertura dell'app
        setTimeout(() => {
            document.querySelector("#splash").classList.add("hidden")
        }, 2000);
    }

}).mount('#app');