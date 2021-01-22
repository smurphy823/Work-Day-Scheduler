$(".saveBtn").on("click", function(){
    var textValue = $(this).siblings(".description").val()
    var id = $(this).parent().attr("id")
    localStorage.setItem(id, textValue);
})

function upDateTime(){
    var currentTime = moment().hours()
    console.log(currentTime)
    $(".time-block").each(function(){
        var blockId = $(this).attr("id")
        if(blockId < currentTime){
            $(this).addClass("past")
        }
        else if(blockId > currentTime){
            $(this).addClass("future")
        }
        else{
            $(this).addClass("present")
        }
    })
}

upDateTime()

$("#currentDay").text(moment().format('MMMM Do YYYY'))

$("#9 .description").val(localStorage.getItem("9"))

