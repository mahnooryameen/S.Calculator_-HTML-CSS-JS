function getnum(num){
    //console.log(num)  //just to check k click pe yehi number mily
    document.getElementById('show').value += num;

    // docuemt se murad in entire docuent, get element by id means bracket main hum id dengy to id pe, .value se murad k jo userinput ha yani jo display krna ha wo is equal to means wo num k barabar krdo
    // ab ho yeh raha ha k purana wala gayab ho raha jab naya araha ha to .. isko overcome krny k liye += krdengy 
}

function clearscreen(){
    document.getElementById('show').value="";
}

function removeonenum(){
    var s= document.getElementById('show').value //yahan pe wo value dekh rhi jo input field ma is real time ma ha 
    document.getElementById('show').value = document.getElementById('show').value.slice(0,s.length-1); 
}

//AC mai sirf ek number remove krny k liye splash use krengy matlab pury input field mai jo ha uski copy banayengy phir usky bad us copy se akhri wala remove krdengy then wo copy input field mai dhal dengy
//slice  (start, end)   hamain end nh maloom isliye hum s.length krengy taky s ki jitni bhi length ha utny ka slice ban jaye 
// ek chez note kro k length main hamary passe kam batata ha and array k pass ek value pechy kr k batata ha and slice mai yeh hota ha k end wala exclude krdeta ha to isliye we will make logic like s.length-1


function getanswer(){
    document.getElementById('show').value = eval (document.getElementById('show').value)
}

//eval ek function ha jis se hota yeh ha k hum jo bhi expression dety hain uska output de deta ha 