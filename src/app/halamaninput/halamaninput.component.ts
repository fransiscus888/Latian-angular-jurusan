import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-halamaninput',
  templateUrl: './halamaninput.component.html',
  styleUrls: ['./halamaninput.component.css']
})
export class HalamaninputComponent implements OnInit {
  nama ;
  penjelasan;
  arrnama : Array <String> = [];
  arrpenjelasan: Array <String> = [];
  co ;
  show;
  constructor() { 
    this.co=0;
    this.show=false;
  }
  ngOnInit() {}
  add(){
    this.show=true;
    this.arrnama.push(this.nama);
    this.arrpenjelasan.push(this.penjelasan);
    this.co= parseInt(this.co)+1 ;
  }
    
}