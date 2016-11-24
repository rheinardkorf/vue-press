var ViewController = function( component ) {
    return ViewController.get(component)
}

ViewController.get = function( component ) {
    return require('./components/'+component)
}

export default ViewController;
