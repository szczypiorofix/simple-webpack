

const debugClass = () => {
    console.log(`debug class evaluated`);
    return function( target: any ) {
        console.log(`debug class called: ${target}`);
    }
}

const debugMethod = (value: boolean) => {
    console.log(`debug method evaluated`);
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        console.log('debug method called - target: ', target);
        console.log('debug method called - propertyKey: ', propertyKey);
        console.log('debug method called - descriptor: ', descriptor);
    }
}

export { debugClass, debugMethod };