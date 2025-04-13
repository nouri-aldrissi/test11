import { Component } from '@angular/core';

export interface Images {

  img:string ;

}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

    myImages: Images[] = [
      {
        img: 'images/imgPortfolio/poert1.png'
      },
      {
        img: 'images/imgPortfolio/port2.png'
      },
      {
        img: 'images/imgPortfolio/port3.png'
      },
       {
        img: 'images/imgPortfolio/poert1.png'
      },
      {
        img: 'images/imgPortfolio/port2.png'
      },
      {
        img: 'images/imgPortfolio/port3.png'
      }

    ];
    
    ImageModel :Images = {} as Images;
  
    showImage(item:Images):void{
  
     this.ImageModel = item;
  
    }

}
