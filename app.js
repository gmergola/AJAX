console.log("Let's get this party started!");


async function getGif(){
    let searchValue = $("input").val();
    // let searchValue = "joke"
    let gif = await axios.get(
        "http://api.giphy.com/v1/gifs/search", {params: {q:searchValue, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})
    return  gif.data.data[0].images.original.url;
}

$("form").on("submit", async function appendGif(evt){
    evt.preventDefault();
    let theUrl = await getGif();
    let gifDiv = $("<div>")
        .css("background-image",  `url(${theUrl})`)

    $("#gifs").append(gifDiv)

    $(function(){
        $("#search").on("click", appendGif)
    })
})


