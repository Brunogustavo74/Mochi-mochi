// Classe base (molde)
// Isso aqui é o PAI de todo mundo: Player, Inimigo, o caralho todo
class Personagem {
  
  // constructor roda AUTOMATICAMENTE qnd vc cria um objeto com "new"
  // serve pra definir os valores iniciais
  constructor(nome, vida, dano) {
    this.nome = nome // nome do personagem
    this.vida = vida // vida atual
    this.dano = dano // dano que ele causa
  }
  
  // método atacar
  // "alvo" é quem vai levar porrada
  atacar(alvo) {
    // só um print pra ver no console
    console.log(`${this.nome} atacou ${alvo.nome} igual um corno`)
    
    // chama a função tomarDano do alvo
    // repare: esse personagem NÃO SABE como o outro perde vida
    // ele só manda o dano. Encapsulamento.
    alvo.tomarDano(this.dano)
  }
  
  // método que reduz a vida
  tomarDano(valor) {
    this.vida -= valor // tira vida com base no dano recebido
    
    console.log(`${this.nome} tomou ${valor} de dano | vida: ${this.vida}`)
    
    // checa se morreu
    if (this.vida <= 0) {
      console.log(`${this.nome} foi de base ☠️`)
    }
  }
}

// Inimigo HERDA tudo de Personagem
// ou seja: vida, dano, atacar, tomarDano… tudo vem de graça
class Inimigo extends Personagem {
  
  // construtor do inimigo
  constructor(nome, vida, dano, tipo) {
    
    // super chama o constructor da classe PAI (Personagem)
    super(nome, vida, dano)
    
    // propriedade extra só do inimigo
    this.tipo = tipo
  }
  
  // sobrescrevendo o método atacar
  // isso é POLIMORFISMO
  atacar(alvo) {
    console.log(`👿 ${this.tipo} surtou`)
    
    // chama o atacar ORIGINAL da classe pai
    // reaproveita o código ao invés de copiar igual um animal
    super.atacar(alvo)
  }
}

// Player também herda de Personagem
class Player extends Personagem {
  
  constructor(nome) {
    
    // player sempre começa com 100 de vida e 15 de dano
    // valores fixos pq é design de jogo
    super(nome, 100, 15)
    
    // atributo exclusivo do player
    this.level = 1
  }
  
  // método só do player
  upar() {
    this.level++ // aumenta o level
    this.dano += 5 // buffa o dano
    console.log(`${this.nome} upou pro level ${this.level}`)
  }
}


const player = new Player("Mochi")//criação de um player

player.upar()
console.log(player.level)