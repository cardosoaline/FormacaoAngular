class Cardnews extends HTMLElement {

    constructor(){
        super();//invoca o metodo constructor de quem está herdando!

        const shadow = this.attachShadow({mode:"open"});//Aberto a modificações externas
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }
    //Profissionalizando o component:   span h1 p
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonimos");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")
        

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("texto");
        

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card__right");

        const newsImg = document.createElement("img");
        newsImg.src = this.getAttribute("photo") || "assets/img/fotoDefault.png";
        cardRight.appendChild(newsImg);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }


    style(){
        const style = document.createElement("style");
        style.textContent = `            
            .card {
                width: 70%;
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 20px;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: bold;
            }
            
            .card__left > h1 {
                margin-top: 15px;
                font-size: 25px;
            }
            
            .card__left > p {
                color: gray;
            }

            `
            return style;
        }
        }

customElements.define("card-news", Cardnews);