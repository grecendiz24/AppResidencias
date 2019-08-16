Vue.component('titulo', {
    template://html
        `
     <div>
      <h1>numero {{numero}}</h1>
      <hijo></hijo>
     </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','dis'])
    }
});
Vue.component('hijo', {
    template://html
        `
        <div class="row">
        <section class="container">

            <h5 class="card-panel lime lighten-1  center-align">
                <i class="material-icons prefix">spellcheck</i>
                Crear y Asignar tarea
            </h5>

            <div class="z-depth-2">
                <div class="row">
                    <form>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">assignment</i>
                            <input id="titulo" type="text" class="validate">
                            <label for="titulo">Titulo</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">device_hub</i>
                            <input id="area" type="tel" class="validate">
                            <label for="area">Area</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <select class="icons" id="responsable">
                                <option value="0" disabled selected>Selecciona</option>
                                <option value="Programador"
                                    data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yo_como_profe.png/250px-Yo_como_profe.png"
                                    class="left">Programador 1</option>
                                <option value="Diseñador" data-icon="images/office.jpg" class="left">Diseñador 2</option>
                                <option value="Tester" data-icon="images/yuna.jpg" class="left">Tester 3</option>
                            </select>
                            <label>Asignar a:</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <select class="icons" id="Proyecto">
                                <option value="0" disabled selected>Selecciona</option>
                                <option value="Protectio"
                                    data-icon="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Yo_como_profe.png/250px-Yo_como_profe.png"
                                    class="left">Protectio</option>
                                <option value="LWS" data-icon="images/office.jpg" class="left">LWS</option>
                                <option value="HILTI" data-icon="images/yuna.jpg" class="left">HILTI</option>
                            </select>
                            <label>Proyecto</label>
                        </div>
                        <div class="row">
                            <div class="input-field col s12 m12">
                                <textarea id="Descripcion" class="materialize-textarea"></textarea>
                                <label for="Descripcion">Descripcion</label>
                            </div>
                        </div>




                        <div class="input-field col s12 m6">
                            <i class="material-icons prefix">event</i>
                            <input type="text" class="datepicker" id="fecLimite">
                            <label for="fecLimite">Fecha Limite</label>
                        </div>
                        <div class="input-field col s12 m6">
                            <button class="btn waves-effect waves-light" onclick="add()" id="bot" type="button" name="action">
                                Agregar
                                <i class="material-icons right">send</i>
                            </button>
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <hr>
                        <table >
                                <thead>
                                    <tr>
                                        <th>Titulo</th>
                                        <th>Area</th>
                                        <th>Responsable</th>
                                        <th>Proyecto</th>
                                        <th>Fecha Limite</th>
                                        <th>Eliminar</th>
                                        <th>Editar</th>
                                    </tr>
                                </thead>
        
                                <tbody id="tabla"> 
                            
                                    
                                </tbody>
                            </table>







                    </form>
                </div>

        </section>
      








    </div>

     <div>
     <button @click="aumentar">+</button>
     <button @click="dis(1)">-</button>
     <button @click="obtener">obtener pokemon</button>
     <h1>numero {{numero}}</h1>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>
        </ul>

     </div>
    `,
    computed: {
        ...Vuex.mapState(['numero','cursos'])
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','dis']),
        ...Vuex.mapActions(['obtener'])
    }
});

const store= new Vuex.Store({
state:{
    numero:10,
    cursos:[]
},
mutations:{
    aumentar(state){
        state.numero++
    },
    dis(state,n){
        state.numero-=n
    },
    llenar(state,cursosAccion){
        state.cursos=cursosAccion
    }

},
actions:{
    obtener: async function({commit}){
        const data=await fetch('js/cursos.json');
        const cursos=await data.json();
        commit('llenar',cursos)
    }
}

});


new Vue({
    el: '#holavue',
    store: store,
   /* data: {
        titulo: 'Hola mundo vue',
        frutas: [
            { nombre: 'Manzana', cantidad: 10 },
            { nombre: 'pera', cantidad: 0 },
            { nombre: 'platano', cantidad: 50 }

        ],
        nuevaFruta: ' ',
        total: 0
    },
    methods: {
        add() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 10
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumartodo() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    }*/

})