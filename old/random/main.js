
$(function () {
    $("input").on("click", function () {
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        $("h1").text($("li").eq(randomChildNumber).text());
        if(randomChildNumber==0)
        document.getElementById("myImage").src="https://tse4.mm.bing.net/th?id=OIP.LQxltwF9LPhjRz7_U8t_RAHaEK&pid=Api&P=0&w=276&h=156";
        else if(randomChildNumber==1)
        document.getElementById("myImage").src="https://image.cache.storm.mg/styles/smg-800x533-fp/s3/media/image/2018/01/22/20180122-061135_U6077_M372466_3416.jpg?itok=dqBKHP3i";
        else if(randomChildNumber==2)
        document.getElementById("myImage").src="https://linky.tw/wp-content/uploads/2018/06/57eca2287749c_1024-1000x600.jpg";
       
    });
});

