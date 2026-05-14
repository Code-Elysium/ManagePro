const url = "http://localhost:8080/api/produtos";

async function listarProdutos() {
    const response = await fetch(url);
    const produtos = await response.json();
    const corpoTabela = document.querySelector("#tabelaProdutos tbody");
    corpoTabela.innerHTML = "";

    produtos.forEach(p => {
        corpoTabela.innerHTML += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.categoria}</td>
                <td>R$ ${p.preco}</td>
                <td><button onclick="excluir(${p.id})">Excluir</button></td>
            </tr>
        `;
    });
}

document.querySelector("#produtoForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const produto = {
        nome: document.querySelector("#nome").value,
        categoria: document.querySelector("#categoria").value,
        quantidade: document.querySelector("#quantidade").value,
        preco: document.querySelector("#preco").value
    };

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    });
    listarProdutos();
});

async function excluir(id) {
    await fetch(`${url}/${id}`, { method: "DELETE" });
    listarProdutos();
}

listarProdutos();