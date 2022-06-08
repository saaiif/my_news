export function debounce(func, delay){
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      console.log(context,args,"asdf45456")
      func.apply(context, args);
    }, delay);
  };
};
