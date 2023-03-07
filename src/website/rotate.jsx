import { transform } from 'framer-motion';
import { useState } from 'react';
import ReactCurvedText from 'react-curved-text';

const Rotate = ({color}) => {
    // const [color, setColor] = useState("#fff")
    
    return (
        <div className='font-Helvetica'>
            <div className='hidden lg:block'>
                <ReactCurvedText
                    width={200}
                    height={200}
                    cx="100"
                    cy="100"
                    rx={48}
                    ry={48}
                    startOffset={0}
                    reversed={true}
                    text="HXAFRICA INVESTMENT MADE EASY"
                    textProps={{ style: { fontSize: 16 } }}
                    textPathProps={{ "fill": color }}
                    tspanProps={{ "dy": "-10" }}
                    ellipseProps={null}
                    svgProps={{ "style": { "transform": "rotate(-90deg)" } }}
                />
            </div>
            <div className='lg:hidden'>
                <ReactCurvedText
                    width={200}
                    height={200}
                    cx="100"
                    cy="100"
                    rx={35}
                    ry={35}
                    startOffset={0}
                    reversed={true}
                    text="HXAFRICA INVESTMENT MADE EASY"
                    textProps={{ style: { fontSize: 12 } }}
                    textPathProps={{ "fill": color }}
                    tspanProps={{ "dy": "-10" }}
                    ellipseProps={null}
                    svgProps={{ "style": { "transform": "rotate(-90deg)" } }}
                />
            </div>
            





        </div>
    )
}

export default Rotate