import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  //router;

  archives = [
    { year: 2017, month: 1 },
    { year: 2018, month: 3 },
    { year: 2019, month: 6 }
  ];

  currentYear: number = 0;
  currentMonth: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {
    //this.router = router;
  }

  ngOnInit(): void {

  }

  isArchivesHome(): boolean {
    return this.router.url === '/archives';
  }

  archiveClick(archive: any) {
    this.currentMonth = archive.month;
    this.currentYear = archive.year;
    console.log(this.currentMonth + " " + this.currentYear);

    this.router.navigate(['/archives'], {
      queryParams: { year: this.currentYear, month: this.currentMonth }
    });
  }

  viewAll() {
    this.router.navigate(['/archives']);
  }
}
