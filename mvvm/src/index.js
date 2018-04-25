window.Promise = Promise;//ie8 promise 
import san from 'san';

var MyApp = san.defineComponent({
    template:`<p>hello world,{{name}}</p>`,
    initData:function(){
        return {
            name :"San"
        }
    }
});

var myApp = new MyApp();
myApp.attach(document.body);
