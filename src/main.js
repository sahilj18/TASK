import './index.css'

// make a function
const input =[1,2,3,4,5]

function randomvalue(array){
    const list=[...array];
    return() =>{
        const rn=Math.floor(Math.random()*array.length);
        const removed= list.splice(rn,1)[0]
        return removed
        
    }
       
}




