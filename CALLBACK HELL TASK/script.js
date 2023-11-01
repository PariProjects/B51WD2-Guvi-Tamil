// Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen Using DOM.

setTimeout(() => {
    document.getElementById("Timer").innerHTML = 10;
    setTimeout(() =>{
        document.getElementById("Timer").innerHTML = 9;
        setTimeout(() =>{
            document.getElementById("Timer").innerHTML = 8;
            setTimeout(() =>{
                document.getElementById("Timer").innerHTML = 7;
                setTimeout(() =>{
                    document.getElementById("Timer").innerHTML = 6;
                    setTimeout(() =>{
                        document.getElementById("Timer").innerHTML = 5;
                        setTimeout(() =>{
                            document.getElementById("Timer").innerHTML = 4;
                            setTimeout(() =>{
                                document.getElementById("Timer").innerHTML = 3;
                                setTimeout(() =>{
                                    document.getElementById("Timer").innerHTML = 2;
                                    setTimeout(() =>{
                                        document.getElementById("Timer").innerHTML = 1;
                                        setTimeout(() =>{
                                            document.getElementById("Timer").innerHTML = 0;
                                            setTimeout(() =>{
                                                document.getElementById("Timer").innerHTML = "Happy Independence Day";
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
});
