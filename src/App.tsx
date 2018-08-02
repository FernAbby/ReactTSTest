import * as React from 'react';

class App extends React.Component{
    public state:{
        test: string;
        student: I.Person;
    }
    constructor(prop){
        super(prop);
        this.state = {
            test: '测试',
            student: {
                name: "wenzhen",
                age: 18,
            },
        }
    }
    render(){
        return (
            <div>
                <div>{this.state.test}</div>
            </div>
        );
    }
}

export default App;