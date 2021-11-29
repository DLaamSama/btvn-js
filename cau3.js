
const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function Chuanhoa (name) {
    name = name.trim();
    for(let i=0; i<name.length; i++)
    name = name.replace("  ", " ");
    name = name.toLowerCase();
    var s1;
    if(name.charAt(0) >= '0' && name.charAt(0) <= '9')
    s1=''; else 
    s1= name.charAt(0)
    for (let i=1; i<name.length; i++){
        let k = name.charAt(i);
        if (name.charAt(i-1)  == ' ')
        k=k.toUpperCase();
        if(name.charAt(i)>= '0' && name.charAt(i) <= '9')
        k='';
        s1+=k;

    }
    var check = ''
    for (let i=0; i < s1.length; i++) {
        let k= s1.charAt(i);
        if(i==0) 
        k=k.toUpperCase();
        check+=k;
    }
    console.log(check);

}
Chuanhoa(case1);
Chuanhoa(case2);
Chuanhoa(case3);