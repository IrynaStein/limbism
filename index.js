let imageChange = document.getElementById('orange-m');
imageChange.addEventListener('mouseover', function() {
  imageChange.src = "images/PinkMushroom.png";
});

imageChange.addEventListener('mouseout', function() {
    imageChange.src = "images/OrangeMushroom.png";
  });

  let img1 = document.getElementById('img1')
  let img2 = document.getElementById('img2')
  let img3 = document.getElementById('img3')

  img1.addEventListener ('mouseover', function(){
      img1.className = 'artWorks big-image'
  });
  img1.addEventListener ('mouseout', function(){
    img1.className = 'artWorks small-image'
});

img2.addEventListener ('mouseover', function(){
    img2.className = 'artWorks big-image'
});
img2.addEventListener ('mouseout', function(){
  img2.className = 'artWorks small-image'
});

img3.addEventListener ('mouseover', function(){
    img3.className = 'artWorks big-image'
});
img3.addEventListener ('mouseout', function(){
  img3.className = 'artWorks small-image'
});

let imageChange2 = document.getElementById('green-m');
imageChange2.addEventListener('mouseover', function() {
  imageChange2.src = "images/PurpleMushroom.png";
});

imageChange2.addEventListener('mouseout', function() {
    imageChange2.src = "images/GreenMushroom.png";
  });
