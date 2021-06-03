import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Post } from '../Post';
import { Comments} from '../Comment';
@Component({
  selector: 'app-saisi',
  templateUrl: './saisi.component.html',
  styleUrls: ['./saisi.component.css']
})
export class SaisiComponent implements OnInit {

  posts:Post[];
  person:any;
  inputPost:any;
  inputComment:any;

 // url:any ;
  msg:string="";
  

  constructor() { }

  ngOnInit(): void {

    this.posts=[
      {
        content : " This is my first post !!",
        person :"Hajar BOUSSOUF",
        commentaires : [ 
          {
          commentaire : "like it"
        },
        {
          commentaire : "Nice"
        }
          ]
      } ]
       
    
     
  }
  addPost(){
    this.posts.push({
      content : this.inputPost,
      person: this.person,
      commentaires : []
    }
    )
    this.inputPost="";
    this.person="";
  }

  

  addComment(post){
    post.commentaires.push({commentaire:this.inputComment});
    this;this.inputComment="";

      
    



  }
  

}
