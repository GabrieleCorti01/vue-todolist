
// Rifacciamo l'esercizio della toDoList come fatto assieme in classe, 
// suddividendo i nostri -milestone- principalmente in questi step:
// Stampare in pagina un item per ogni elemento contenuto in un array
// Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// Predisporre un input per aggiungere un nuovo item alla lista: digitando 
// il tasto invio oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista

let root = new Vue({
    el: "#root",
    data: {
        listaSpesa : ["Banane", "Calamari", "Gocciole Pavesi", "Pesce spada", "Arancia"],
        toDoField: "",
    },
    methods: {

        eliminaElemento : function(elementIndex){
            this.listaSpesa.splice(elementIndex, 1);
            console.log(this.listaSpesa)
        },

        nuovoIngrediente : function(){
            if(this.toDoField.trim().length > 0){
                this.listaSpesa.push(this.toDoField); 
                this.toDoField = "";
            }

        },

        keyUpEvent : function(event){
            if(event.keyCode === 13){
                this.nuovoIngrediente()
            }
        }
    },
    
})


