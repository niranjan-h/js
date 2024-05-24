// Immediatelt Invoked Function Expressions (IFFE) ()()
// ()() Where the First () is a funtion definition and Ssecond () is execution call 

// 2 IFFIs with the ;
(function chai(){
    //named IFFE
    console.log(`DB Connected`);
})();

( (name) => {
    //Unnamed IFEE
    console.log(`DB Connected TWO ${name}`);
} )('hitesh')
