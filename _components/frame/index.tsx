import Frame from './style.module.css'

const Frames = ({src, alt}:{src: string, alt: string}) => {
    return (
        <>
            <div className={Frame.border}>
                <div className={Frame.background}>
                    <img 
                        src={src} 
                        alt={alt}
                        className={Frame.image}
                    />
                </div>
            </div>
        </>
    )
}

export default Frames