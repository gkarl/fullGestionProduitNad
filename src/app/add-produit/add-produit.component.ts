import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();
  message: string | undefined;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addProduit() {
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' Ajouté avec success merci!';
  }
}
