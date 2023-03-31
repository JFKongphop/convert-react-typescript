import { useAppSelector } from '../../hooks/reduxHook'
import classes from './ReportComponent.module.css';


const ReportComponent = () => {
    // set type of useSelector at hook directory
    const { expense, income } = useAppSelector((state) => state.statementConsole)

    return (
        <div>
            <h4>Totol</h4>
            <h1>${expense + income}</h1>
            <div className={classes['report-container']}>
                <div>
                    <h4>Income</h4>
                    <p className={classes['report-p']}>${income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className={classes['report-m']}>${Math.abs(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent