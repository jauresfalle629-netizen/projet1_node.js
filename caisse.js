let Budget = 20000;
console.log(" ")
let prix_cahier = 1500;
let quantite_cahier = 4;
let prix_stylo = 500
let quantite_stylo = 3;
console.log(" ");
let montant_cahier = prix_cahier * quantite_cahier;
let montant_stylo = prix_stylo * quantite_stylo;
let total = montant_cahier + montant_stylo;
console.log(" ");
console.log(" ===== CAISSE =====" );
console.log("Cahier :", montant_cahier, "Fcfa");
console.log("Stylo :", montant_stylo, "Fcfa");
console.log("TOTAL :", total, "Fcfa");
console.log("Budget :", Budget, "Fcfa");
console.log(" ");
if (total <= Budget){
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant");
}
console.log(" ");
for (let i = 1; i <= 5; i++) {
    console.log("Achat  numero", i);
}