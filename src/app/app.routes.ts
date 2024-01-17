import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'node:path';
import { RickAndMortyComponent } from './rick-and-morty/rick-and-morty.component';

export const routes: Routes = [
    {
        path: '',
        component:  RickAndMortyComponent,
    }
];
