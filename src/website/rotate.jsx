import { transform } from 'framer-motion';
import { useState } from 'react';
import ReactCurvedText from 'react-curved-text';

const Rotate = ({color}) => {
    // const [color, setColor] = useState("#fff")
    
    return (
        <div className='font-Helvetica'>
            <ReactCurvedText
                width={200}
                height={200}
                cx="100"
                cy="100"
                rx={50}
                ry={50}
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
    )
}

export default Rotate