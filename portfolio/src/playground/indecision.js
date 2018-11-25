//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
console.log("app.js is running");

const app = {
    title: 'Indecision Application',
    subtitle: 'It started!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const appRoot = document.getElementById('app')

const numbers = [55, 101, 1000];

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options': 'No options'}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
renderApp();