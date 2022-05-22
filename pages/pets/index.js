import Image from 'next/image'
import img1 from '../../public/assets/images/1.jpg'

function PetsPage() {
    return (
        <div>
            <Image src={img1} blurDataURL={img1.blurDataURL} placeholder="blur" alt="pet" width="400" height="400" />
            {
                ['1', '2', '3', '4', '5'].map((path) => {
                    return (
                        <div key={path}>
                            <Image 
                                src={`/assets/images/${path}.jpg`} 
                                // blurDataURL={`/assets/images/${path}.jpg`}
                                // placeholder="blur" 
                                alt="pet" width="400" height="400" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PetsPage;