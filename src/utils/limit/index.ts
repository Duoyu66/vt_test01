export function fangdou(fn:Function,delay:number){
    let timer:NodeJS.Timeout;
    return function (){
        if (!timer)return;
        timer = setTimeout(()=>{
            // @ts-ignore
            fn.call(this);
        },delay)
    }
}