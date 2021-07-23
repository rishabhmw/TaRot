// Rishabh Maheshwari @M521837
// Time Complexity: O(n) where n is min(numItemToShow, datalist.length)
// getRequiredIndexs1 - Math Method
// getRequiredIndexs2 - Two-pointer Method

exports.getRequiredIndexs1 = (datalist, currentIndex, numItemToShow) => {
    /**
     * @param  {object} datalist      object with length attribute like Array
     * @param  {number} currentIndex  integer which is >=0 and within datalist bounds
     * @param  {number} numItemToShow integer>=0
     * @return {object}               Array with numItemToShow indexes in datalist expanding both sides with preference giving to right side
     */

    let dataSize = datalist.length;
    let maxIndex = dataSize-1;
    if (dataSize===undefined) {
        throw "Invalid Input: datalist length undefined";
    }
    if (!Number.isInteger(currentIndex)) {
        throw "Invalid Input: currentIndex must be an integer";
    }
    if (!(currentIndex>=0 && currentIndex<dataSize)) {
        throw "Invalid Input: currentIndex out of bounds";
    }
    if (!Number.isInteger(numItemToShow) || numItemToShow<0) {
        throw "Invalid Input: numItemToShow must be 0 or a positive integer";
    }

    if (numItemToShow===0) return [];

    let isEven = numItemToShow%2===0;
    let numItemToShowBy2 = Math.floor(numItemToShow*0.5);
    let resMaxIndex = currentIndex+numItemToShowBy2;
    let resMinIndex = currentIndex-numItemToShowBy2;
    if (isEven) resMinIndex++; // no mid, start from right of currentIndex
    if (resMaxIndex>maxIndex) {
        let overflowFromRight = resMaxIndex-maxIndex;
        resMaxIndex = maxIndex;
        resMinIndex = Math.max(0,resMinIndex-overflowFromRight);
    }
    else if (resMinIndex<0) {
        let overflowFromLeft = -resMinIndex;
        resMaxIndex = Math.min(maxIndex, resMaxIndex+overflowFromLeft);
        resMinIndex = 0;
    }
    
    let result = [];
    for (let i=resMinIndex; i<=resMaxIndex; i++) {
        result.push(i);
    }
    return result;
}

exports.getRequiredIndexs2 = (datalist, currentIndex, numItemToShow) => {
    /**
     * @param  {object} datalist      object with length attribute like Array
     * @param  {number} currentIndex  integer which is >=0 and within datalist bounds
     * @param  {number} numItemToShow integer>=0
     * @return {object}               Array with numItemToShow indexes in datalist expanding both sides with preference giving to right side
     */

    let dataSize = datalist.length;
    let maxIndex = dataSize-1;
    if (dataSize===undefined) {
        throw "Invalid Input: datalist length undefined";
    }
    if (!Number.isInteger(currentIndex)) {
        throw "Invalid Input: currentIndex must be an integer";
    }
    if (!(currentIndex>=0 && currentIndex<dataSize)) {
        throw "Invalid Input: currentIndex out of bounds";
    }
    if (!Number.isInteger(numItemToShow) || numItemToShow<0) {
        throw "Invalid Input: numItemToShow must be 0 or a positive integer";
    }

    if (numItemToShow===0) return [];

    let count = 1;
    let left = currentIndex;
    let right = currentIndex;
    let moveRightNext = true; // a flag to allow movement in alt direction each iteration
    while ( 
        count<numItemToShow
        && (left>0 || right<maxIndex) // atleast one pointer can be moved
    ) {
        if (moveRightNext && right<maxIndex) {
            right++;
            count++;
        }
        else if (!moveRightNext && left>0) {
            left--;
            count++;
        }
        moveRightNext = !moveRightNext;
    }
    
    let result = [];
    for (let i=left; i<=right; i++) {
        result.push(i);
    }
    return result;
}