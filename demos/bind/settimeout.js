let user = {
    name: 'Jake',
    say: function() {
        console.log('Hello ' + this.name + '!');
    }
};

user.say(); // Hello, Jake!

setTimeout(user.say, 100); // Hello, undefined!
setTimeout(user.say.bind(user), 1000); // Hello, Jake!
