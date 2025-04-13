import { Component } from '@angular/core';


export interface intSkill {
  id: number;
  Title: string;
  des: string;
  img: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  titlePage:string = 'My Skills';

  skills: intSkill[] = [
    {
      id: 1,
      Title: 'HTML',
      des: `HTML is the standard markup language for creating web pages and web applications.`,
      img: 'images/imgSkills/HTML.png'
    },
    {
      id: 2,
      Title: 'CSS',
      des: `CSS is a language used for styling web pages. It describes how HTML elements should be displayed.`,
      img: 'images/imgSkills/CSS.png'
    },
    {
      id: 3,
      Title: 'JavaScript',
      des: `JavaScript is a programming language that enables interactive web pages.`,
      img: 'images/imgSkills/JS.jpg'
    },
    {
      id: 4,
      Title: 'Angular',
      des: `Angular is a platform for building single-page client applications using HTML and TypeScript.`,
      img: 'images/imgSkills/ANG.png'
    },
    {
      id: 5,
      Title: 'C#',
      des: `C# is a modern, object-oriented programming language developed by Microsoft. It is widely used for developing desktop applications and games.`,
      img: 'images/imgSkills/Cc.png'
    },
    {
      id: 6,
      Title: 'SQL Server',
      des: `SQL Server is a relational database management system developed by Microsoft. It supports a variety of transaction processing, business intelligence, and analytics applications.`,
      img: 'images/imgSkills/SQL.png'
    }
  ];
  
  skillModel :intSkill = {} as intSkill;

  showSkill(item:intSkill):void{

   this.skillModel = item;

  }
}
