export function doThing(eleRef) {
    if (eleRef == null) {
        console.error("Element is null on after render!");
    } else {
        console.log("Element is set on after render!");
    }
}

export function doOtherThing(eleRef) {
    if (eleRef == null) {
        console.log("Element is null on dispose!");
    } else {
        console.log("Element is set on dispose!");
    }
}