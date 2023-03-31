import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { generateId } from '../../hooks/reduxHook';
import { StateMents } from '../../modals/initialStatement';
import { useAppDispatch } from '../../hooks/reduxHook'
import { statementAction } from '../../store/statementConsole';
import classes from './FormComponent.module.css'



const FormComponent = () => {

    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [formIsValid, setFormIsValid] = useState<boolean>(false);

    const dispatch = useAppDispatch();

    const titleChangeHandler = (
        event: ChangeEvent<HTMLInputElement>
    ) => {        
        setTitle(event.target.value);
    }

    const amountChangeHandler = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setAmount(Number(event.target.value));
    }

    const addStatementHandler = (event: FormEvent) => {
        event.preventDefault();

        const statement: StateMents = {
            id: generateId(),
            title,
            amount
        };
        
        dispatch(statementAction.addStatement(statement));
        setTitle('');
        setAmount(0);
        setFormIsValid(false);
    }

    useEffect(() => {
        const isValidStatement: boolean 
            = title.trim().length > 0 
            && amount !== 0;
        
        if (isValidStatement) setFormIsValid(true);
    }, [title, amount, formIsValid, setFormIsValid])


    return (
        <div>
            <form onSubmit={addStatementHandler}>
                <Input
                    className={classes["form-control"]} 
                    title={'Name List'}
                    type={'text'}
                    placeholder={'Transaction'}
                    value={title}
                    onChange={titleChangeHandler}
                />
                <Input
                    className={classes["form-control"]} 
                    title={'Amount'}
                    type={'number'}
                    placeholder={'- expense, + income'}
                    value={amount}
                    onChange={amountChangeHandler}
                />            
                <Button 
                    type={'submit'}
                    className={classes.btn}
                    disabled={!formIsValid}
                    title={'Add'}
                />
            </form>

        </div>
    )
}

export default FormComponent