console.log("Let's get this party started!");


async function getGif(){
    let searchValue = $("input").val();
    let gif = await axios.get(
        "http://api.giphy.com/v1/gifs/search", 
        {params: {q:searchValue, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"}})

    // console.log(gif.data.data)
    appendGif(gif.data.data[0][0].images.downsized_large.url)
}

function appendGif(url){
    let gifImage = $("<image>")
        .css("src",  url)

    $(".gifs").append(gifImage)
}

$(function(){
    $("#search").on("click", getGif)
})
