import { createStore, applyMiddleware } from 'redux'

const reducer = (state, action) => {  
	console.info("reducer", state, action);
	let result = state
	switch (action.type) {
	case "INC":
	  result += action.payload
	  break;
	case "DEC":
	  result -= action.payload
	  break;
	}
	return result
}

/* const logger = store => next => action => {  
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
} */
var logger = function logger(store) {
  return function (next) {
    return function (action) {
      console.log('dispatching', action);
      var result = next(action);
      console.log('next state', store.getState());
      return result;
    };
  };
};


const store = createStore(reducer, 0, applyMiddleware(logger))


store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 2})
store.dispatch({type: 'DEC', payload: 5})


/* 
这个短小的例子已经用到了我们要讲的几个主要概念，reducer、store、middleware、action。
store 负责状态的存储，需要注意的是，在 redux 中只有一个 store，而如何在一个 store 中维护众多的状态，我们后面会提到。
action 则类似触发事件，使用 store.dispatch 发送出去，必须要有一个 type 属性。同时 action 也可以附带其他数据，例如上面代码里的 payload。
reducer 在每次有新的 action 时被触发，则只做一件事情，就是收到当前的 state 和 action，并且返回一个全新的 state。
middleware 则发生在每次 action dispatch 后，reducer 触发前，在 middleware 中调用 next(action) 才会将 action 传递给 reducer 并且返回新的结果。这种设计可以让我们很灵活的实现一些针对所有 action 的功能，例如 log 或者针对特定类型的 action 做一些处理等。
这样，整个 redux 就相当于一个状态机，新的 action 被触发，经过 middleware，由 reducer 产生新的状态。
我特意没有把他们画成一个循环，因为 state 是不应该改变的，只是由 reducer 返回新的 state。也正是这个原因，我们在使用 redux 开发应用时，可以很轻松地跟踪到状态的变化，将状态直接 revert 到某个点，撤销这一类的功能非常容易实现。 
*/