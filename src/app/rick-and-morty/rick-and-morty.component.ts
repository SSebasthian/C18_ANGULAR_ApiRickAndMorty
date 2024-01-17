import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-rick-and-morty',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, HttpClientModule],
  providers: [ApiService],
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.scss'
})
export class RickAndMortyComponent implements OnInit{

  data:any[] = [];

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      console.log(this.data);
    })
  }

}
