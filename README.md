# 🕹️ Orientação a Objetos em JavaScript (Exemplo Simples)

Esse repositório foi criado pra ajudar iniciantes a **entender Orientação a Objetos (OOP)** em JavaScript  
sem papo acadêmico chato e sem código confuso.

Aqui a ideia é aprender **na prática**, usando um exemplo simples de jogo
com Player e Inimigo.

---

## 📚 O que esse código ensina

- Classes
- Objetos
- Constructor
- Herança (`extends`)
- Polimorfismo
- Encapsulamento
- Diferença entre **classe** e **objeto**

Tudo isso usando **JavaScript puro**.

---

## 🧠 Conceito principal

- `Personagem` é a classe base
- `Player` e `Inimigo` herdam de `Personagem`
- Cada classe tem suas próprias responsabilidades
- O código tenta simular uma lógica básica de jogo

---

## 🚀 Como rodar o código

### Opção 1 – 
1. Copie o código para um arquivo `index.js`

Opção 2 – Navegador
Abra o console do navegador
Cole o código inteiro
Veja os logs no console
🧪 Exemplo de uso
Copiar código
Js
const player = new Player("Mochi")
const slime = new Inimigo("Slime Verde", 40, 8, "Slime")

player.upar()
player.atacar(slime)
slime.atacar(player)

console.log(player.level)


🎯 Objetivo do repositório
Ajudar iniciantes a entender OOP
Servir como material de estudo
Ser um ponto de partida pra projetos maiores

🔥 ideias para vocês treinarem
Sistema de componentes (Vida, Ataque, Movimento)
Sistema de morte 
Sistema de experiência
Organização em múltiplos arquivos
Aplicar isso em um jogo de verdade
