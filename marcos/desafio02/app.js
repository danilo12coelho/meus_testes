new Vue({
    el: '#desafio02',
    data: {
        valor: ''
    },
    methods: {
        alerta(){
            alert('Clicou')
        },
        soma(){
            this.valor = event.target.value 
        }
    }

})