import './Avatar.scss'

function Avatar({src, alt}: {src: string, alt: string}) {
    return <img
        src={src}
        alt={alt}
        className='avatar'
    />
        
}

export default Avatar