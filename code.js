
var names=["Rahul","mohan","vivan","rajiv","arjun"]
var images=["image2family.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg"]

var i=0;
function update()
{ 
    i++;
var number_of_family_mem_in_array=4
if(i>number_of_family_mem_in_array)
{
    i=0;
}
var updatedimage=images[i];
var updatedname=names[i];
document.getElementById("family_mem_image").src= updatedimage;
document.getElementById("family_mem_names").innerHTML= updatedname;

}