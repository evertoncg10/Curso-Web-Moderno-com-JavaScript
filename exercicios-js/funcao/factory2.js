function criarPoduto(nome, preco){
	return {
		nome,
		preco,
		desconto: 0.1
	}
}

console.log(criarPoduto('Notebook', 2199.49));
console.log(criarPoduto('iPad', 1199.49));