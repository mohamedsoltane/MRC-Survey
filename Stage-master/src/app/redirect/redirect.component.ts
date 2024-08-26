import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';


@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})

export class RedirectComponent extends RatingComponent {

  storeOpinion: string = '';

  constructor(route: Router,
    private route1: Router,
    elRef: ElementRef,
    renderer: Renderer2)
   {
    super(route, elRef, renderer);
  }

    updateRating(newRating: string) {
      this.totalrating1 = parseFloat(newRating);
      this.totalrating2 = parseFloat(newRating);
      this.totalrating3 = parseFloat(newRating);
      this.totalrating4 = parseFloat(newRating);
  }


    getOptions() {
      const storeValue1 = window.localStorage.getItem("totalrating1");
      this.storeValue1 = storeValue1 ? parseFloat(storeValue1) : 0;

      const storeValue2 = window.localStorage.getItem("totalrating2");
      this.storeValue2 = storeValue2 ? parseFloat(storeValue2) : 0;

      const storeValue3 = window.localStorage.getItem("totalrating3");
      this.storeValue3 = storeValue3 ? parseFloat(storeValue3) : 0;

      const storeValue4 = window.localStorage.getItem("totalrating4");
      this.storeValue4 = storeValue4 ? parseFloat(storeValue4) : 0;

      const storedOpinion = window.localStorage.getItem("opinion");
      this.storeOpinion = storedOpinion ? storedOpinion : '';

      const ratingsArray = [
        this.storeValue1,
        this.storeValue2,
        this.storeValue3,
        this.storeValue4
      ];
  
    return ratingsArray;
  }

  redirection(){
    this.route1.navigate(['/rating']);
  }






fileDownload() {

  this.getOptions(); // Ensure data is up-to-date

  const data = [
    {
      "Catégorie": "Très satisfait(e)",
      "Valeur": this.storeValue1
    },
    {
      "Catégorie": "Satisfait(e)",
      "Valeur": this.storeValue2
    },
    {
      "Catégorie": "Moyennement satisfait(e)",
      "Valeur": this.storeValue3
    },
    {
      "Catégorie": "Insatisfait(e)",
      "Valeur": this.storeValue4
    },
    {
      "Catégorie": "Opinions",
      "Valeur": this.storeOpinion
    }
  ];

  const options = {
    fieldSeparator: '  :  ',
    quoteStrings: '"',
    decimalseparator: '',
    showLabels: false,
    showTitle: true,
    title: 'Report Data',
    useBom: true,
    headers: ["Catégorie", "Valeur"]
    };
 
  new ngxCsv(data, "Résultats d'évaluations", options);
}

}