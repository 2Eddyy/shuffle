function shuffle() {
    let word='AFYZI'
    keyvalue="";
    // console.log(keyvalue);
    for(let i=0;keyvalue.length<6;i++){
        random=Math.round(Math.random()*6);
        if(keyvalue.indexOf(random)<-1);
        keyvalue+=word.substring(random,random+1);
    }
    console.log(keyvalue);

    counter=0;
    while(counter <6){
        counter++;
        var result=document.querySelector('#num'+counter).value=keyvalue[counter];
     
        console.log(result);
        // console.log(counter);
    }
}
