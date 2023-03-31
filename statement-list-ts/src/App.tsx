import ReportComponent from './components/Console/ReportComponent';
import FormComponent from './components/Form/FormComponent';
import Transaction from './components/Console/Transaction';
import classes from './App.module.css'

const App = () => {
    return (
        <div className={classes.container}>
            <ReportComponent />
            <FormComponent/>
            <Transaction />
        </div>
    )
}

export default App