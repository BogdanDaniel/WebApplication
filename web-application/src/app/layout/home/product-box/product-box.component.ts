import { OnInit, Component, Input } from "@angular/core";

@Component({
    selector: 'app-product-box',
    templateUrl: './product-box.component.html',
    styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {
    @Input() productType;
    
    ngOnInit() {

    }
    constructor() { }
}