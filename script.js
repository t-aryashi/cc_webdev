let promise = fetch("https://coding-week-2024-api.onrender.com/api/data")
let val = undefined

promise.then((value)=>{
    return value.json()
}).then((value)=>{
    val = value
    for(let i=0; i<4;i++){
        const img = document.getElementById('i'+(i+1));
        const gradient = 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)';
        img.style.backgroundImage = `${gradient}, url(${value[i].image})`;
        const tag = document.getElementById('t'+(i+1));
        tag.textContent = value[i].type;
        const headline = document.getElementById('h_'+(i+1));
        headline.textContent = value[i].headline;
        const date = document.getElementById('d'+(i+1));
        date.textContent = value[i].date;
    }
    i.src = value[4].image;
    h.textContent = value[4].headline;
    d.textContent = value[4].date;
    for(let i=5;i<value.length;i++){
        const card = document.getElementById('card1');
        const newCard = card.cloneNode(true)
        newCard.id = 'card' + (i-3);
        const cards= document.getElementById('cards');
        cards.appendChild(newCard)
        const img2 = newCard.querySelector('#i')
        const headline2 = newCard.querySelector('#h')
        const date2 = newCard.querySelector('#d')
        img2.src = value[i].image
        headline2.textContent = value[i].headline;
        date2.textContent = value[i].date;
        let flag=false
        let pointer = null
        newCard.addEventListener('click', function(){
            const headl = newCard.querySelector('#h')
            console.log("hi")
            if(!flag){
                for(let i=4;i<val.length;i++){
                    console.log("hi")
                    if(headl.textContent === val[i].headline){
                        console.log("hi")
                        flag=true
                        const content = document.createElement('div')
                        content.textContent = val[i].content
                        document.body.appendChild(content)
                        const rect = newCard.getBoundingClientRect();
                        content.style.position = 'absolute'
                        content.style.top =  (rect.top) + 'px';
                        content.style.right = (window.innerWidth - rect.left + 5) + 'px';
                        content.style.width = '20vw'
                        content.style.padding = '2vh'
                        content.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                        content.style.backgroundColor = '#EEEEEE'
                        content.style.color = 'black'
                        content.style.borderRadius = '5px'
                        pointer = content
                        break;
                    }
                }
            }
            else{
                flag = false
                if(pointer){
                    pointer.remove()
                    pointer = null
                }
            }
        })
    }
})

let flag=false
let pointer = null
const sideBlog = document.querySelectorAll('.card')
sideBlog.forEach(element => {
    element.addEventListener('click', function(){
        const headl = element.querySelector('#h')
        console.log("hi")
        if(!flag){
            for(let i=4;i<val.length;i++){
                console.log("hi")
                if(headl.textContent === val[i].headline){
                    console.log("hi")
                    flag=true
                    const content = document.createElement('div')
                    content.textContent = val[i].content
                    document.body.appendChild(content)
                    const rect = element.getBoundingClientRect();
                    content.style.position = 'absolute'
                    content.style.top =  (rect.top) + 'px';
                    content.style.right = (window.innerWidth - rect.left + 5) + 'px';
                    content.style.width = '20vw'
                    content.style.padding = '2vh'
                    content.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
                    content.style.backgroundColor = '#EEEEEE'
                    content.style.color = 'black'
                    content.style.borderRadius = '5px'
                    pointer = content
                    break;
                }
            }
        }
        else{
            flag = false
            if(pointer){
                pointer.remove()
                pointer = null
            }
        }
    })
});

