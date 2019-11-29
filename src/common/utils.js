export default function debounce(fn, delay) {
    let timer = null
    return function (...arg) {
        if (timer) {
            clearInterval(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arg)
        }, delay)
    }
}
