import { Component } from '@angular/core';
import { VideokartyaService } from '../videokartya.service';

@Component({
  selector: 'app-videokartyak',
  standalone: false,
  templateUrl: './videokartyak.component.html',
  styleUrl: './videokartyak.component.css'
})
export class VideokartyakComponent {

  constructor(private videokartyaService: VideokartyaService) { }

  videokartyak: any[] = [];

  listVideokartyak() {
    this.videokartyaService.getAllVideokartyak().subscribe(data => {
      this.videokartyak = data;
    });
  }

  listAMDVideokartyak() {
    this.videokartyaService.getAMDVideokartyak().subscribe(data => {
      this.videokartyak = [];
      this.videokartyak = data;
    });
  }

  listNVIDIAVideokartyak() {
    this.videokartyaService.getNVIDIAVideokartyak().subscribe(data => {
      this.videokartyak = [];
      this.videokartyak = data;
    });
  }

  ngOnInit() {
    this.listVideokartyak();
  }



}
