class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou o pedido de perdão';
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const heroi1 = new Heroi('Duarte', 39, 'guerreiro');
  heroi1.atacar(); // Saída: O guerreiro atacou usando espada
  
  const heroi2 = new Heroi('Mago Negro', 100, 'mago');
  heroi2.atacar(); // Saída: O mago atacou usando magia

  const heroi3 = new Heroi('JackChan', 67, 'monge');
  heroi3.atacar(); // Saída: O monge atacou usando artes marciais

  const heroi4 = new Heroi('Naruto', 15, 'ninja');
  heroi4.atacar(); // Saída: O ninja atacou usando shuriken

  
  
  