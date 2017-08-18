import { Component, ViewEncapsulation, OnInit, HostListener } from '@angular/core';
// import { AppService } from './app.service';
import { Router } from '@angular/router';
import { MenuMock } from './shared/mockdata/menu';
import { SearchMock } from './shared/mockdata/search';
import { MdDialog, MdSnackBar } from '@angular/material';

@Component({
  selector: 'gt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gt';
}
