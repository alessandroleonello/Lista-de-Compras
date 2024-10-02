export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;

        const dataAtualizada = elemento.querySelector(".texto-data");
        dataAtualizada.textContent = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric"})}`;

        const estavaComprado = elemento.querySelector(".input-checkbox").checked

        if(estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizzado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
    }
}

