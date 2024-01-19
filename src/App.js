import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="main-component">
        <div className="first">TODO</div>
        <div className="second">
          <div className="Taskheading">
            <p>
              <b>Task list</b>
            </p>
            <p>0/5 done</p>
          </div>
          <div className="list">
            <div>
              <input type="checkbox" />
              <span>Identify and contextualize the problem</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Present ideas and changes to learn</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Prepare User Flows</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Prepare deign style guide</span>
            </div>
            <div>
              <input type="checkbox" />
              <span>Delivery tage: test and release</span>
            </div>
          </div>
        </div>
        <div className="third">
          <p>+ Add Task</p>
        </div>
      </div>
    </div>
  );
}
