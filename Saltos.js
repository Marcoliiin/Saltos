var atletas = []


class atleta {
   constructor(nome, s1, s2, s3, s4, s5) {
      this.nome = nome
      this.s1 = s1;
      this.s2 = s2;
      this.s3 = s3;
      this.s4 = s4;
      this.s5 = s5;

   }
   nome = ""
   s1 = 0;
   s2 = 0;
   s3 = 0;
   s4 = 0;
   s5 = 0;

   st() {
      return("Saltos do atleta " + this.nome + ": " + this.s1 + " - " + this.s2 + " - " + this.s3 + " - " + this.s4 + " - " + this.s5);
   }

   sm() {
      return("A média dos seus do atleta " + this.nome + " é: ") + (parseFloat(this.s1) + parseFloat(this.s2) + parseFloat(this.s3) + parseFloat(this.s4) + parseFloat(this.s5))/5
   }
}

function criarAtleta(nome, s1, s2, s3, s4, s5) {
   const newatleta = new atleta(nome, s1, s2, s3, s4, s5)
   atletas.push(newatleta)

   window.document.getElementById("textinput1").value = ("")
   window.document.getElementById("textinput2").value = ("")
   window.document.getElementById("textinput3").value = ("")
   window.document.getElementById("textinput4").value = ("")
   window.document.getElementById("textinput5").value = ("")
   window.document.getElementById("textinput6").value = ("")
}

function adicionarAtleta() {

   let nome = document.getElementById("textinput1").value
   let s1 = document.getElementById("textinput2").value
   let s2 = document.getElementById("textinput3").value
   let s3 = document.getElementById("textinput4").value
   let s4 = document.getElementById("textinput5").value
   let s5 = document.getElementById("textinput6").value

   criarAtleta(nome, s1, s2, s3, s4, s5)
}

function mostrarAtletas() {
   let show1 = document.getElementById("result1"); 
   let show2 = document.getElementById("result2");
   
   atletas.forEach(element => {
      show1.innerHTML = element.st(); 
      show2.innerHTML= element.sm();
   });
}