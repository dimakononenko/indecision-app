const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of comouter',
    options: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
    
    // e. here acts as the element the event started on
    const option = e.target.elements.option.value;
    //by default empty string = 0, so if it's true code will run
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
    }
  };
  
  const OnRemoveAll = () => {
    app.options = [];
    render();
  };
  
  const appRoot = document.getElementById('app');
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
  }
  
  const numbers = [99, 45, 9850];
  let i = 0;
  
  const render = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are my options:' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={OnRemoveAll}>Remove ALL</button>
        <ol>
          {
            app.options.map((option) => {
              return <li key={i++}>{option}</li>
            })
          }
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type="text" name="option"/>
          <button>Add option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  render();