import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'

export default function Loader({status}) {
    return (
        <>
            {status.loading ? (
                <div className='loader-container'>
                    <TailChase
                        size="40"
                        speed="1.75"
                        color="var(--highlight)" 
                    />
                    <p className='loader-text'>Submitting Quote Request...</p>
                </div>
            ) : (
                <div className='loader-container'>
                    {status.success && <p className='success-message'>{status.success}</p>}
                    {status.error && <p className='error-message'>{status.error}</p>}
                </div>
            )}
        </>
)}