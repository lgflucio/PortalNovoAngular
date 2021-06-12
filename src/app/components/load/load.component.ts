import { Component, OnInit } from '@angular/core';

let showLoad: boolean;
export let load = {
  /**
   * Exibe o Load em Fullscreen
   */
  show() {
    showLoad = true;
  },
  hidden() {
    showLoad = false;
  }
};

@Component({
  selector: 'load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  public showLoad: boolean;
  constructor() { showLoad = true }

  ngOnInit(): void {
  }

  public loading() {
    return showLoad;
  }
}
