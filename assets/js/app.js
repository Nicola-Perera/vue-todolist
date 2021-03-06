/*  ToDoList

    Rifare l'esercizio della to do list come fatto assieme in classe:
        stampare in pagina un item per ogni elemento contenuto in un array
        ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
        predisporre un input per aggiungere un nuovo item alla lista: 
            digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

    FUNZIONALITà DI BASE:
    
    La nostra todo list avrá alcune tasks di default predefinite
    L'utente puó inserire nuove tasks
    Cliccando sulla "X" l'utente puó cancellare una task
    Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
    ma vuole anche poter indicare che la task é stata completata (con un icona cliccabile)
    Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
    
    Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
*/

const app = new Vue ({
    el: '#root',
    data: {
        tasks: [
            'cambiare lampadina',
            'riparare mensola',
            'fare la spesa',
            "lavare l'auto"
        ],
    newTask: '',
    editedTask: '',
    edit: false,
    error: false
    },
    methods: {
        deleteTask(i) {
            this.tasks.splice(i, 1,);
        },
        addTask() {
            if (this.newTask.length > 2) {
                this.tasks.push(this.newTask);
                this.error = false
            }
            else {
                this.error = true
            }
            this.newTask = '';
        },
        modifyTask() {
            this.edit = true
        },
        editTask(i) {
            this.tasks.splice(i, 1, this.editedTask);
            this.editedTask = '';
            this.edit = false
        }
    }
})