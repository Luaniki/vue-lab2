import './assets/main.css'

import { createApp } from 'vue'
import App from './src/app'
import router from './src/router'

import { Person } from './src/components/models/person';

const app = createApp(App)

app.use(router)

app.mount('#app')

export class AppComponent {
    title = 'app';
  
    personArray: Person[] = [
      {"id": 1,"ced": 100, "age": 18, "name": "J", "surname": "A"},
      {"id": 2, "ced": 200, "age": 19, "name": "K", "surname": "B"},
      {"id": 3, "ced": 300, "age": 17, "name": "L", "surname": "C"}
    ];
  
    selectedPerson: Person = new Person();
  
    openForEdit(person: Person){
      this.selectedPerson = person;
    }
  
    addOrEdit(){
      if(this.selectedPerson.id === 0){
        this.selectedPerson.id = this.personArray.length + 1;
        this.personArray.push(this.selectedPerson);
      }
  
      this.selectedPerson = new Person();
    }
  
    delete(){
      if(confirm('¿Estás seguro de querer eliminar los datos?')){
        this.personArray = this.personArray.filter(x => x != this.selectedPerson);
        this.selectedPerson = new Person();
      }
    }
  
    contarMay(): number {
      return this.personArray.filter(person => person.age >=18).length;
    }
  
    contarMen(): number {
      return this.personArray.filter(person => person.age <18).length;
    }
  
  }