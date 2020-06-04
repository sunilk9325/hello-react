import { useState } from 'react';

const useCustomCounter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    // return {
    //     count, incrementCount
    // }

    return [
        count, incrementCount
    ]
}

export default useCustomCounter;