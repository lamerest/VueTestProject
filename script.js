var app = new Vue({
    el: '#app',
    data: {
        jokes: [],
        search: '',
        visible: true,
        request: ''
    },
    methods: {
        searchJokes: function (){

        }
    }
})

function like(){

}

window.addEventListener('load', ()=>{
    console.log("Loaded!")
    let url = "https://v2.jokeapi.dev/joke/Misc?amount=10?blacklistFlags=nsfw,racist,sexist,explicit"
    let request = new XMLHttpRequest()
    request.open("GET", url)
    request.setRequestHeader("Content-Type", "application/json")
    request.send()

    request.onload = () => {

        if (request.status !== 200){
            console.log(request.status + request.statusText);

        } else {
            let response = JSON.parse(request.responseText)
            console.log(response);
            for (let joke of response.jokes){
                if (joke.setup === undefined && joke.delivery === undefined){
                    console.log(joke.joke)
                    app.jokes.push({ text: joke.joke})
                } else {
                    app.jokes.push({text: joke.setup + "\n" + joke.delivery})
                    console.log(joke.setup, joke.delivery)
                }
            }
        }
    }
})
