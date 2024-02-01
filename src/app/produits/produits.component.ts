import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  //produits: String[];
  produits?: Produit[];

  constructor(private produitService: ProduitService) {}
  ngOnInit(): void {
    this.produits = this.produitService.listeProduit();
  }
}
