async function main() {
    const myp = new Promise( (resolve, reject) => {
        let a = 5;
        let b = 6;
        setTimeout( () => {
            resolve(a + b);
        } , 5000);

    });
    const a = await myp;
    console.log("a: " , a);

}
main();





//myp.then(result => {
   // console.log(result);
//})
