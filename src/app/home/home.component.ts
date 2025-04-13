import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from "../skills/skills.component";

export interface Information {
  name: string;
  des: string;
  list: {
    JobTitle: string;
    Skills: string;
    Email: string;
  };
  img: string; 
}




@Component({
  selector: 'app-home',
  imports: [ SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  information:Information = {
    name: 'Nouri Al-Drissi',
    des: `I’m Nouri from Libya, a Front-End Developer (Angular) and Desktop App Developer (C# & SQL Server). I specialize in building interactive UIs with Angular, HTML, CSS, and JavaScript, and have experience with C# and SQL Server for desktop apps. Currently, I’m developing my Full-Stack skills at Root Academy, focusing on Angular, Bootstrap, and ASP.NET.`,
        list: {
      JobTitle: 'Front-End Developer AND Desktop Developer',
      Skills: ' HTML, CSS, JavaScript, Angular, Bootstrap & C# , Sql',
      Email: 'Nouri.ali.aldrissi@gmail.com'
    },
    img:`images/avataaars.svg`
  };

  
}

