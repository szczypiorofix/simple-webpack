
const debugClass = () => {
    console.log(`debug class evaluated`);
    return function( target: Object ) {
        console.log(`debug class called: ${target}`);
    }
}

const debugMethod = ( message: string ) => {
    console.log(`debug method evaluated`);
    return function( target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor ) {
        console.log('debug method called - target: ', target);
        console.log('debug method called - propertyKey: ', propertyKey);
        console.log('debug method called - descriptor: ', descriptor);

        const original = descriptor.value;

        descriptor.value = function( ...args: any[] ): any {
            const allow = confirm( message );
            if (allow) {
                return original.apply(this, args);
            } else {
                return null;
            }
        }

        return descriptor;
    }
}

export { debugClass, debugMethod };
