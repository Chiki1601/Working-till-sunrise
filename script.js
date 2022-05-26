function deskAnimate(){

    var desk = new TimelineMax();


    desk.to('#Sun','0',{y:500, opacity:1, force3d:false})
    .to('#cup','0',{x:1500, opacity:1, force3d:false})
    .to('#Sun','3',{y:0, delay: 1, force3d:false})
    .to('#brightness_1_','3',{opacity:0},'-=3')
    .to('#stars','1',{opacity:0},'-=3')
    .to('#bhill','3',{opacity:0},'-=3')
    .to('#zepp','3',{opacity:0, force3d:false},'-=3')
    .to('#btable','3',{opacity:0},'-=3')
    .to('#cup','1',{x:0,force3d:false});
}

function deskContinous(){

  var continous = new TimelineMax() ;

  continous.to('#zepp-b','360',{x:-1200, force3d:false})
  .to('#zepp','360',{x:-1200, force3d:false},'-=360')
  .to('.st82','360',{x:1000, force3d:false},'-=360');
  continous.timeScale(1);
}

deskContinous();
deskAnimate();