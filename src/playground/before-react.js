console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
const appRoot = document.getElementById('app');

const numbers = [55, 101,21]
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  const onFormSubmit=(e)=>{
      e.preventDefault()
      const option= e.target.elements.option.value
      if(option){
          app.options.push(option)
          e.target.elements.option.value=''
          console.log(app.options)
          render()
      }

    }

    const removeAll=(e)=>{
        app.options=[]
        render()    
    }

    const onMakeDecision=(e)=>{
        const randomNum=Math.floor(Math.random()*app.options.length)
        const option = app.options[randomNum]
        alert(option)
    }
    const render=()=>{
        const template = (
            <div>
        
              <h1>{app.title}</h1>
              {app.subtitle && <p>{app.subtitle}</p>}
              <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
               <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>
              <button onClick={removeAll}>Remove all</button>
              
              <ol>

                    {
                        app.options.map((option)=>{
                            return <li key={option}>{option}</li>
                        })
                    }

              </ol>
             <form onSubmit={onFormSubmit}>
                <input type="text" name ="option"></input>
                <button>Add option</button>
             </form>
            </div>
          );
          ReactDOM.render(template, appRoot);


    }

render();