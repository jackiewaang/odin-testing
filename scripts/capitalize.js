export function capitalize(str){
    if(str.length == 0){
        throw new Error("String is empty");
    }
    return str.at(0).toUpperCase() + str.substring(1).toLowerCase();
}