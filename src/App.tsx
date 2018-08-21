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
        const {test,student} = this.state;
        return (
            <div>
                <div>{test}</div>
                <div>{student.name}</div>
            </div>
        );
    }
}

export default App;