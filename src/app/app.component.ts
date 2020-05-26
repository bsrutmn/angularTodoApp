import { Component } from '@angular/core';
import { Todo } from './Models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ItemList: Todo[] = [];
  Item:Todo = { completed:false,itemName: '' };

  addItem(){
   this.ItemList.push({ 'completed': this.Item.completed, 'itemName':this.Item.itemName});
    this.Item.itemName = '';
    console.log(this.ItemList);
  }

  todoComplete(todo:Todo){
    this.ItemList.find(x=> x.itemName == todo.itemName).completed=true;
     console.log(this.ItemList);
   }

   deleted(todo:Todo){
     let index = this.ItemList.indexOf(todo)
    this.ItemList.splice(index,1);

   }
}
 