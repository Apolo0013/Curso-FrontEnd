import type { ParamObserver } from "./type"

function useObserverWrapper() {
    function Observer({ SetStyle, el, threshold, Setchildrenview}: ParamObserver) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        SetStyle({
                            x: "0",
                            y: "0",
                            opacity: 1
                        })
                        //exbindo o filho/children
                        Setchildrenview(true)
                        //parar de ver
                        observer.disconnect()
                    }
                    
                })
            },
            {
                threshold: threshold
            }    
        )
        //observa
        observer.observe(el)
    }
    
    return {
        Observer
    }
}

export default useObserverWrapper