import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolio';
  public isCollapsed = true;
  yOffset: number = 0;
  shouldShowNavigation: boolean = true;

  constructor(private router: Router) {}

  navigateToUrl(type:any){
    this.router.navigate(["articles"])
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    this.shouldShowNavigation = window.scrollY < 100 || (this.yOffset - window.scrollY) > 0;
    this.yOffset = window.scrollY;
  }
}


