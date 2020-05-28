export function loginVal(valid,valpw){
    console.log('action')
    console.log(valid,valpw)
    if(valid==='qsd1233' && valpw==='1234'){
        return {
            type:'TRANSFER',
            id:valid,
            pw:valpw
        }
    }else{
        return {
            type:'TRANSFER',
            id:'Noid',
            pw:'Nopw'
        }
    }
}