import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomehelperService } from 'src/app/commonhelper/homehelper/homehelper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  chitItems: any;

  constructor(private homehelper: HomehelperService, private router: Router) {}

  ngOnInit() {
    this.homehelper.getChits().subscribe({
      next: (result) => {
        this.chitItems = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  chitCreate(id: any) {
    this.router.navigateByUrl(`home/${id}`);
  }
}
