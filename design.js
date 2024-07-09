var bulb = 0;

function findbulb()
{
    if(bulb==0)
    {
        document.getElementById("image").src = "images (1).jpg";
        bulb=1;
    }
    else{
        document.getElementById("image").src = "images.jpg";
        bulb=0;
    }
}