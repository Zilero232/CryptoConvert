import { useEffect, useRef } from 'react'

const useAppendHTML = (content: any) => {
    const about = useRef<any>(null)

    useEffect(() => {
        const liLast = document.createElement<any>('div');
        liLast.innerHTML = content
        about.current.append(liLast)
    }, [])

    return (
        <div ref={about}></div>
    )
}

export default useAppendHTML