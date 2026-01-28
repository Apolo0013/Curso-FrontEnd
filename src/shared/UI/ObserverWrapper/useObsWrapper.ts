import type { ParamObserver } from "./type"

function useObserverWrapper() {
    function Observer({SetStyle, el}: ParamObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    SetStyle({
                        x: "0",
                        y: "0",
                        opacity: 1
                    })
                    //parar de ver
                    observer.disconnect()
                }
            })
        })
        //observa
        observer.observe(el)
    }
    
    return {
        Observer
    }
}

export default useObserverWrapper