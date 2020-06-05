

function populateUFs() {
    const ufSelect = document.querySelector("[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    citySelect.innerHTML ="<option value> Selecione uma cidade</options>"
    citySelect.disabled = true


    fetch(url)
    .then(res => res.json() )
    .then(cities => {

        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

      citySelect.disabled = false
    } )
}

document.querySelector("select[name=uf]").addEventListener("change", getCities)

/// items de coleta 
const itemsToCollect = document.querySelectorAll(".items-grid li")

for ( const item of itemsToCollect) {
    item.addEventListener("click", handlerSelectedItem )
}


let selectedItems = []

function handlerSelectedItem(event) {
    const itemLi = event.target

    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id 

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })  

    const colletedItems = document.querySelector("input[name=items]")

    if(alreadySelected >= 0 ) {
        const filteredItems = selectedItems.filter( item => {
            const itemsIsDiefferent = item != itemId
            return itemsIsDiefferent
        })

        selectedItems = filteredItems
     } else {
         selectedItems.push(itemId)
     }
    // verificar se exite items selecionados e quais são 
     colletedItems.value = selectedItems

}