
class TituloDinamico extends HTMLElement {

    constructor(){
        super()             

        const shadow = this.attachShadow({mode:"open"});

        //base do component
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo");
        
        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
        h1 {
            color:gray;
        }
        `
// enviar para shawdo                              
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}
//sempre colocar um ifen no nome para diferenciar das tags existentes

//primeiro parametro nome-do-seu-component segundo parametro nomeDaSuaClasse:
customElements.define('titulo-dinamico',TituloDinamico);