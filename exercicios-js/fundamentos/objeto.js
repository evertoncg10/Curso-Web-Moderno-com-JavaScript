const prod1 = {};
prod1.nome = "Celular Top";
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40; // Evitar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        prop1: 1,
        obj2: {
            prop2: 2
        }
    }
};

console.log(prod2);