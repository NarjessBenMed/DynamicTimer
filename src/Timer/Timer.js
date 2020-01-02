import React, { Component } from 'react'
import './Timer.css'


export default class Timer extends Component {

    constructor (props){
        super (props)
        this.state= {
                timer: 0,
                second:0,
                minute:0,
                hour:0,
                isOn:false,
                   };

                   
          
                   

     setInterval( 
                         
     () => {  if ( this.state.isOn)
                        {
                  this.setState({
                      
                     timer: this.state.timer + 1,


                    hour:  Math.floor  (  this.state.timer / 3600),
                    minute:  Math.floor ( (this.state.timer % 3600) /60),
                     second:  Math.floor ( this.state.timer % 60)
                    
                        }
                                    
                       )
                            
                    }},1000
                )
                }
            
                        


Start =()=> {


this.setState ({isOn: ! (this.state.isOn)})


}





  Reset=()=>
  { 
      this.setState({timer:0,

                     second:0,
                     minute:0,
                     hour:0,
                     isOn:false
    
    
    })
    
  }



    render() {
        return (
            <div className="DynamicTimer">
        

                  
                    <div className="Timer">
             
                   <h1>  {String(this.state.hour).padStart(2,'0')}  : </h1>
        
                   <h1>  {String(this.state.minute).padStart(2,'0')} :  </h1>
                
                   <h1>  {String(this.state.second).padStart(2,'0')}  </h1>

                   </div>

<div className="Timer">
      <label>  Hour  </label>
      <label>  Minute  </label>
      <label>  second  </label>

</div>

                   <div className="ButtTimer" > 
                   <button onClick={this.Start}> Start  </button>
                   <button value="reset" onClick={this.Reset}> Reset </button>
                   </div>
            </div>
        )
    }

}