import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HomehelperService } from 'src/app/commonhelper/homehelper/homehelper.service';

@Component({
  selector: 'app-single-chit',
  templateUrl: './single-chit.component.html',
  styleUrls: ['./single-chit.component.scss'],
})
export class SingleChitComponent {
  chitItemDetails: any;
  commissionAmount: any;
  _id: any;

  constructor(
    private homehelper: HomehelperService,
    private ar: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.ar.params.subscribe((res) => {
      this._id = res['id'];
    });
    this.homehelper.getChit(this._id).subscribe({
      next: (result) => {
        this.chitItemDetails = result;
        this.chitItemDetails = this.chitItemDetails[0];
        this.commissionAmount =
          (this.chitItemDetails?.commission * this.chitItemDetails.amount) /
          100;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  createChit() {
    this.router.navigateByUrl(`home/${this._id}/create-chit`);
  }

  ngOnChanges() {}
}
