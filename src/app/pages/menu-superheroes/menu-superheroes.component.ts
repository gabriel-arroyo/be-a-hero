import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from "@angular/core";
import {
  style,
  animate,
  AnimationBuilder,
  AnimationPlayer
} from "@angular/animations";
@Component({
  selector: 'app-menu-superheroes',
  templateUrl: './menu-superheroes.component.html',
  styleUrls: ['./menu-superheroes.component.scss']
})
export class MenuSuperheroesComponent implements AfterViewInit {
  @ViewChildren("cell") items!: QueryList<ElementRef>;
  private player!: AnimationPlayer;
  private item!: ElementRef<any> | undefined;
  timer = 450;
  timing = "450ms";
  animates = [0, 2, 7];

  cellWidth:number=50;
  radius:number=150;
  minScale:number=.5;

  get cellCount(){
    return this.items.length
  }
  selectedIndex = 0;

  movements = [
    { pos: 0, right: [1, 2], left: [8, 7] },
    { pos: 2, right: [3, 4, 5, 6, 7], left: [1, 0] },
    { pos: 7, right: [8, 0], left: [6, 5, 4, 3, 2] }
  ];

  constructor(private builder: AnimationBuilder) {}
  
  animateCarousel() {
    this.items.forEach((item: ElementRef, i: number) => {
      const myAnimation = this.builder.build([
        animate(this.timing, style(this.getStyle(i)))
      ]);
      this.player = myAnimation.create(item.nativeElement);
      this.player.play();
    });
  }

  getStyle(index: number) {
    if (!this.cellCount) return null;
    const angle = ((index - this.selectedIndex) * 2 * Math.PI) / this.cellCount;
    const scale = (75 + 25 * Math.cos(angle)) / 100;

    return {
      left: -75 + 150 * Math.sin(angle) + "px",
      transform: "scale(" + scale + ")",
      position: "absolute",
      "z-index": Math.floor(100 * scale)
    };
  }

  prev() {
    this.selectedIndex--;
    this.animateCarousel();
  }
  next() {
    this.selectedIndex++;
    this.animateCarousel();
  }

  ngAfterViewInit() {
    this.animateCarousel();
  }

}
