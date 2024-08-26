import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnInit {
  title = "local_storage";
  name: string = "";
  CopyText: string = "";

  storeValue1: number = 0;
  storeValue2: number = 0;
  storeValue3: number = 0;
  storeValue4: number = 0;

  protected ratingcount1 = 0;
  protected totalrating1 = 0;
  protected Finalrating1: any;
  protected ratingcontrol1 = new FormControl(0);

  protected ratingcount2 = 0;
  protected totalrating2 = 0;
  protected Finalrating2: any;
  protected ratingcontrol2 = new FormControl(0);

  protected ratingcount3 = 0;
  protected totalrating3 = 0;
  protected Finalrating3: any;
  protected ratingcontrol3 = new FormControl(0);

  protected ratingcount4 = 0;
  protected totalrating4 = 0;
  protected Finalrating4: any;
  protected ratingcontrol4 = new FormControl(0);

  selectedRating: number = 0;

  constructor(private route: Router, private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    const content = this.elRef.nativeElement.querySelector('.content');
    const textarea = this.elRef.nativeElement.querySelector('.textarea');
    const btn = this.elRef.nativeElement.querySelector('.btn');

    this.renderer.listen(content, 'mouseleave', () => {
    this.renderer.removeClass(textarea, 'textarea--active');
    this.renderer.removeClass(btn, 'btn--active');
    });

    this.renderer.listen('document', 'click', (event) => {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.resetIconColors();
      }
    });
  }

  hasClickedRating1: boolean = false;
  hasClickedRating2: boolean = false;
  hasClickedRating3: boolean = false;
  hasClickedRating4: boolean = false;

GetRating1() {
  this.selectedRating = 1;
  this.hasClickedRating1 = true;
  this.activateTextarea();
}

GetRating2() {
  this.selectedRating = 2;
  this.hasClickedRating2 = true;
  this.activateTextarea();
  }


GetRating3() {
  this.selectedRating = 3;
  this.hasClickedRating3 = true;
  this.activateTextarea();
  }


GetRating4() {
  this.selectedRating = 4;
  this.hasClickedRating4 = true;
  this.activateTextarea();
  }

activateTextarea() {
  const textarea = this.elRef.nativeElement.querySelector('.textarea');
  const btn = this.elRef.nativeElement.querySelector('.btn');
  this.renderer.addClass(textarea, 'textarea--active');
  this.renderer.addClass(btn, 'btn--active');
  }

resetIconColors() {
  this.selectedRating = 0;
  }

saveOptions() {
  if (this.selectedRating === 0) {
    alert("Veuillez sélectionner une évaluation avant de sauvegarder 📢❗🚨");
  return;
  }
  
    switch (this.selectedRating) {
      case 1:
        this.ratingcount1++;
        this.totalrating1 += this.ratingcontrol1.value || 0;
        this.Finalrating1 = (this.totalrating1 / this.ratingcount1).toFixed(2);
        break;

      case 2:
        this.ratingcount2++;
        this.totalrating2 += this.ratingcontrol2.value || 0;
        this.Finalrating2 = (this.totalrating2 / this.ratingcount2).toFixed(2);
        break;

      case 3:
        this.ratingcount3++;
        this.totalrating3 += this.ratingcontrol3.value || 0;
        this.Finalrating3 = (this.totalrating3 / this.ratingcount3).toFixed(2);
        break;

      case 4:
        this.ratingcount4++;
        this.totalrating4 += this.ratingcontrol4.value || 0;
        this.Finalrating4 = (this.totalrating4 / this.ratingcount4).toFixed(2);
        break;
    }

  // Enregistrer dans le localStorage
  window.localStorage.setItem("totalrating1", String(this.totalrating1));
  window.localStorage.setItem("totalrating2", String(this.totalrating2));
  window.localStorage.setItem("totalrating3", String(this.totalrating3));
  window.localStorage.setItem("totalrating4", String(this.totalrating4));

  const textarea = document.querySelector('.textarea') as HTMLTextAreaElement;
  const opinion = textarea.value;
  const opinionWithSymbol = `🔹 ${opinion}`;
  window.localStorage.setItem("opinion", opinionWithSymbol);

  // Redirection vers la page congrats
  this.route.navigate(['/congrats']);
}
}

