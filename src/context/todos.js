import { createContext, useState } from 'react';
// ContextApi에서 Provider의 value값은 하나의 객체만 가질 수 있다.
// 리덕스에서 사용한것과 같이 Provider를 상위에 감싸주어도 되지만 children을 사용해서
// 안에 컴포넌트가 들어갈 수 있도록 해준다.

// 새로운 컨텍스트를 만들때는 createContext함수를 사용한다.
// 파라미터에는 해당 context의 [기본 상태]를 지정한다. (initialState)
const TodoContext = createContext({
    // state와 같은개념
    todos: {inputValue: '', todo: []},
    // setState와 같은개념
    actions: {setTodos: () => {}}
})

// Provider를 사용하면 context의 value값을 변경할 수 있다.
const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState({
        inputValue: '',
        todo: [{id:1, text:'컨텍스트 연습하기', done:false}]
    })
    // value에 알아보기 쉽도록 요렇게 적어주어도 된다.
    // const value = {
    //  state: { inputValue, todo }  
    //  action: { setTodos }
    // }
    const value = {todos, setTodos};
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}

// export { TodoProvider, TodoContext} 로 해주어도 되지만
// import시 객체로 묶어야 하기때문에 TodoContext는 default를 사용해주었다.

export {TodoProvider};
export default TodoContext;