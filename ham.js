let arr=[2,4,5,6,7,8];
 for(let i=0;i<=arr.length/2;i++){
    let x=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=x;
}
 document.write(arr)