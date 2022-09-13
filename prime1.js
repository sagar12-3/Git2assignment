
let n=13;
let count=0;
let ar;
for(let i=1;i<=n;i++){
    
   if ((n%i==0) && (n%n==0)){
       count++;
   }
}
   if (count>0){
      console.log("prime no.");
   }else{
      console.log("Not prime no");
   }
   