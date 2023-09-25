import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { CardListComponent } from '../characters/components/card-list/card-list.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, UserPanelComponent, NgxSpinnerModule, CardListComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit, OnInit {
  @ViewChild('myVideo') myVideo!: ElementRef;
  isVideoReady: boolean = false;
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
  }
  ngAfterViewInit() {
    this.myVideo.nativeElement.addEventListener('loadedmetadata', () => {
      // Video metadata has loaded
      this.isVideoReady = true;
    });

    // Add an event listener for the 'canplaythrough' event
    this.myVideo.nativeElement.addEventListener('canplaythrough', () => {
      // Video is ready to play
      this.isVideoReady = true;
    });


  }

}

