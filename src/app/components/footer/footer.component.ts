import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="bg-light text-center text-lg-start">
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © {{currentYear}} Copyright OMARI ISMAIL
  </div>
</footer>
  `,
  styles: [
  ]
})
export class FooterComponent  {
  currentYear = new Date().getFullYear();

  }


