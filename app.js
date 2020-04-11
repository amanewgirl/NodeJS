function printstuff(stuff,){
    console.log(stuff)
}//created the function, with the parameter stuff

//printstuff("Hello world"); //calling the function
//printstuff();//this will come up undefined as it is not being used properly

//functions can use other functions as arguements
function mainfunction(anotherfunction, value){
    anotherfunction(value);
}
mainfunction(printstuff,"hiya");